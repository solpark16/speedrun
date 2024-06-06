import { Link } from "react-router-dom";
import styled from "styled-components";

function LoginLinks() {
	return (
		<>
			<StyledLoginLink>
				You haven&#039;t any accout? <StyledJoinLink to="/join">Sign Up</StyledJoinLink>
			</StyledLoginLink>
			;
		</>
	);
}

const StyledLoginLink = styled.p`
	text-align: center;
	margin-top: 2.5rem;
	color: #2c2b2f;
	font-weight: bold;
	font-size: 23px;
`;

const StyledJoinLink = styled(Link)`
	color: #e7404a;
	text-decoration: none;
	margin-left: 20px;
`;

export default LoginLinks;
