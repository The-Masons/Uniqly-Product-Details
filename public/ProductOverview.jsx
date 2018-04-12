class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <button className="save">Save</button>
          <button className="share">Share</button>
          <h1>{this.props.product.name}</h1>
          <img className="review"/>
        Here are the details for the product like the pricing & name.
      </div>
    );
  }
}

export default ProductOverview;