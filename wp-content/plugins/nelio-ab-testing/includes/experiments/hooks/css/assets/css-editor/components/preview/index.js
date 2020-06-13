/**
 * WordPress dependencies
 */
import {
	compose,
	withInstanceId,
} from '@wordpress/compose';
import {
	withSelect,
} from '@wordpress/data';
import {
	Component,
} from '@wordpress/element';
import { _x } from '@wordpress/i18n';

/**
 * External dependencies
 */
import classnames from 'classnames';
import {
	debounce,
} from 'lodash';

/**
 * Internal dependencies
 */
import './style.scss';

class CssPreview extends Component {

	constructor( ...args ) {

		super( ...args );
		this.updateIFrameDebounced = debounce(
			( iframe, message ) => iframe && iframe.contentWindow && iframe.contentWindow.postMessage && iframe.contentWindow.postMessage( message ),
			500
		);

	}//end constructor()

	componentDidUpdate() {
		this.updateIFrame();
	}//end componentDidUpdate()

	updateIFrame() {

		const {
			value,
			instanceId,
		} = this.props;

		const iframe = document.getElementById( `nab-css-previewer__iframe-${ instanceId }` );
		this.updateIFrameDebounced( iframe, { type: 'css-preview', value } );

	}//end updateIFrame()

	render() {

		const {
			className,
			instanceId,
			currentPreviewResolution,
			previewUrl,
		} = this.props;

		return (
			<div className={ classnames( [ className, 'nab-css-preview' ] ) }>

				<iframe
					id={ `nab-css-previewer__iframe-${ instanceId }` }
					className={ classnames( [ 'nab-css-preview__iframe', `nab-css-preview__iframe--${ currentPreviewResolution }` ] ) }
					title={ _x( 'CSS Preview', 'text', 'nelio-ab-testing' ) }
					onLoad={ () => this.updateIFrame() }
					src={ previewUrl }
				></iframe>

			</div>
		);

	}//end render()

}//end class

const addPreviewSize = withSelect( ( select ) => {

	const { getPageAttribute } = select( 'nab/data' );
	return {
		currentPreviewResolution: getPageAttribute( 'currentPreviewResolution', 'desktop' ),
	};

} );

export default compose(
	addPreviewSize,
	withInstanceId,
)( CssPreview );
