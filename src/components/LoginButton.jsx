import React from "react";
import styled from "styled-components";

const ButtonLogin = styled.button`
	width: 674px;
	height: 67px;
	background-color: #e7404a;
	color: #fff;
	border: none;
	border-radius: 12px;
	font-size: 25px;
	font-weight: 500;
	cursor: pointer;
`;

function LoginButton({ onClick }) {
	return (
		<ButtonLogin type="submit" onClick={onClick}>
			Sign in
		</ButtonLogin>
	);
}

export default LoginButton;
