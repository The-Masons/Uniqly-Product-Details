class PrimaryImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false,
    }
    this.moveImage = this.moveImage.bind(this);
  }

  moveImage(event) {
    if (this.state.mouseOver) {
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

  mouseExit(event){
    this.setState({
      mouseOver: false
    })
    document.getElementById('primary-image').style.transform = 'scale(1)';
    document.getElementById('primary-image').style.top = '0px';
    document.getElementById('primary-image').style.left = '0px';
  }

  render() {
    return (
      <div className="primary-image-parent" 
      id="primary-image-parent"
      onMouseMove={(event) => this.moveImage(event)}
      onMouseEnter={() => this.setState({mouseOver: true})}
      onMouseLeave={(event) => this.mouseExit(event)}>

        <img
        className="primary-image" 
        id="primary-image"
        src={this.props.image.img_url}/>
      </div>
    );
  }
}

export default PrimaryImage;