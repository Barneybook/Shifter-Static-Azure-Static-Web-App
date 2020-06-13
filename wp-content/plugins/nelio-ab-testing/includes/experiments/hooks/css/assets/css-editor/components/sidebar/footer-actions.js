/**
 * WordPress dependencies
 */
import {
	Button,
	Dashicon,
} from '@wordpress/components';
import { _x } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import {
	withDispatch,
	withSelect,
} from '@wordpress/data';

/**
 * External dependencies
 */
import classnames from 'classnames';

const FooterActions = ( {
	areControlsVisible,
	currentPreviewResolution,
	toggleControlsVisibility,
	setCurrentPreviewResolution,
} ) => (

	<div className="nab-css-editor-sidebar__footer-actions">

		<div
			className={ classnames( {
				'nab-css-editor-sidebar__visibility-toggle': true,
				'nab-css-editor-sidebar__visibility-toggle--hide': !! areControlsVisible,
				'nab-css-editor-sidebar__visibility-toggle--show': ! areControlsVisible,
			} ) }
		>
			<Button
				isLink
				onClick={ toggleControlsVisibility }
			>
				{ areControlsVisible ? (
					<>
						<Dashicon icon="admin-collapse" />
						<span className="nab-css-editor-sidebar__visibility-toggle-label">{ _x( 'Hide Controls', 'command', 'nelio-ab-testing' ) }</span>
					</>
				) : (
					<Dashicon icon="admin-collapse" />
				) }
			</Button>
		</div>

		<div className="nab-css-editor-sidebar__resolutions">

			<div
				className={ classnames( {
					'nab-css-editor-sidebar__resolution': true,
					'nab-css-editor-sidebar__resolution--is-active': 'desktop' === currentPreviewResolution,
				} ) }
			>
				<Button
					isLink
					onClick={ () => setCurrentPreviewResolution( 'desktop' ) }
				>
					<Dashicon icon="desktop" />
					<span className="screen-reader-text">{ _x( 'Enter desktop preview mode', 'command', 'nelio-ab-testing' ) }</span>
				</Button>
			</div>

			<div
				className={ classnames( {
					'nab-css-editor-sidebar__resolution': true,
					'nab-css-editor-sidebar__resolution--is-active': 'tablet' === currentPreviewResolution,
				} ) }
			>
				<Button
					isLink
					onClick={ () => setCurrentPreviewResolution( 'tablet' ) }
				>
					<Dashicon icon="tablet" />
					<span className="screen-reader-text">{ _x( 'Enter tablet preview mode', 'command', 'nelio-ab-testing' ) }</span>
				</Button>
			</div>

			<div
				className={ classnames( {
					'nab-css-editor-sidebar__resolution': true,
					'nab-css-editor-sidebar__resolution--is-active': 'mobile' === currentPreviewResolution,
				} ) }
			>
				<Button
					isLink
					onClick={ () => setCurrentPreviewResolution( 'mobile' ) }
				>
					<Dashicon icon="smartphone" />
					<span className="screen-reader-text">{ _x( 'Enter mobile preview mode', 'command', 'nelio-ab-testing' ) }</span>
				</Button>
			</div>

		</div>

	</div>

);

const addViewProperties = withSelect( ( select ) => {
	const { getPageAttribute } = select( 'nab/data' );
	return {
		areControlsVisible: getPageAttribute( 'areControlsVisible', true ),
		currentPreviewResolution: getPageAttribute( 'currentPreviewResolution', 'desktop' ),
	};
} );

const addToggleFunctions = withDispatch( ( dispatch, { areControlsVisible } ) => {
	const { setPageAttribute } = dispatch( 'nab/data' );
	return {
		toggleControlsVisibility: () => setPageAttribute( 'areControlsVisible', ! areControlsVisible ),
		setCurrentPreviewResolution: ( resolution ) => setPageAttribute( 'currentPreviewResolution', resolution ),
	};
} );

export default compose(
	addViewProperties,
	addToggleFunctions,
)( FooterActions );
