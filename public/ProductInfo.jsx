class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //decide which header should be selected & which content to render
    return (
      <div className="product-info">
        <div className="detail-header1 detail-header-selected">PRODUCT DETAIL</div>
        <div className="detail-header2">MATERIALS & CARE</div>
        <div className="tab-content">
          <div className="description">
            {this.props.description}
          </div>
          <div className="materials">
            {this.props.materials}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductInfo;