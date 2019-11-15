import React, { Component } from "react";
import { Product } from "../requests";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductForm from "./ProductForm";

class ProductIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.deleteProduct = this.deleteProduct.bind(this);
    this.createProduct = this.createProduct.bind(this);
  }

  createProduct(params) {
    Product.create(params).then(product => {
      this.props.history.push(`/products/${product.id}`);
    });
  }

  deleteProduct(productId) {
    const { products } = this.state;
    this.setState({
      products: products.filter(product => product.id !== productId)
    });
  }
  async componentDidMount() {
    const products = await Product.all();
    this.setState({ products });
  }

  render() {
    const { products } = this.state;
    if (!products) {
      return <main>no products yet</main>;
    }
    return (
      <main className="ProductIndexPage" style={{ padding: "0  20px" }}>
        <ProductForm onSubmit={this.createProduct} />
        <h1>Product Index</h1>
        <ul style={{ paddingLeft: "10px" }}>
          {products.map(product => (
            <li style={{ marginBottom: "1rem" }} key={product.id}>
              {"   "}
              {/* you are calling that function instead of passing the function to onClick */}
              <Button
                bsStyle="danger"
                onClick={() => this.deleteProduct(product.id)}
              >
                Delete
              </Button>
              {"   "}
              <Link to={`/products/${product.id}`}>{product.title}</Link>
              {" by "}
              <span>{product.seller.full_name}</span>
              {" - "}
              <span>${product.price}</span>{" "}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default ProductIndexPage;
