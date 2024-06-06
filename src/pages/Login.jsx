import styled from "styled-components";
import LoginHeader from "../components/join_login/LoginHeader";
import LoginInput from "../components/join_login/LoginInput";
import LoginLinks from "../components/join_login/LoginLinks";

const StyledLoginBox = styled.div`
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

const StyledLoginText = styled.h2`
	color: #2c2b2f;
	font-size: 48px;
	font-weight: 800;
	margin-bottom: 45px;
`;

const StyledDivider = styled.div`
	background-color: #e7404a;
	width: 670px;
	height: 2px;
	margin-bottom: 50px;
`;

function Login() {
	return (
		<>
			<LoginHeader />
			<StyledLoginBox>
				<StyledLoginText>Sign In</StyledLoginText>
				<StyledDivider />
				<LoginInput />
				<LoginLinks />
			</StyledLoginBox>
		</>
	);
}

export default Login;
