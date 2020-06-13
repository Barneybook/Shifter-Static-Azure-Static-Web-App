( function() { // eslint-disable-line

	// Ignoring IE...
	var ua = window.navigator.userAgent || ''; // eslint-disable-line
	if ( -1 !== ua.indexOf( 'MSIE ' ) || -1 !== ua.indexOf( 'Trident/' ) ) {
		return;
	}//end if

	if ( ! document.createEvent ) {
		return;
	}//end if

	var event = document.createEvent( 'HTMLEvents' ); // eslint-disable-line
	event.initEvent( 'nab-valid-content', true, true );
	event.eventName = 'nab-valid-content';
	document.dispatchEvent( event );

} )();
