class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const prod = this.props.product;
    let colors = prod.colors.map((color, index) => {
      return <Color color={color} key={index}/>
    })
    return (
      <div>
          <button className="save">Save</button>
          <button className="share">Share</button>
          <h1>{prod.name}</h1>
          <div>{prod.sku}</div>
          <div>{prod.price}</div>
          <div>Color: {prod.color}</div>
            <div className="product-colors">
              {colors}
            </div>
      </div>
    );
  }
}

export default ProductOverview;

// Reviews for later
// <div className="review-parent">
// <div className="reviewbg"></div>
// <img className="review"/>
// </div>

class Color extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="color"/>
    );
  }
}