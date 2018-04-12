import Thumbnails from './Thumbnails.jsx';
import PrimaryImage from './PrimaryImage.jsx';
import ProductDescription from './ProductDescription.jsx';
import ProductOverview from './ProductOverview.jsx';

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
        materials: `100% cotton
        Machine washable
        Imported  `,
        name: "Sweet Eff Ing Shirt",
        sku: "AOJ23F5",
        color: "43 Periwinkle",
        colors: ["color1", "color2"]
      }
    }
  }

  render() {
    return (
      <div>
        <ProductOverview product={this.state.product}/>
        <ProductDescription description={this.state.product.description} materials={this.state.product.materials}/>
      </div>
    );
  }
}

class ProductImages extends React.Component {
  constructor(props) {
    super(props);
    var images = ["https://i.ytimg.com/vi/5G5Gv-c4lsY/maxresdefault.jpg",
    "http://images2.fanpop.com/image/photos/8800000/NYR-3-new-york-rangers-8836300-1024-768.jpg",
    "https://www.denverpost.com/wp-content/uploads/2018/01/nathan-mackinnon-vs-rangers.jpg?w=489",
    "https://media.gq.com/photos/5583ca8f3655c24c6c96de8f/master/w_800/style-blogs-the-gq-eye-ny-rangers-fb-shot.jpg",
    "https://www.denverpost.com/wp-content/uploads/2018/01/nathan-mackinnon-vs-rangers.jpg?w=489",
    "https://media.gq.com/photos/5583ca8f3655c24c6c96de8f/master/w_800/style-blogs-the-gq-eye-ny-rangers-fb-shot.jpg",
    "https://1.bp.blogspot.com/-ZdaITVR2dzU/WFl_sRTG1dI/AAAAAAAACo4/HhQYCxews6I0DsHdmJWtVDwdqKpexDT_gCLcB/s640/img25378012.jpg"
    ]
    this.state = {
      images: images,
      primaryImage: images[0],
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(image){
    this.setState({
      primaryImage: image
    })
  }

  render() {
    return (
      <div>
        <Thumbnails handleClick={this.handleClick} images={this.state.images}/>
        <PrimaryImage image={this.state.primaryImage}/>
      </div>
    );
  }
}

ReactDOM.render(<ProductDetails />, document.getElementById('product-details'));
ReactDOM.render(<ProductImages />, document.getElementById('product-images'));
