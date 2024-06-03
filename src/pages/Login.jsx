import LoginButton from "../components/LoginButton";
import LoginHeader from "../components/LoginHeader";
import LoginInput from "../components/LoginInput";
import LoginLinks from "../components/LoginLinks";
import React, { useState } from "react";
import styled from "styled-components";

const LoginBox = styled.div`
	width: 1122px;
	height: 965px;
	background-color: #fff;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 110px auto;
`;

const LoginText = styled.h2`
	color: #2c2b2f;
	font-size: 45px;
	font-weight: bold;
	margin-bottom: 120px;
`;

const StyledDivider = styled.div`
	background-color: #e7404a;
	width: 670px;
	height: 2px;
	margin-bottom: 50px;
`;

const StyledGoogleBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #e6e8ee;
	width: 674px;
	height: 67px;
	margin-bottom: 50px;
	border-radius: 11px;

	&:hover {
		background-color: #d3d5dd;
	}
`;

const StyledGoogleimg = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0px 64px;

	color: #2c2b2f;
	font-size: 30px;
	font-weight: 600;

	height: 32px;
	background-image: url("/imgs/icon-Google.png");
	background-position: center left;
	background-size: 32px 32px;
	background-repeat: no-repeat;
`;

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	return (
		<>
			<LoginHeader />
			<LoginBox>
				<LoginText>Sign In</LoginText>
				<StyledDivider />
				<StyledGoogleBox>
					<StyledGoogleimg>Sign In With Google</StyledGoogleimg>
				</StyledGoogleBox>
				<StyledDivider />
				<LoginInput />
				<LoginButton />
				<LoginLinks />
			</LoginBox>
		</>
	);
}

export default Login;
