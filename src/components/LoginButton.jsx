import React from "react";
import styled from "styled-components";

const StyledButtonLogin = styled.button`
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

function LoginButton({ handleLoginClick }) {
	const handleLogin = () => {
		alert("회원가입으로 이동해주세요");
	};

	return (
		<>
			<StyledButtonLogin type="submit" onClick={handleLogin}>
				Sign in
			</StyledButtonLogin>
			;
		</>
	);
}

export default LoginButton;
