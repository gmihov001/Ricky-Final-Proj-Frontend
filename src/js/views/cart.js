import React from "react";
import { Context } from "../store/appContext";
import { CartItem } from "../component/cartItems";

export class Cart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		return (
			<Context.Consumer>
				{({ actions, store }) => (
					<div className="container-fluid p-4">
						<div className=" d-flex justify-content-Start font-weight-bold">
							<h1>SHOPPING BAG</h1>
						</div>
						{/* <div>
							{store.cart.map((cartItem, ind) => (
								<CartItem key={ind} item={cartItem} />
							))}
						</div> */}
					</div>
				)}
			</Context.Consumer>
		);
	}
}
