/**
 * BLOCK: codoc-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import icon from './icon';
//import { ENTER } from '@wordpress/keycodes';
const { ENTER } = wp.keycodes;

const { __ } = wp.i18n; // Import __() from wp.i18n
const { Component } = wp.element;

const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const {
  InspectorControls,
  RichText
} = wp.editor;

const {
  SelectControl,
  PanelBody,
  ToggleControl,
  CheckboxControl,
  RangeControl,
} = wp.components;

const {
	getDefaultBlockName,
	createBlock,
} = wp.blocks;

const { withState } = wp.compose;

const CODOC_URL = OPTIONS.codoc_url;
const CODOC_USER_CODE = OPTIONS.codoc_usercode;
const CODOC_PLUGIN_VERSION = OPTIONS.codoc_plugin_version;
const CODOC_ENTRIES_CLASS = 'codoc-entries';

//import Cookies from 'universal-cookie';
//const cookies = new Cookies();

class CodocControls extends Component {
    constructor( props ) {
        super( ...arguments );
        this.subscriptionsFetched = [];
        this.fetchSubscriptions();
    }

    fetchSubscriptions() {
        const {
            setAttributes,
            attributes: {
                fetching,
            }
        } = this.props;

        if (fetching) {
            return
        }

        setAttributes( { fetching: true } )
        let url = CODOC_URL + '/api/v1/cms/' + CODOC_USER_CODE + '/subscriptions?without_token=1';

        fetch(url)
            .then( res => res.json() )
            .then( res => {
                let list = [];
                if (res.status && res.subscriptions) {
                    for (  var i = 0;  i < res.subscriptions.length;  i++  ) {
                        let info = {
                            value: res.subscriptions[i].code,
                            label: res.subscriptions[i].title,
                        }
                        list[i] = info
                    }
                }
                if (list.length) {
                    this.subscriptionsFetched = list;
                }
                setAttributes( { fetching: false } )
            })
    }
    
	getShowPriceHelp( checked ) {
		return checked ?
			__( 'する' ) :
			__( 'しない' );
	}
	getShowSupportHelp( checked ) {
		return checked ?
			__( '受け付ける' ) :
			__( '受け付けない' );
	}
    
    render() {
        const {
            setAttributes,
            attributes: {
                showPrice,
                price,
                limited,
                limitedCount,
                
                affiliateMode,
                affiliateRate,

                showSupport,
                
                subscriptions,
            }
        } = this.props;

        const toggleShowPrice   = () => setAttributes( { showPrice: ! showPrice } );
        const toggleLimited     = () => setAttributes( { limited: ! limited } );
        const toggleAffiliateMode  = () => setAttributes( { affiliateMode: ! affiliateMode } );
        const toggleShowSupport = () => setAttributes( { showSupport: ! showSupport } );
        
        const SubscriptionCheckBoxes = withState({
            checked_obj: Object.assign(new Object, subscriptions)
        })( ( { checked_obj , setState } ) => (
            <ul>
            {   
                this.subscriptionsFetched.map((v) => (
                    <li><CheckboxControl
                    className="check_items"
                    label={v.label}
                    checked={checked_obj[v.value]}

                    onChange={ ( check ) => {
                        check ? checked_obj[v.value] = true : delete checked_obj[v.value]
                        setAttributes({subscriptions : checked_obj}) 
                        setState({checked_obj})
                    } }
                    /></li>
                ) )
            }
            </ul>
        ) )
        const affiliateRateOptions = [
            { value: '0.0500', label:'販売価格の5%' },
            { value: '0.1000', label:'販売価格の10%' },
            { value: '0.1500', label:'販売価格の15%' },
            { value: '0.2000', label:'販売価格の20%' },
            { value: '0.2500', label:'販売価格の25%' },
            { value: '0.3000', label:'販売価格の30%' },
            { value: '0.3500', label:'販売価格の35%' },
            { value: '0.4000', label:'販売価格の40%' },
            { value: '0.4500', label:'販売価格の45%' },
            { value: '0.5000', label:'販売価格の50%' },
        ];

        return(
            <InspectorControls key="CodocControls">

            <PanelBody>

			<ToggleControl
			label={ __( '単体販売' ) }
			checked={ !! showPrice }
            help={ this.getShowPriceHelp }
            ref="showPrice"
            onChange={ toggleShowPrice }
			/>
            
            <div style={{ display: showPrice ? 'initial' : 'none' }}>

			<RangeControl
			label={ __( '価格(円)' ) }
			value={ price }
            initialPosition={ price }
            onChange={ ( value ) => {
                // do validate this
                setAttributes({ price: value });
            }}
			min="100"
			max="50000"
			/><br />
            
            <ToggleControl
			label={ __( '数量限定販売' ) }
			checked={ !! limited }
            onChange={ toggleLimited }
			/>

            <div style={{ display: limited ? 'initial' : 'none' }}>
			<RangeControl
			label={ __( '限定数' ) }
			value={ limitedCount }
            onChange={ ( value ) => {
                // do validate this
                setAttributes({ limitedCount: value });
            }}
            initialPosition={ limitedCount }
			min="1"
			max="100"
			/><br />
            </div>
            
            <ToggleControl
			label={ __( 'アフィリエイト' ) }
			checked={ !! affiliateMode }
            onChange={ toggleAffiliateMode }
			/>

            <div style={{ display: affiliateMode ? 'initial' : 'none' }}>
            <SelectControl
            label={ __( '料率' ) }
            description={ __( '購入者を対象に指定した料率でアフィリエイトをオファーできます') }
            options={ affiliateRateOptions }
            value={ affiliateRate }
            onChange={ ( value ) => {
                setAttributes( { affiliateRate: value } );
             }}/><br />       
            </div>
            
            </div>
            
			<ToggleControl
			label={ __( 'サポート' ) }
			checked={ !! showSupport }
            value="1"
			onChange={ toggleShowSupport }
			help={ this.getShowSupportHelp }
				/>

            <label>サブスクリプション</label>
            <SubscriptionCheckBoxes />

            </PanelBody>
            </InspectorControls>
        );
    }
};

class EditBlockContent extends Component {
	constructor() {
		super( ...arguments );
        // デフォルト値
        this.props.setAttributes({ version: CODOC_PLUGIN_VERSION });
        this.props.setAttributes({ showPrice: this.props.attributes.showPrice == null ? true : this.props.attributes.showPrice });
        this.props.setAttributes({ price: this.props.attributes.price == null ? 100 : this.props.attributes.price });
        this.props.setAttributes({ limited: this.props.attributes.limited == null ? false : this.props.attributes.limited });
        this.props.setAttributes({ limitedCount: this.props.attributes.limitedCount == null ? 10 : this.props.attributes.limitedCount });
        this.props.setAttributes({ affiliateMode: this.props.attributes.affiliateMode == null ? false : this.props.attributes.affiliateMode });
        this.props.setAttributes({ affiliateRate: this.props.attributes.affiliateRate == null ? '0.0500' : this.props.attributes.affiliateRate });
        this.props.setAttributes({ showSupport: this.props.attributes.showSupport == null ? false : this.props.attributes.showSupport });
        this.props.setAttributes({ subscriptions: this.props.attributes.subscriptions == null ? {} : this.props.attributes.subscriptions });

		this.onChangeInput = this.onChangeInput.bind( this );
		this.onKeyDown = this.onKeyDown.bind( this );
		this.state =  {
			defaultText: __( 'この続きをみるには' ),
		};
	}
	onChangeInput( event ) {
		this.setState( {
			defaultText: '',
		} );

		const value = event.target.value.length === 0 ? undefined : event.target.value;
		this.props.setAttributes( { customText: value } );
	}
	onKeyDown( event ) {
		const { keyCode } = event;
		const { insertBlocksAfter } = this.props;
		if ( keyCode === ENTER ) {
			insertBlocksAfter( [ createBlock( getDefaultBlockName() ) ] );
		}
	}
    
    render() {
        const {
            attributes: {
                customText,
            },
            setAttributes
        } = this.props;

		const { defaultText } = this.state;
		//const value = customText !== undefined ? customText : defaultText;
        const value = customText  ? customText : defaultText;
        //const value = defaultText;
		const inputLength = value.length + 10;

        return[
            <CodocControls { ...{setAttributes, ...this.props } } />,

            <div className="wp-block-more">
			<input
			type="text"
			value={ value }
			size={ inputLength }
			onChange={ this.onChangeInput }
			onKeyDown={ this.onKeyDown }
			/>
			</div>

        ];
    }
};


registerBlockType( 'codoc/codoc-block', {
    title: __( 'codoc' ),
    description: __( 'このブロックから下のブロックは認証されたcodocユーザーのみが閲覧できる有料エリアとなります。' ),    
    icon,
    category: 'layout',
	supports: {
		customClassName: false,
		className: false,
		html: false,
		multiple: false,
	},
    keywords: [
        __( 'codoc Block' ),
        __( 'plugin for codoc' ),
        __( 'codoc-block' ),
    ],
    attributes: {
        showPrice: {
            type: 'boolean',
            default: null,
        },
        price: {
            type: 'number',
            default: null,
        },
        limited: {
            type: 'boolean',
            default: null,
        },
        limitedCount: {
            type: 'number',
            default: null,
        },
        affiliateMode: {
            type: 'boolean',
            default: null,
        },
        affiliateRate: {
            type: 'string',
            default: null,
        },
        showSupport: {
            type: 'boolean',
            default: null,
        },
        subscriptions: {
            type: 'object',
            default: null,
        },
        customText: {
            type: 'string',
            default: '',
        },
        version: {
            type: 'string',
            default: null,
        },
    },
    
    edit: EditBlockContent,
    
    save: function( props ) {
        const {
            setAttributes,
            attributes: {
                customText,
            }
        } = props;
        return ( // return if link behavior normal
            <div
            data-id='codoc-tag'
            className={ CODOC_ENTRIES_CLASS }
            >
            { customText && !! customText.length && (
                <RichText.Content
                value={ customText }
                />
            )}
            </div>
        )
    },
} );
