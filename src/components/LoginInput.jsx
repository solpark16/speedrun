import React from "react";
import styled from "styled-components";

const FormBox = styled.form`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const InputForm = styled.input`
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

const PasswordInput = styled.input`
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

function LoginInput() {
	return (
		<>
			<FormBox>
				<InputForm type="email" placeholder="이메일을 입력해주세요" />
			</FormBox>
			<PasswordInput type="password" placeholder="비밀번호를 입력해주세요" />
		</>
	);
}

export default LoginInput;
