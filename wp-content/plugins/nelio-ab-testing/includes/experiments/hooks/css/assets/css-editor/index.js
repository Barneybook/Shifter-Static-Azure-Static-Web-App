/**
 * WordPress dependencies
 */
import { render } from '@wordpress/element';

/**
 * External dependencies
 */
import { registerCoreExperiments } from '@nab/experiment-library';

/**
 * Internal dependencies
 */
import CssEditorPage from './components/page';

export default function init( id, settings ) {

	registerCoreExperiments();

	const {
		experimentId,
		alternativeId,
	} = settings;

	render( (
		<CssEditorPage
			experimentId={ experimentId }
			alternativeId={ alternativeId }
		/>
	), document.getElementById( id ) );

}//end init()

