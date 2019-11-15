import React, { Component } from "react";
import ProductDetails from "./ProductDetails";
import ReviewList from "./ReviewList";

import { Product } from "../requests";

class ProductShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      product: {}
    };
    this.deleteReview = this.deleteReview.bind(this);
  }

  deleteReview(reviewId) {
    const { product } = this.state;
    const { reviews } = product;

    this.setState({
      product: {
        ...product,
        reviews: reviews.filter(review => review.id !== reviewId)
      }
    });
  }

  async componentDidMount() {
    const { params } = this.props.match;
    const product = await Product.one(params.id);
    this.setState({ product, loading: false });
  }

  render() {
    const { product, loading } = this.state;
    // const product = this.state.product;
    if (loading) {
      return (
        <main className="ProductShowPage" style={{ padding: "0  20px" }}>
          <h3>Loading product...</h3>
        </main>
      );
    }
    const { reviews = [] } = product;
    //const reviews = this.state.product.reviews;
    return (
      <main
        className="ProductShowPage"
        style={{
          padding: "0 20px"
        }}
      >
        <h1>Product Show Page</h1>
        <ProductDetails {...product} />
        <h1>Reviews</h1>
        <ReviewList reviews={reviews} onReviewDeleteClick={this.deleteReview} />
      </main>
    );
  }
}

export default ProductShowPage;
