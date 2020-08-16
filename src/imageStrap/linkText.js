import { TextControl } from '@wordpress/components';
const {
	Fragment,
} = wp.element;

const changeText = ( images, text, index ) => {
	const newImages = [ ...images ];
	images[ index ].text = text;
	return newImages;
};

const changeHref = ( images, href, index ) => {
	const newImages = [ ...images ];
	images[ index ].href = href;
	return newImages;
};

export const LinkText = ( { attributes, setAttributes, itemIndex } ) => {
	return (
		<Fragment>
			<TextControl
				label="Link Text"
				onChange={ ( text ) => {
					setAttributes( { images: changeText( attributes.images, text, itemIndex ) } );
				} }
				value={ attributes.images[ itemIndex ].text }
			/>
			<TextControl
				label="Link href"
				onChange={ ( href ) => {
					setAttributes( { images: changeHref( attributes.images, href, itemIndex ) } );
				} }
				value={ attributes.images[ itemIndex ].href }
			/>
		</Fragment>
	);
};
