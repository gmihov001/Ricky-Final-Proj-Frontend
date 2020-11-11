import React from "react";
import { Context } from "../store/appContext";
import { CartItem } from "../component/cartItem";
import { StripeCheckoutButton } from "../component/stripe-button";

export class Cart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		return (
			<Context.Consumer>
				{({ actions, store }) => (
					<div className="container mx-auto p-4">
						<div className=" d-flex justify-content-Start font-weight-bold">
							<h1>Your Cart</h1>
						</div>
						<div className="d-flex  justify-content-start">
							<div>
								{store.cart.map((cartItem, ind) => (
									<CartItem key={ind} index={ind} item={cartItem} />
								))}
							</div>
							<div className="d-block">
								<h3>Sub Total: {actions.getTotal().toFixed(2)}</h3>
								<button className="btn btn-lg btn-success">
									<h3>Payment</h3>
								</button>
								<StripeCheckoutButton price={actions.getTotal()} />
							</div>
						</div>
					</div>
				)}
			</Context.Consumer>
		);
	}
}
