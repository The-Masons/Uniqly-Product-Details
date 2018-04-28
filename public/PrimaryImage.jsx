import React from 'react';

const back = "https://i.imgur.com/Q6KLD3s.png";

class PrimaryImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false
    }
    this.moveImage = this.moveImage.bind(this);
    this.mouseExitContainer = this.mouseExitContainer.bind(this);
    this.mouseEnterContainer = this.mouseEnterContainer.bind(this);
  }

  moveImage(event) {
    if (this.state.mouseOver) {
      this.mouseExitContainer();
      const tolerance = 80;
      const par = document.getElementById('primary-image-parent').getBoundingClientRect();
      const xDist = par.width;
      const yDist = par.height;
      let relX = -(event.clientX - par.left) + xDist / 2;
      let relY = -(event.clientY - par.top) + yDist / 2;

      document.getElementById('primary-image').style.transform = 'scale(2)';
      document.getElementById('primary-image').style.top = relY + 'px';
      document.getElementById('primary-image').style.left = relX + 'px';
    }
  }

  mouseExitImage(){
    this.setState({
      mouseOver: false
    })
    var el = document.getElementById('primary-image');
    if (el) {
      el.style.transform = 'scale(1)';
      el.style.top = '0px';
      el.style.left = '0px';
    }
  }

  mouseExitContainer(){
    if(document.getElementById('next-image-button')){
      document.getElementById('next-image-button').style.opacity = 0;
      document.getElementById('last-image-button').style.opacity = 0;
    }
  }

  mouseEnterContainer(){
    if(document.getElementById('next-image-button')) {
      document.getElementById('next-image-button').style.opacity = 1;
      document.getElementById('last-image-button').style.opacity = 1;
    }
  }

  render() {
    return (
      <div className="primary-image-section"
        onMouseOver={() => this.mouseEnterContainer()}
        onMouseLeave={(event) => this.mouseExitContainer()}>
        <img 
          className="last-image-button" 
          id="last-image-button"
          src={back}
          onClick={() => this.props.handleChangeImage(-1)}/>
        <div className="primary-image-parent" 
        id="primary-image-parent"
        onMouseMove={(event) => this.moveImage(event)}
        onMouseEnter={() => this.setState({mouseOver: true})}
        onMouseLeave={(event) => this.mouseExitImage()}>
          <img
          className="primary-image" 
          id="primary-image"
          src={this.props.image.img_url}/>
        </div>
        <img 
          className="next-image-button" 
          id="next-image-button"
          src={back}
          onClick={() => this.props.handleChangeImage(1)}/>
      </div>
    );
  }
}

export default PrimaryImage;