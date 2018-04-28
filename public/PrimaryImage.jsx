import React from 'react';

const back = "https://i.imgur.com/Q6KLD3s.png";

class PrimaryImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false,
      mouseHovered: false,
      xPos: 0,
      yPos: 0,
      scale: 1
    }
    this.moveImage = this.moveImage.bind(this);
    this.mouseExitContainer = this.mouseExitContainer.bind(this);
    this.mouseEnterContainer = this.mouseEnterContainer.bind(this);
  }

  moveImage(event) {
    if (this.state.mouseOver) {
      this.mouseExitContainer();
      const tolerance = 80;
      const par = event.target.parentNode.getBoundingClientRect();
      const xDist = par.width;
      const yDist = par.height;
      const relX = -(event.clientX - par.left) + xDist / 2;
      const relY = -(event.clientY - par.top) + yDist / 2;
      this.setState({
        xPos: relX,
        yPos: relY,
        scale: 2
      })
    }
  }

  mouseExitImage(){
    this.setState({
      xPos: 0,
      yPos: 0,
      scale: 1,
      mouseOver: false
    })
  }

  mouseExitContainer(){
    this.setState({
      mouseHovered: false
    })
  }

  mouseEnterContainer(){
    this.setState({
      mouseHovered: true
    })
  }

  render() {
    const imageBtnStyle = {
      opacity: Number(this.state.mouseHovered)
    };

    const primaryImgStyle = {
      transform: `scale(${this.state.scale})`,
      top: `${this.state.yPos}px`,
      left: `${this.state.xPos}px`
    }

    return (
      <div className="primary-image-section"
        onMouseOver={() => this.mouseEnterContainer()}
        onMouseLeave={(event) => this.mouseExitContainer()}>
        <img 
          className="last-image-button" 
          id="last-image-button"
          src={back}
          style={imageBtnStyle}
          onClick={() => this.props.handleChangeImage(-1)}/>
        <div className="primary-image-parent" 
        id="primary-image-parent"
        onMouseMove={this.moveImage}
        onMouseEnter={() => this.setState({mouseOver: true})}
        onMouseLeave={(event) => this.mouseExitImage()}>
          <img
          className="primary-image" 
          id="primary-image"
          style={primaryImgStyle}
          src={this.props.image.img_url}/>
        </div>
        <img 
          className="next-image-button" 
          id="next-image-button"
          src={back}
          style={imageBtnStyle}
          onClick={() => this.props.handleChangeImage(1)}/>
      </div>
    );
  }
}

export default PrimaryImage;
