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
	appendSibling,
} from '@nab/utils';

/**
 * Internal dependencies
 */
import DuplicateControlMenuButton from './duplicate-control-menu-button';

function initAlternativeEdition( settings ) {

	renamePage();
	renameUpdateMessage();
	destroyUnnecessaryUIElements();
	addAlternativeTitleActions( settings );

}//end initAlternativeEdition()

function renamePage() {

	const title = document.querySelector( '#wpbody-content .wrap .wp-heading-inline' );
	title.innerHTML = _x( 'Menu Variant', 'text', 'nelio-ab-testing' );

}//end renamePage()

function renameUpdateMessage() {

	[ ...document.querySelectorAll( '#message.updated.notice' ) ].forEach( ( notice ) => notice.innerHTML = `<p>${ _x( '<strong>Menu variant</strong> has been updated.', 'text', 'nelio-ab-testing' ) }</p>` );

}//end renameUpdateMessage()

function destroyUnnecessaryUIElements() {

	[ ...document.querySelectorAll( '.wrap > .page-title-action' ) ].forEach( ( button ) => button.remove() );
	[ ...document.querySelectorAll( '.wrap > .nav-tab-wrapper' ) ].forEach( ( tabs ) => tabs.remove() );
	[ ...document.querySelectorAll( '.wrap > .manage-menus' ) ].forEach( ( notice ) => notice.remove() );

	[ ...document.querySelectorAll( '#menu-name, .menu-name-label' ) ].forEach( ( node ) => node.style.display = 'none' );
	[ ...document.querySelectorAll( '#nav-menu-footer .delete-action' ) ].forEach( ( node ) => node.remove() );

	[ ...document.querySelectorAll( '.menu-settings' ) ].forEach( ( node ) => node.remove() );

}//end destroyUnnecessaryUIElements()

function addAlternativeTitleActions( settings ) {

	const title = document.querySelector( '#wpbody-content .wrap .wp-heading-inline' );

	const duplicate = document.createElement( 'span' );
	render(
		<DuplicateControlMenuButton
			experiment={ settings.experiment }
			alternative={ settings.alternative }
		/>,
		duplicate
	);

	const backToTest = document.createElement( 'a' );
	backToTest.className = 'page-title-action';
	backToTest.innerHTML = _x( 'Back to Test', 'command', 'nelio-ab-testing' );
	backToTest.setAttribute( 'href', settings.links.experimentUrl );

	appendSibling( backToTest, title );
	appendSibling( duplicate, title );

}//end addAlternativeTitleActions()

window.nab = {
	...window.nab,
	initAlternativeEdition,
};
