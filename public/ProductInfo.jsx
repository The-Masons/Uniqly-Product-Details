import React from 'react';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerShowing: 1
    }
    this.switchHeader = this.switchHeader.bind(this);
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  switchHeader() {
    let newHeader;
    if (this.state.headerShowing === 1) {
      newHeader = 2;
    } else {
      newHeader = 1;
    }

    this.setState({
      headerShowing: newHeader
    })
  }

  handleHeaderClick(headerClicked) {
    if (this.state.headerShowing === headerClicked) {
      return;
    }

    this.switchHeader();
  }

  render() {
    //decide which header should be selected & which content to render
    let h1Class = 'detail-header1';
    let h2Class = 'detail-header2';
    let descClass = 'description';
    let matClass = 'materials';
    if (this.state.headerShowing === 1) {
      h1Class += ' detail-header-selected';
      matClass += ' hidden';
    } else {
      h2Class += ' detail-header-selected'
      descClass += ' hidden';
    }
    return (
      <div className="product-info">
        <div className={h1Class} onClick={() => this.handleHeaderClick(1)}>PRODUCT DETAIL</div>
        <div className={h2Class} onClick={() => this.handleHeaderClick(2)}>MATERIALS & CARE</div>
        <div className="tab-content">
          <div className={descClass}>
            {this.props.description}
          </div>
          <div className={matClass}>
            {this.props.materials}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductInfo;