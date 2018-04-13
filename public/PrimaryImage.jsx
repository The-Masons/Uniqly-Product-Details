class PrimaryImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false,
      mouseX: 0,
      mouseY: 0
    }
    this.moveImage = this.moveImage.bind(this);
  }

  moveImage(event){
    if (this.state.mouseOver) {
      const offset = -250;
      this.setState({
        mouseX: event.screenX,
        mouseY: event.screenY
      })
      let transX = this.state.mouseX + offset;
      let transY = this.state.mouseY + offset;
      var parentOffset = document.getElementById('primary-image-parent').getBoundingClientRect();
      console.log(parentOffset);
      var relX = event.screenX - parentOffset.left;
      var relY = event.screenY - parentOffset.top;
      console.log(relX, relY)
      let transformText = `translate(${relX}px, ${relY}px) scale(1.8)`;
      document.getElementById('primary-image').style.transform = transformText;
    }
  }

  mouseExit(event){
    this.setState({
      mouseOver: false
    })
    var transformText = `scale(1)`
    document.getElementById('primary-image').style.transform = transformText;
  }

  render() {
    return (
      <div className="primary-image-parent" id="primary-image-parent">
        <img
        onMouseEnter={() => this.setState({mouseOver: true})}
        onMouseLeave={(event) => this.mouseExit(event)}
        onMouseMove={(event) => this.moveImage(event)}
        className="primary-image" 
        id="primary-image"
        src={this.props.image}/>
      </div>
    );
  }
}

export default PrimaryImage;