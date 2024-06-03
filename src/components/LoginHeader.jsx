import React from "react";
import styled from "styled-components";

const HeaderBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Title = styled.h2`
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Logo = styled.img``;

function LoginHeader() {
	return (
		<>
			<HeaderBox>
				<Logo src="imgs/speed-run-login.png" alt="로그인 로고" />
				<Title>Login</Title>
			</HeaderBox>
		</>
	);
}

export default LoginHeader;
