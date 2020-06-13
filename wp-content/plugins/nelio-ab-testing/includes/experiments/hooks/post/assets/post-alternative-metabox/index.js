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
import PostAlternativeManagementBox from '../post-alternative-management-box';

export default function init( settings ) {

	registerCoreExperiments();

	const {
		experimentId,
		postBeingEdited,
		type,
	} = settings;

	const metabox = document.getElementById( 'nelioab_edit_post_alternative_box' );
	const content = metabox.getElementsByClassName( 'inside' )[ 0 ];

	render( (
		<PostAlternativeManagementBox
			experimentId={ experimentId }
			postBeingEdited={ postBeingEdited }
			type={ type }
		/>
	), content );
}//end init()
