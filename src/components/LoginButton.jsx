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

function LoginButton() {
	return (
		<>
			<StyledButtonLogin type="submit">Sign in</StyledButtonLogin>;
		</>
	);
}

export default LoginButton;
