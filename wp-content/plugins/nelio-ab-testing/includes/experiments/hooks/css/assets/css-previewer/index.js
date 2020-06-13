/**
 * Internal dependencies
 */
import './style.scss';
import {
	disableExternalLinks,
	addParamToLocalLinks,
} from '../../../../../../packages/utils/links';

export default function init() {

	window.addEventListener( 'message', previewCssInMessage, false );
	addCustomStyleTag();
	disableExternalLinks();
	addParamToLocalLinks( 'nab-css-previewer' );

}//end init()

function addCustomStyleTag() {

	const style = document.createElement( 'style' );
	style.setAttribute( 'id', 'nab-css-style' );
	style.setAttribute( 'type', 'text/css' );
	document.getElementsByTagName( 'head' )[ 0 ].appendChild( style );

}//end addCustomStyleTag()

function previewCssInMessage( message ) {

	const style = document.getElementById( 'nab-css-style' );
	if ( ! style ) {
		return;
	}//end if

	const action = message.data || {};
	if ( 'css-preview' !== action.type ) {
		return;
	}//end if

	const css = action.value;
	if ( style.styleSheet ) {
		style.styleSheet.cssText = css;
	} else {
		style.innerHTML = css;
	}//end if

}//end previewCssInMessage()

