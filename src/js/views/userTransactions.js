import React from "react";
import { Link } from "react-router-dom";

export const UserTransactions = props => {
	return (
		<div className="container-fluid p-4">
			<h1 className=" d-flex justify-content-center font-weight-bold">Rickys Order</h1>

			<div className="container">
				<table className="table table-hover ">
					<thead className="table table-hover table-dark">
						<tr>
							<th scope="col">#</th>
							<th scope="col">Name</th>
							<th scope="col">Price</th>
							<th scope="col">Transaction ID</th>
							<th scope="col">Quantity</th>
							<th scope="col">Date</th>
							<th scope="col">Card Number</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">1</th>
							<td>Drawn Peral Fan</td>
							<td>$10.99</td>
							<td>123456</td>
							<td>1</td>
							<td>11/9/2020</td>
							<td>XXXXXXXX2289</td>
						</tr>
						<tr>
							<th scope="row">2</th>
							<td>ANDETHIOURAYE</td>
							<td>$15.99</td>
							<td>123456</td>
							<td>1</td>
							<td>11/7/2020</td>
							<td>XXXXXXXX2289</td>
						</tr>
						<tr>
							<th scope="row">3</th>
							<td>Happiness Bottle</td>
							<td>$22.99</td>
							<td>123456</td>
							<td>1</td>
							<td>11/8/2020</td>
							<td>XXXXXXXX2289</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};
