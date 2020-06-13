/**
 * WordPress dependencies
 */
import { addQueryArgs } from '@wordpress/url';

export function isExternalLink( link ) {

	// Internal link.
	if ( ! /^[a-z]+:\/\//.test( link ) ) {
		return false;
	}//end if

	link = link.replace( /^https?:\/\//, 'http://' );
	const currentDomain = document.location.href.replace( /^https?:\/\//, '' ).replace( /\/.*$/, '' );
	if ( 0 === link.indexOf( 'http://' + currentDomain ) ) {
		return false;
	}//end if

	return true;

}//end isExternalLink()

export function disableExternalLinks() {

	[ ...document.querySelectorAll( 'a' ) ].forEach( ( link ) => {

		const href = link.getAttribute( 'href' );
		if ( ! isExternalLink( href ) ) {
			return;
		}//end if

		link.classList.add( 'nab-disabled-link' );
		link.addEventListener( 'click', ( ev ) => ev.preventDefault() );

	} );

}//end disableExternalLinks()

export function addParamToLocalLinks( paramName, paramValue = true ) {

	[ ...document.querySelectorAll( 'a' ) ].forEach( ( link ) => {

		const href = link.getAttribute( 'href' );
		if ( isExternalLink( href ) ) {
			return;
		}//end if

		// TODO. Remove fragment stuff when this pull request is finally merged: https://github.com/WordPress/gutenberg/pull/16656
		const cleanUrl = href.replace( /#.*$/, '' );
		const fragment = href.replace( /^[^#]*/, '' );
		const finalUrl = addQueryArgs( cleanUrl, { [ paramName ]: paramValue } ) + fragment;

		link.setAttribute( 'href', finalUrl );

	} );

}//end addParamToLocalLinks()
