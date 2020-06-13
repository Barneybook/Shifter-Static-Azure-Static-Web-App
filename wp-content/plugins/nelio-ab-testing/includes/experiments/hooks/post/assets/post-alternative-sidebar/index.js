/**
 * WordPress dependencies
 */
import { _x } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
const PluginDocumentSettingPanel = window.wp && window.wp.editPost && window.wp.editPost.PluginDocumentSettingPanel;

/**
 * External dependencies
 */
import { registerCoreExperiments } from '@nab/experiment-library';

/**
 * Internal dependencies
 */
import PostAlternativeManagementBox from '../post-alternative-management-box';
import './style.scss';

const AlternativeEditingSidebar = !! PluginDocumentSettingPanel ?
	( { experimentId, postBeingEdited, type } ) => (
		<PluginDocumentSettingPanel
			className="nab-alternative-editing-sidebar"
			title={ _x( 'Nelio A/B Testing', 'text', 'nelio-ab-testing' ) }
			icon="none"
		>
			<PostAlternativeManagementBox
				experimentId={ experimentId }
				postBeingEdited={ postBeingEdited }
				type={ type }
			/>
		</PluginDocumentSettingPanel>
	) :
	() => null;

export default function init( settings ) {

	registerCoreExperiments();

	const {
		experimentId,
		postBeingEdited,
		type,
	} = settings;

	registerPlugin(
		'nelio-ab-testing',
		{
			render: () => <AlternativeEditingSidebar
				experimentId={ experimentId }
				postBeingEdited={ postBeingEdited }
				type={ type }
			/>,
		}
	);
}//end init()
