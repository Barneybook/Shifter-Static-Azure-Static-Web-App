/**
 * External dependencies
 */
import {
	appendSibling,
} from '@nab/utils';

export function hideAllSidebars() {
	[ ...document.querySelectorAll( '.sidebars-column-1 > .widgets-holder-wrap, .sidebars-column-2 > .widgets-holder-wrap' ) ].forEach( ( node ) => node.style.display = 'none' );
}//end hideAllSidebars()

export function getAlternativeSidebars() {
	return [ ...document.querySelectorAll( 'div[id^=nab_alt_sidebar_]' ) ];
}//end getAlternativeSidebars()

export function organizeSidebars() {

	const sidebars = getAlternativeSidebars();
	sidebars.forEach( ( sidebar ) => moveSidebarNodeAfterItsControlVersion( sidebar ) );

}//end organizeSidebars()

function moveSidebarNodeAfterItsControlVersion( sidebar ) {

	const controlId = extractControlId( sidebar.getAttribute( 'id' ) );
	if ( ! controlId ) {
		return;
	}//end if

	const control = document.getElementById( controlId );
	if ( ! control ) {
		return;
	}//end if

	appendSibling( sidebar.parentNode, control.parentNode );

}//end moveSidebarNodeAfterItsControlVersion()

function extractControlId( sidebarId ) {

	const controlId = sidebarId.replace( /^nab_alt_sidebar_[0-9]+_([^-]+-){4}[^-]+_/, '' );
	if ( controlId === sidebarId ) {
		return false;
	}//end if

	return controlId;

}//end extractControlId()

