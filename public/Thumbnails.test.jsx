import React from 'react';
import Thumbnails from './Thumbnails.jsx';

const images = [
  "https://vignette.wikia.nocookie.net/dragonballfanon/images/7/70/Random.png/revision/latest?cb=20161221030547",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjAfupBUR-cZbyUu0Lc5alrBdwc0U6G5XqibuHoiyZddzWPU4",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7rGURD9A_TmE86bph6WJbZ_JRPHrsqqtVrSrVPi9OwuV2Ily30w",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuCGDeH07tQxcIO4WJ2RK1kdIf8ipnZ06iBGzdmirYvKU9U5v"
];
const primaryImage = "https://vignette.wikia.nocookie.net/dragonballfanon/images/7/70/Random.png/revision/latest?cb=20161221030547";

describe('Thumbnails', () => {
  test('should render with the correct items', () => {
    const thumbnails = mount(
      <Thumbnails
        handleClick={jest.fn()} 
        images={images} 
        primaryImage={primaryImage}
        />
      );
    expect(thumbnails).toMatchSnapshot();
  });

  test('should render with the correct items', () => {
    const thumbnails = mount(
      <Thumbnails
        handleClick={jest.fn()} 
        images={images} 
        primaryImage={primaryImage}
        />
      );
    expect(thumbnails).toMatchSnapshot();
  });
});