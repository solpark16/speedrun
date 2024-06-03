import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
	padding: 20px 0;
	box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.25);
`;
const StyledHeaderBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const StyleLogoBox = styled.h1`
	width: 162px;
	img {
		width: 100%;
	}
`;

const Logo = styled.img`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const LoginBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 5rem;
`;

const Title = styled.h2`
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2.5rem;
	margin-top: 3.5rem;
`;

function LoginHeader() {
	return (
		<>
			<StyledHeader>
				<div className="container">
					<StyledHeaderBox>
						<StyleLogoBox>
							<Link to="/">
								<img src="/imgs/speed-run-logo.png" alt="스피드런 로고" />
							</Link>
						</StyleLogoBox>
					</StyledHeaderBox>
				</div>
			</StyledHeader>
			<LoginBox>
				<Logo src="imgs/speed-run-login.png" alt="로그인" />
			</LoginBox>
			<Title>LOGIN</Title>
		</>
	);
}

export default LoginHeader;
