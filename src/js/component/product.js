import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Product = props => {
	const { store, actions } = useContext(Context);
	const found = store.favorites.find(element => element.name == props.product.name);
	const foundCart = store.cart.find(element => element.name == props.product.name);
	return (
		<div className="d-inline-flex pr-5 ">
			{/* post */}
			<div id="product" className="card mt-5  " style={{ width: "18rem" }}>
				<img className="card-img-top" src={props.product.img} alt="Card image cap" />
				<div id="productInfo" className="card-body">
					<h5 className="card-title">{props.product.name}</h5>
					<h5 className="card-title">{props.product.continent}</h5>
					<h5 className="card-title">{props.product.country}</h5>

					<Link
						to={{
							pathname: `/details/${props.index + 1}`,
							state: {
								product: props.product
							}
						}}>
						<button href="#" className="mt-2 btn btn-outline-danger">
							Learn More!
						</button>
					</Link>
					<button
						className="nav-item btn btn-outline-warning"
						onClick={foundCart ? null : () => actions.addToCart(props.product)}>
						<i className="fas fa-shopping-cart" />
					</button>
					<button
						type="button"
						id="like"
						className="btn btn-outline-warning"
						onClick={found ? null : () => actions.addFavorites(props.product.name)}>
						{<i className="fas fa-heart" />}
					</button>
				</div>
			</div>
		</div>
	);
};
Product.propTypes = {
	product: PropTypes.object,
	index: PropTypes.number
};
