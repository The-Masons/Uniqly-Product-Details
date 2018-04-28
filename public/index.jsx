import Thumbnails from './Thumbnails.jsx';
import PrimaryImage from './PrimaryImage.jsx';
import ProductInfo from './ProductInfo.jsx';
import ProductContent from './ProductContent.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product:{
        description: `A 100% Supima® cotton T-shirt thick enough to wear on its own or for layering.
        The luxurious jersey material uses 100% Supima® cotton for a smooth feel, natural brightness and beautiful colors.
        A smooth silhouette from the bust down to the waist, with sleek shoulders and armholes.
        A narrower seam fold and stitching for a more delicate neckline.
        With a flattering neckline.`,
        material: `100% cotton
        Machine washable
        Imported  `,
        product_name: "Women JWA EXTRA FINE COTTON SHIRT STRIPE LONG-SLEEVE DRESS",
        sku: "AOJ23F5",
        color: "43 Periwinkle",
        price: '9',
        reviewscore: 4.2,
        reviewcount: 8
      },
      colors: []
    }
  }

  componentDidMount(){
    let id = window.location.href.split('/').pop();
    (id.length > 0) ? null : id = '0';
    fetch(`/productdetails/${id}`)
      .then(function(response) {
        return response.json();
      })
      .then((data) => {
        this.setState({
          product: data
        })
      })
      .catch((err) => {
        throw err;
      })

      fetch(`/product/${id}/colors`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.setState({
            colors: data
          })
        })
        .catch((err) => {
          throw err;
        })
  }

  render() {
    return (
      <div>
        <ProductContent product={this.state.product} colors={this.state.colors}/>
        <ProductInfo description={this.state.product.description} materials={this.state.product.material}/>
      </div>
    );
  }
}

class ProductImages extends React.Component {
  constructor(props) {
    super(props);
    const images = [{ img_url: "https://i.ytimg.com/vi/5G5Gv-c4lsY/maxresdefault.jpg"},
    { img_url: "http://images2.fanpop.com/image/photos/8800000/NYR-3-new-york-rangers-8836300-1024-768.jpg"},
    { img_url: "https://www.denverpost.com/wp-content/uploads/2018/01/nathan-mackinnon-vs-rangers.jpg?w=489"},
    { img_url: "https://media.gq.com/photos/5583ca8f3655c24c6c96de8f/master/w_800/style-blogs-the-gq-eye-ny-rangers-fb-shot.jpg"},
    { img_url: "https://www.denverpost.com/wp-content/uploads/2018/01/nathan-mackinnon-vs-rangers.jpg?w=489"},
    { img_url: "https://media.gq.com/photos/5583ca8f3655c24c6c96de8f/master/w_800/style-blogs-the-gq-eye-ny-rangers-fb-shot.jpg"},
    { img_url: "https://1.bp.blogspot.com/-ZdaITVR2dzU/WFl_sRTG1dI/AAAAAAAACo4/HhQYCxews6I0DsHdmJWtVDwdqKpexDT_gCLcB/s640/img25378012.jpg"}
    ]
    this.state = {
      images: images,
      primaryImage: images[0],
    }
    this.handleClick = this.handleClick.bind(this);
    this.changePrimaryImage = this.changePrimaryImage.bind(this);
  }

  handleClick(image){
    this.setState({
      primaryImage: image
    })
  }

  changePrimaryImage(change){
    let index = this.state.images.indexOf(this.state.primaryImage) + change;
    if (index < 0) {
      index = this.state.images.length - 1;
    } else if (index >= this.state.images.length) {
      index = 0;
    }
    let newImage = this.state.images[index];
    this.setState({
      primaryImage: newImage
    })
  }

  componentDidMount() {
    let id = window.location.href.split('/').pop();
    fetch(`/product/${id}/images`)
      .then(function(response) {
        return response.json();
      })
      .then((data) => {
        this.setState({
          images: data,
          primaryImage: data[0]
        })
      })
      .catch((err) => {
        throw err;
      })
  }

  render() {
    return (
      <div className="product-image-container">
        <Thumbnails handleClick={this.handleClick} images={this.state.images} primaryImage={this.state.primaryImage}/>
        <PrimaryImage image={this.state.primaryImage} handleChangeImage={this.changePrimaryImage}/>
      </div>
    );
  }
}

ReactDOM.render(<ProductDetails />, document.getElementById('product-details'));
ReactDOM.render(<ProductImages />, document.getElementById('product-images'));
