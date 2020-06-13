/**
 * WordPress dependencies
 */
import {
	render,
} from '@wordpress/element';
import {
	_x,
} from '@wordpress/i18n';

/**
 * External dependencies
 */
import '@nab/data';
import {
	filter,
} from 'lodash';
import {
	appendSibling,
} from '@nab/utils';

/**
 * Internal dependencies
 */
import {
	getAlternativeSidebars,
	hideAllSidebars,
	organizeSidebars,
} from './utils';
import DuplicateControlWidgetsButton from './duplicate-control-widgets-button';

function initControlEdition() {

	organizeSidebars();
	getAlternativeSidebars().forEach( ( sidebar ) => sidebar.parentNode.style.display = 'none' );

}//end initControlEdition()

function initAlternativeEdition( settings ) {

	organizeSidebars();
	hideAllSidebars();

	const sidebars = filter( settings.sidebars.map( ( sidebarId ) => document.getElementById( sidebarId ) ) );
	sidebars.forEach( ( sidebar ) => sidebar.parentNode.style.display = 'block' );

	renamePage();
	destroyLivePreviewTitleAction();
	addAlternativeTitleActions( settings );

}//end initAlternativeEdition()

function destroyLivePreviewTitleAction() {
	[ ...document.querySelectorAll( '.page-title-action' ) ].forEach( ( button ) => button.remove() );
}//end destroyLivePreviewTitleAction()

function renamePage() {

	const title = document.querySelector( '#wpbody-content .wrap .wp-heading-inline' );
	title.innerHTML = _x( 'Widget Variant', 'text', 'nelio-ab-testing' );

}//end renamePage()

function addAlternativeTitleActions( settings ) {

	const title = document.querySelector( '#wpbody-content .wrap .wp-heading-inline' );

	const aux = document.createElement( 'div' );
	render(
		<DuplicateControlWidgetsButton
			experiment={ settings.experiment }
			alternative={ settings.alternative }
		/>,
		aux
	);
	window.aux = aux;
	const duplicate = aux.children[ 0 ];

	const backToTest = document.createElement( 'a' );
	backToTest.className = 'page-title-action';
	backToTest.innerHTML = _x( 'Back to Test', 'command', 'nelio-ab-testing' );
	backToTest.setAttribute( 'href', settings.links.experimentUrl );

	appendSibling( backToTest, title );
	appendSibling( duplicate, title );

}//end addAlternativeTitleActions()

window.nab = {
	...window.nab,
	initControlEdition,
	initAlternativeEdition,
};
