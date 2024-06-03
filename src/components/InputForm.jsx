import { styled } from "styled-components";

const InputField = styled.input`
	font-family: inherit;

	width: 674px;
	height: 67px;
	margin-bottom: 43px;
	border-radius: 11px;

	border: 2px solid #b4b9c9;
	color: #2c2b2f;
	font-size: 21px;

	padding-left: 77px;

	background-image: url("/imgs/icon-e-mail.png");
	background-repeat: no-repeat;
	background-size: 27px 27px;
	background-position: 27px center;
	box-sizing: border-box;

	&:focus {
		outline: none;
		border-color: #667788;
	}
`;

const InputFieldLock = styled.input`
	font-family: inherit;

	width: 674px;
	height: 67px;
	margin-bottom: 43px;
	border-radius: 11px;

	border: 2px solid #b4b9c9;
	color: #2c2b2f;
	font-size: 21px;

	padding-left: 77px;

	background-image: url("/imgs/icon-lock.png");
	background-repeat: no-repeat;
	background-size: 27px 27px;
	background-position: 27px center;
	box-sizing: border-box;

	&:focus {
		outline: none;
		border-color: #667788;
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const SubmitButton = styled.button`
	font-family: inherit;

	width: 674px;
	height: 67px;
	background-color: #e7404a;
	color: white;
	border: none;
	border-radius: 11px;

	font-size: 30px;
	font-weight: 600;
	cursor: pointer;

	&:hover {
		background-color: #d6393f;
	}
`;

function InputForm() {
	return (
		<Form>
			<InputField type="email" placeholder="이메일을 입력해주세요" />
			<InputFieldLock type="password" placeholder="비밀번호를 입력해주세요" />
			<InputFieldLock type="password" placeholder="비밀번호를 다시 입력해주세요" />
			<SubmitButton type="submit">Sign Up</SubmitButton>
		</Form>
	);
}

export default InputForm;
