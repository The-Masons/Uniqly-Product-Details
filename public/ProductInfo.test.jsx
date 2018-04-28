import React from 'react';
import ProductInfo from './ProductInfo.jsx';

const description = "It's good and you can wear it.";

const material = "This is the material for the product";

describe('ProductInfo', () => {
  test('should render with the correct items', () => {
    const productInfo = mount(
      <ProductInfo
        description={description} 
        materials={material}
        />
      );
    expect(productInfo).toMatchSnapshot();
  });

test('should correctly display the header', () => {
  const productInfo = mount(<ProductInfo />);

  productInfo.instance().switchHeader();

  expect(productInfo.state('headerShowing')).toEqual(2);
});

test('should not switch headers if the header is already showing', () => {
  const productInfo = mount(<ProductInfo />);

  productInfo.instance().handleHeaderClick(1);
  productInfo.instance().handleHeaderClick(1);

  expect(productInfo.state('headerShowing')).toEqual(1);

  productInfo.instance().handleHeaderClick(1);

  expect(productInfo.state('headerShowing')).toEqual(1);
});

});