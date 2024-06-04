import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginLink = styled.p`
	text-align: center;
	margin-top: 2.5rem;
	color: #2c2b2f;
	font-weight: bold;
	font-size: 23px;
`;

const JoinLink = styled(Link)`
	color: #e7404a;
	text-decoration: none;
	margin-left: 20px;
`;

function LoginLinks() {
	return (
		<>
			<LoginLink>
				You haven`t any accout? <JoinLink to="/Join">Sign Up</JoinLink>
			</LoginLink>
			;
		</>
	);
}

export default LoginLinks;
