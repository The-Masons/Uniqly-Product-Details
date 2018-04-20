class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const prod = this.props.product;
    const colors = this.props.colors.map((color, index) => {
      return <Color color={color.name} key={index} img={color.img_url}/>
    })
    let stars;
    let reviewText;
    if(prod.reviewcount > 0){
      stars = Math.floor(prod.reviewscore);
      reviewText = prod.reviewcount + " reviews";
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
          <div className="product-name">{prod.product_name}</div>
          <div className="sku">sku# {prod.sku}</div>
          <div className="reviews_img">
            <img src={`stars_${stars}.png`}/>
          </div> 
          <span>{reviewText}</span>
          <div className="product-price">${prod.price}.99</div>
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