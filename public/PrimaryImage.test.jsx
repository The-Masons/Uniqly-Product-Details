import React from 'react';
import PrimaryImage from './PrimaryImage.jsx';

const image = "http://www.politifact.com/subjects/fake-news/"

describe('PrimaryImage', () => {
  test('should render with the correct items', () => {
    const primaryImage = mount(
      <PrimaryImage
        image={image}
        handleChangeImage={jest.fn()}
        />
      );
    expect(primaryImage).toMatchSnapshot();
  });

  test('should change mouseOver to true when image is hovered', () => {
    const primaryImage = mount(<PrimaryImage 
      image={image}
      handleChangeImage={jest.fn()}
    />);

    primaryImage.find('.primary-image-parent').simulate('mouseEnter')
  
    expect(primaryImage.state('mouseOver')).toEqual(true);
  });

  test('should change mouseOver to true when image is hovered', () => {
    const primaryImage = mount(<PrimaryImage 
      image={image}
      handleChangeImage={jest.fn()}
    />);

    primaryImage.find('.primary-image-parent').simulate('mouseLeave')
  
    expect(primaryImage.state('mouseOver')).toEqual(false);
  });

});