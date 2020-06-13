/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import {
	PanelRow,
	Dashicon,
	Button,
} from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import {
	_x,
	sprintf,
} from '@wordpress/i18n';
import { withSelect } from '@wordpress/data';
import { withState, compose } from '@wordpress/compose';

/**
 * External dependencies
 */
import { PostSearcher, ConfirmationDialog } from '@nab/components';

/**
 * Internal dependencies
 */
import './style.scss';

class PostAlternativeManagementBox extends Component {

	constructor() {
		super( ...arguments );
		this.toggleImport = this.toggleImport.bind( this );
		this.toggleConfirmationDialog = this.toggleConfirmationDialog.bind( this );
		this.importContent = this.importContent.bind( this );
	}

	toggleImport() {
		const {
			isImportEnabled,
			setState,
		} = this.props;

		setState( () => ( { isImportEnabled: ! isImportEnabled } ) );
	}//end toggleImport()

	toggleConfirmationDialog() {
		const {
			isConfirmationDialogVisible,
			setState,
		} = this.props;

		setState( () => ( { isConfirmationDialogVisible: ! isConfirmationDialogVisible } ) );
	}//end toggleConfirmationDialog()

	importContent() {
		const {
			postBeingEdited,
			postIdToImportFrom,
			setState,
		} = this.props;

		setState( () => ( { isImporting: true } ) );

		apiFetch( {
			path: `/nab/v1/post/${ postIdToImportFrom }/overwrites/${ postBeingEdited }`,
			method: 'PUT',
		} ).finally( () => {
			window.location.reload();
		} );
	}//end importContent()

	render() {

		const {
			postBeingEdited,
			setState,
			postIdToImportFrom,
			isConfirmationDialogVisible,
			isImportEnabled,
			isImporting,
			Icon,
			experimentName,
			experimentUrl,
			alternatives,
			type,
		} = this.props;

		if ( ! Icon ) {
			return null;
		}//end if

		return (
			<>
				<PanelRow className="nab-test-panel">
					<span className="nab-test-panel__icon">
						<Icon />
					</span>
					<a className="nab-test-panel__name" href={ experimentUrl }>{ experimentName || _x( 'Unnamed Test', 'text', 'nelio-ab-testing' ) }</a>
				</PanelRow>

				{ alternatives && alternatives.length && (
					<PanelRow className="nab-variants-panel">
						<h2 className="nab-variants-panel__title">{ _x( 'Variants', 'text', 'nelio-ab-testing' ) }</h2>
						{ alternatives.map( ( { name, link, postId, index } ) => (
							<div className="nab-alternative" key={ index }>
								<span className="nab-alternative__letter">{ getLetter( index ) }</span>
								<span className="nab-alternative__name">
									{ postBeingEdited !== postId ? (
										<a className="hide-if-no-js" href={ link }>{ getNameOfAlternative( name, index ) }</a>
									) : (
										<strong>{ getNameOfAlternative( name, index ) }</strong>
									) }
								</span>
							</div>
						) ) }
					</PanelRow>
				) }

				<PanelRow className="nab-content-panel">
					<h2 className="nab-content-panel__title">{ _x( 'Content', 'text', 'nelio-ab-testing' ) }</h2>

					<span className="nab-content-panel__label">
						<Dashicon icon="admin-page" />
						{ isImportEnabled ? (
							_x( 'Import content from:', 'text', 'nelio-ab-testing' )
						) : (
							<Button
								isLink
								onClick={ this.toggleImport }
							>{ _x( 'Import Content', 'command', 'nelio-ab-testing' ) }</Button>
						) }
					</span>

					{ isImportEnabled && (
						<>
							<PostSearcher
								value={ postIdToImportFrom }
								className="nab-content-panel__searcher"
								type={ type }
								onChange={ ( newId ) => setState( { postIdToImportFrom: newId } ) }
							/>

							<div className="nab-content-panel__actions">
								<Button
									isLink
									onClick={ this.toggleImport }
								>{ _x( 'Cancel', 'command', 'nelio-ab-testing' ) }</Button>
								<Button
									isDefault
									disabled={ ! postIdToImportFrom }
									onClick={ this.toggleConfirmationDialog }
								>{ _x( 'Import', 'command', 'nelio-ab-testing' ) }</Button>
								<ConfirmationDialog
									title={ _x( 'Import Content?', 'text', 'nelio-ab-testing' ) }
									text={ _x( 'This will overwrite the current content.', 'text', 'nelio-ab-testing' ) }
									confirmLabel={
										isImporting ?
											_x( 'Importing…', 'text', 'nelio-ab-testing' ) :
											_x( 'Import', 'command', 'nelio-ab-testing' )
									}
									isConfirmEnabled={ ! isImporting }
									isCancelEnabled={ ! isImporting }
									isOpen={ isConfirmationDialogVisible }
									onCancel={ this.toggleConfirmationDialog }
									onConfirm={ this.importContent }
								/>
							</div>
						</>
					) }
				</PanelRow>
			</>
		);

	}//end render()

}//end class

const getNameOfAlternative = ( name, index ) => {

	if ( name ) {
		return name;
	}//end if

	if ( 0 === index ) {
		return _x( 'Control Version', 'text', 'nelio-ab-testing' );
	}//end if

	/* translators: a letter, such as A, B, or C */
	return sprintf( _x( 'Variant %s', 'text', 'nelio-ab-testing' ), getLetter( index ) );

};

const applyWithSelect = withSelect( ( select, { experimentId } ) => {
	const {
		getExperiment,
	} = select( 'nab/data' );

	const experiment = getExperiment( experimentId );
	if ( ! experiment ) {
		return;
	}//end if

	const { getExperimentTypes } = select( 'nab/experiments' );

	const {
		type,
		name,
		alternatives,
		experimentUrl,
	} = experiment;

	const experimentTypes = getExperimentTypes();
	const experimentType = experimentTypes[ type ];

	return {
		Icon: experimentType && experimentType.icon,
		experimentName: name,
		experimentUrl,
		alternatives: alternatives.map( ( alternative, index ) => {
			return {
				index,
				postId: alternative.attributes.postId,
				name: alternative.attributes.name,
				link: alternative.links.edit,
			};
		} ),
	};
} );

const applyWithState = withState( {
	isImportEnabled: false,
	isImporting: false,
	isConfirmationDialogVisible: false,
	postIdToImportFrom: false,
} );

const getLetter = ( index ) => {

	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	if ( index >= letters.length ) {
		return index - letters.length + 1;
	}//end if

	return letters.charAt( index );

};

export default compose(
	applyWithState,
	applyWithSelect,
)( PostAlternativeManagementBox );
