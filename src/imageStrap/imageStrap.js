
import './editor.scss';
import './style.scss';
const { __ } = wp.i18n;
import { registerBlockType } from '@wordpress/blocks'; // Import registerBlockType() from wp.blocks
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { MediaUploader } from './mediaUploader';
import { LinkText } from './linkText';

registerBlockType( 'cgb/block-lifarl-imagestrap', {
	title: __( 'lifarl-block - image strap' ),
	icon: 'smiley',
	category: 'widgets',
	keywords: [
		__( 'lifarl-block — image strap block' ),
		__( 'foo' ),
		__( 'create-guten-block' ),
	],
	attributes: {
		images: {
			type: 'array',
			default: [
				{ src: '', text: '', href: '' },
				{ src: '', text: '', href: '' },
				{ src: '', text: '', href: '' },
				{ src: '', text: '', href: '' },
			],
		},
	},

	edit: ( { className, attributes, setAttributes } ) => {
		return (
			<div className={ className }>
				<InspectorControls>
					<PanelBody title="Links" className="image-strap__text-control">
						{ attributes.images.map( ( image, index ) => (
							<PanelBody title={ 'Image ' + ( index + 1 ) } className="image-strap__text-control-item" key={ index + image.src }>
								<LinkText attributes={ attributes } setAttributes={ setAttributes } itemIndex={ index } />
							</PanelBody>
						) ) }
					</PanelBody>
				</InspectorControls>
				<div className="image-strap__wrapper">
					<div className="image-strap__row">
						{ attributes.images.map( ( image, index ) => (
							<div className="image-strap__item" key={ index + image.src }>
								<MediaUploader attributes={ attributes } setAttributes={ setAttributes } itemIndex={ index } />
							</div>
						) ) }
					</div>
				</div>
			</div>
		);
	},

	save: ( { className, attributes } ) => {
		return (
			<div className={ className }>
				<div className="image-strap__wrapper">
					<div className="image-strap__row">
						{ attributes.images.map( ( image, index ) => (
							<div className="image-strap__item" key={ index + image.src }>
								<img alt="" src={ image.src } />
								<a href={ image.href }><p>{ image.text }</p></a>
							</div>
						) ) }
					</div>
				</div>
			</div>
		);
	},
} );
