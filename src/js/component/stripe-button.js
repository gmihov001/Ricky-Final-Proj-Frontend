import React from "react";
import StripeCheckout from "react-stripe-checkout";
import PropTypes from "prop-types";

export const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51HlwtjGXJZUgwlNSdeEBhg8W2knXeFgTLf83YAoD0wRerIEtSBKgIHLHtSCo3JmVlMx81p8SYVGnDModssRkqVSW00LZavL8Xf";
	const onToken = token => {
		console.log(token);
		alert("Payment Successful");
	};
	return (
		<StripeCheckout
			label="Pay Now"
			name="AVIATO"
			billingAddress
			shippingAddress
			image=""
			description={`Your total is ${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

StripeCheckoutButton.propTypes = {
	price: PropTypes.number
};
