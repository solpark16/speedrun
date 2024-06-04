import React from "react";
import styled from "styled-components";

const StyledFormBox = styled.form`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledInputForm = styled.input`
	font-family: inherit;
	width: 675px;
	height: 68px;
	margin-bottom: 40px;
	border-radius: 11px;
	border: 1px solid #b4b9c9;
	color: #343434;
	font-size: 20px;
	padding-left: 70px;
	background-image: url("/imgs/icon-e-mail.png");
	background-repeat: no-repeat;
	background-size: 27px 27px;
	background-position: 27px center;
	box-sizing: border-box;
`;

const StyledPasswordInput = styled.input`
	font-family: inherit;
	width: 675px;
	height: 68px;
	margin-bottom: 40px;
	border-radius: 11px;
	border: 1px solid #b4b9c9;
	color: #343434;
	font-size: 20px;
	padding-left: 70px;

	background-image: url("/imgs/icon-lock.png");
	background-repeat: no-repeat;
	background-size: 27px 27px;
	background-position: 27px center;
	box-sizing: border-box;
`;

function LoginInput({ email, setEmail, password, setPassword }) {
	return (
		<>
			<StyledFormBox>
				<StyledInputForm
					type="email"
					placeholder="이메일을 입력해주세요"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</StyledFormBox>
			<StyledPasswordInput
				type="password"
				placeholder="비밀번호를 입력해주세요"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
		</>
	);
}

export default LoginInput;
