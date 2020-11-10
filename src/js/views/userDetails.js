import React from "react";
import { Link } from "react-router-dom";
export const UserDetails = props => {
	return (
		<div className="container-fluid p-4">
			<h1 className=" d-flex justify-content-center font-weight-bold">Rickys Details</h1>

			<div>
				<form className=" d-flex justify-content-center font-weight-bold">
					<div id="input" className="inline-block">
						<div className="form-group col-md-6 text-left">
							<label htmlFor="firstName">
								<strong> Name</strong>
							</label>
							<input type="text" className="form-control" id="firstName" />
							<span type="button" className="text-primary">
								edit
							</span>
						</div>

						<div className="form-group col-md-6 text-left">
							<label htmlFor="email">
								<strong>Email</strong>
							</label>
							<input type="text" className="form-control" id="email" />
							<span type="button" className="text-primary">
								edit
							</span>
						</div>
						<div className="form-group col-md-6 text-left">
							<label htmlFor="Phone Number">
								<strong>Phone Number</strong>
							</label>
							<input type="number" className="form-control" id="phone" />
							<span type="button" className="text-primary">
								edit
							</span>
						</div>
						<div className="form-group col-md-6 text-left">
							<label htmlFor="password">
								<strong>Password</strong>
							</label>
							<input type="text" className="form-control" id="password" />
							<span type="button" className="text-primary">
								edit
							</span>
						</div>

						<div className=" form-row d-flex justify-content-between">
							<div className="form-group col-md-6">
								<div id="radiobutton" className=" col-12 col-sm-9 col-lg-7 bg-secondary mt-4">
									<div className="mt-1" />
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
