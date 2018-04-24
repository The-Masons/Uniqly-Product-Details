import React from 'react';

const back = "https://i.imgur.com/Q6KLD3s.png";

class Thumbnails extends React.Component {
  render() {
    var result = this.props.images.map((image, index) => {
      let className = 'product-thumbnail';
      if (image === this.props.primaryImage) {
        className += ' selected-thumbnail';
      }
      return <Thumbnail handleClick={this.props.handleClick} image={image} key={index} class={className}/>
    })

    let thumbnailScrollClass1 = 'thumbnail-scroll-up';
    let thumbnailScrollClass2 = 'thumbnail-scroll-down';
    if (this.props.images.length < 7) {
      thumbnailScrollClass1 += ' invisible';
      thumbnailScrollClass2 += ' invisible';
    }

    return (
      <div className="thumbnail-parent">
        <img 
          className={thumbnailScrollClass1}
          id="thumbnail-scroll-up"
          src={back}
        />
          <div className="thumbnails">
            {result}
          </div>
          <img 
          className={thumbnailScrollClass2}
          id="thumbnail-scroll-down"
          src={back}
        />
      </div>
    );
  }
}

class Thumbnail extends React.Component {

  render() {
    return (
      <div>
        <img
        className={this.props.class}
        onClick={() => this.props.handleClick(this.props.image)}
        src={this.props.image.img_url}/>
      </div>
    )
  }
}

export default Thumbnails;