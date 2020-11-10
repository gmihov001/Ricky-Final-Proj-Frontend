import React from "react";
import { Context } from "../store/appContext";
import { CartItem } from "../component/cartItem";

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
							<div className="d-flex  justify-content-end">
								<h3>Sub Total: {actions.getTotal()}</h3>
								<button className="btn btn-lg btn-success" />
							</div>
						</div>
					</div>
				)}
			</Context.Consumer>
		);
	}
}
