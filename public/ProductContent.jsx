class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const prod = this.props.product;
    const colors = prod.colors.map((color, index) => {
      return <Color color={color} key={index}/>
    })
    let stars;
    let reviewText;
    if(prod.reviewCount > 0){
      stars = Math.floor(prod.reviewScore);
      reviewText = prod.reviewCount + " reviews";
    } else {
      stars = 0;
      reviewText = "write the first review";
    }
    return (
      <div className="product-content">
        <div className="product-actions">
          <div className="button">Share</div>
          <div className="button">Save</div>
        </div>
          <div className="product-name">{prod.name}</div>
          <div className="sku">sku# {prod.id}</div>
          <div className="reviews_img">
            <img src={`stars_${stars}.png`}/>
          </div> 
          <span>{reviewText}</span>
          <div className="product-price">{prod.price}</div>
          <div className="color-label">Color: {prod.color}</div>
            <div className="product-colors">
              {colors}
            </div>
          <div className="size-chart">size chart</div>
      </div>
    );
  }
}

export default ProductOverview;

class Color extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="product-color"/>
    );
  }
}