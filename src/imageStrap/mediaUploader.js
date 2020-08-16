import { Button } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

export const getImageButton = ( openEvent, attributes, itemIndex ) => {
	const src = attributes.images[ itemIndex ].src;
	if ( src !== '' ) {
		return (
			<img
				alt=""
				src={ src }
				onClick={ openEvent }
				className="image"
			/>
		);
	}

	return (
		<div className="button-container">
			<Button
				onClick={ openEvent }
				className="button button-large"
			>
				Pick an image
			</Button>
		</div>
	);
};

const changeImage = ( images, src, alt, index ) => {
	const newImages = [ ...images ];
	images[ index ].src = src;
	return newImages;
};

export const MediaUploader = ( { attributes, setAttributes, itemIndex } ) => {
	const ALLOWED_MEDIA_TYPES = [ 'image' ];
	return (
		<MediaUploadCheck>
			<MediaUpload
				onSelect={ media => {
					setAttributes( { images: changeImage( attributes.images, media.url, media.alt, itemIndex ) } );
				} }
				allowedTypes={ ALLOWED_MEDIA_TYPES }
				render={ ( { open } ) => getImageButton( open, attributes, itemIndex ) }
			/>
		</MediaUploadCheck>
	);
};
