import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export class ProductDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			results: null
		};
	}

	componentDidMount = () => {
		const { product } = this.props.location.state;
		this.setState({ results: product });
	};
	render() {
		console.log("Results: ", this.state.results);
		return (
			<div className="container">
				<div className="row">
					<div className="col-6">
						<img src={this.props.location.state.product.img} className="w-100" />
					</div>
					<div className="col-6">
						<div className="text-center m-3">
							<h2 className="text-dark">{this.props.location.state.product.name}</h2>
							<p className="text-danger">{this.props.location.state.product.description}</p>
						</div>
					</div>
				</div>
				<div className="row ml-1 mr-1 background border-top border-danger">
					<div className="col-12 d-flex justify-content-between text-danger text-center">
						<div className="appearances p-2 m-3">
							<h6>Name</h6>
							<p>{this.props.location.state.product.name}</p>
						</div>
						<div className="affiliations m-3 p-2">
							<h6>Price</h6>
							<p className="text-center">{this.props.location.state.product.price}</p>
						</div>
						<div className="locations p-2 m-3">
							<h6>Continent</h6>
							<p>{this.props.location.state.product.continent}</p>
						</div>
						<div className="gender p-2 m-3">
							<h6>Country</h6>
							<p>{this.props.location.state.product.country}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
ProductDetails.propTypes = {
	product: PropTypes.object,
	location: PropTypes.object
};
