import React from 'react';
import ProductContent from './ProductContent.jsx';

const product = {
  description: `A 100% Supima® cotton T-shirt thick enough to wear on its own or for layering.
  The luxurious jersey material uses 100% Supima® cotton for a smooth feel, natural brightness and beautiful colors.
  A smooth silhouette from the bust down to the waist, with sleek shoulders and armholes.
  A narrower seam fold and stitching for a more delicate neckline.
  With a flattering neckline.`,
  material: `100% cotton
  Machine washable
  Imported  `,
  product_name: "Women JWA EXTRA FINE COTTON SHIRT STRIPE LONG-SLEEVE DRESS",
  sku: "AOJ23F5",
  color: "43 Periwinkle",
  price: '9',
  reviewscore: 4.2,
  reviewcount: 8
}

const colors = ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Red.svg/2000px-Red.svg.png", "https://vignette.wikia.nocookie.net/joke-battles/images/0/0e/Green.jpg/revision/latest?cb=20170111231844"]

describe('ProductContent', () => {
  test('should render with the correct items', () => {
    const productContent = mount(
      <ProductContent
        product={product} 
        colors={colors}
        />
      );
    expect(productContent).toMatchSnapshot();
  });
  
});