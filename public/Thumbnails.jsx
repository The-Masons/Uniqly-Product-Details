class Thumbnails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var result = this.props.images.map((image, index) => {
      return <Thumbnail handleClick={this.props.handleClick} image={image} key={index}/>
    })
    return (
      <div className="thumbnail-parent">
        <button className="thumbnail-scroll-button"></button>
          <div className="thumbnails">
            {result}
          </div>
        <button className="thumbnail-scroll-button bottom"></button>
      </div>
    );
  }
}

class Thumbnail extends React.Component {
  render() {
    return (
      <div>
        <img
        className="product-thumbnail" 
        onClick={() => this.props.handleClick(this.props.image)}
        src={this.props.image.img_url}/>
      </div>
    )
  }
}

export default Thumbnails;