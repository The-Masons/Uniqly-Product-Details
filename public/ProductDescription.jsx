class ProductDescription extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="desc-mat-container">
        <div className="description">
          {this.props.description}
        </div>
        <div className="materials">
          {this.props.materials}
        </div>
      </div>
    );
  }
}

export default ProductDescription;