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

  test('should change mouseOver to false when image is no longer hovered', () => {
    const primaryImage = mount(<PrimaryImage 
      image={image}
      handleChangeImage={jest.fn()}
    />);

    primaryImage.find('.primary-image-parent').simulate('mouseLeave')
  
    expect(primaryImage.state('mouseOver')).toEqual(false);
  });

  test('should show/hide nav arrows based on hover state', () => {
    const exitSpy = jest.spyOn(PrimaryImage.prototype, 'mouseExitContainer');
    const enterSpy = jest.spyOn(PrimaryImage.prototype, 'mouseEnterContainer');
    const primaryImage = mount(<PrimaryImage 
      image={image}
      handleChangeImage={jest.fn()}
    />);

    primaryImage.find('.primary-image-section').simulate('mouseOver')
    primaryImage.find('.primary-image-section').simulate('mouseLeave')

    expect(exitSpy).toHaveBeenCalledTimes(1);
    expect(enterSpy).toHaveBeenCalledTimes(1);

    exitSpy.mockClear();
    enterSpy.mockClear();
  });


  test('should show/hide nav arrows based on hover state', () => {

    const mock = jest.fn();
    const primaryImage = mount(<PrimaryImage 
      image={image}
      handleChangeImage={mock}
    />);

    primaryImage.find('.last-image-button').simulate('click')
    primaryImage.find('.next-image-button').simulate('click')

    expect(mock).toHaveBeenCalledTimes(2);

    mock.mockClear();
  });

});