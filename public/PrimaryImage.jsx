class PrimaryImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="primary-image-parent">
        <img className="primary-image" src={this.props.image}/>
      </div>
    );
  }
}

export default PrimaryImage;