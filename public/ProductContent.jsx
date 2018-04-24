import React from 'react';

const starImages = [
  "https://i.imgur.com/BWTowvx.gif",
  "https://i.imgur.com/VZ89RCE.png",
  "https://i.imgur.com/zd4DwiU.png",
  "https://i.imgur.com/FvECFC4.png",
  "https://i.imgur.com/5Rb5yY3.png",
  "https://i.imgur.com/DYQgYtC.png"
]

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
          <div className="social-sharing">
            <span className="share-button">Share</span>
            <span className="button-divider">|</span>
            <span className="save-button">Save</span>
          </div>
        </div>
          <div className="product-name">{prod.product_name}</div>
          <div className="sku">sku# {prod.sku}</div>
          <div className="review-parent">
            <div className="reviews_img">
              <img src={starImages[stars]}/>
            </div> 
            <span className="review-text">{reviewText}</span>
          </div>
          <div className="product-price">${prod.price}.99</div>
          <div className="color-parent">
            <span className="color-label">Color:</span> <span className="current-color">{prod.color}</span>
              <div className="product-colors">
                {colors}
              </div>
          </div>
          <div className="size-chart-section">
            <div className="size-chart-parent">
            <img src="https://i.imgur.com/ntZVBxZ.png" />
              <div className="size-chart-text">SIZE CHART</div>
            </div>
          </div>
          <div id="quick-add-app"></div>
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