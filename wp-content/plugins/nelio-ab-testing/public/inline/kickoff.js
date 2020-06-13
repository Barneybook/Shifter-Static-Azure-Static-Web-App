( function() { // eslint-disable-line

	// Ignoring IE...
	var ua = window.navigator.userAgent || ''; // eslint-disable-line
	if ( -1 !== ua.indexOf( 'MSIE ' ) || -1 !== ua.indexOf( 'Trident/' ) ) {
		window.onNabAltLoaderInitAvailable = function() {};
		window.onNabValidContent = function() {};
		window.onNabMainInitAvailable = function() {};
		window.onNabMainReady = function() {};
		return;
	}//end if

	function hideContent() {

		var element = document.getElementById( 'nab-alternative-loader-style' ); // eslint-disable-line
		if ( ! element ) {
			return;
		}//end if

		var style = 'html, body, body * { display:none !important; }'; // eslint-disable-line
		if ( element.styleSheet ) {
			element.styleSheet.cssText = style;
		} else {
			element.innerHTML = '';
			element.appendChild( document.createTextNode( style ) );
		}//end if

	}//end getHiddenContentStyle()
	hideContent();

	function createReadyFunction( name, event ) {

		var queue = []; // eslint-disable-line
		var hasEventBeenTriggered = false; // eslint-disable-line

		window[ name ] = function( fn ) {
			if ( hasEventBeenTriggered ) {
				fn();
			} else {
				queue.push( fn );
			}//end if
		};

		function runQueue() {
			document.removeEventListener( event, runQueue );
			hasEventBeenTriggered = true;
			queue.reverse();
			while ( queue.length ) {
				var fn = queue.pop(); // eslint-disable-line
				fn();
			}//end while
		}//end runQueue()

		document.addEventListener( event, runQueue );

	}//end createReadyFunction()

	createReadyFunction( 'onNabAltLoaderInitAvailable', 'nab-alt-loader-init-available' );
	createReadyFunction( 'onNabValidContent', 'nab-valid-content' );

	createReadyFunction( 'onNabMainInitAvailable', 'nab-main-init-available' );
	createReadyFunction( 'onNabMainReady', 'nab-main-ready' );

	window.onNabValidContent( function() {

		var element = document.getElementById( 'nab-alternative-loader-style' ); // eslint-disable-line
		if ( ! element ) {
			return;
		}//end if

		element.parentNode && element.parentNode.removeChild( element ); // eslint-disable-line

		try {
			var event = document.createEvent( 'HTMLEvents' ); // eslint-disable-line
			event.initEvent( 'resize', true, false );
			document.dispatchEvent( event );
		} catch ( e ) {
		}//end try

	} );

} )();

