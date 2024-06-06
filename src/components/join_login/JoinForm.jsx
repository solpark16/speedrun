import styled from "styled-components";
import InputForm from "./InputForm";

function JoinForm() {
	return (
		<>
			<div className="container">
				<StyledJoinBg>
					<StyledJoinText>Sign Up</StyledJoinText>
					<StyledDivider />

					<InputForm />
				</StyledJoinBg>
			</div>
		</>
	);
}

const StyledJoinBg = styled.div`
	margin-top: 115px;
	margin-bottom: 115px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	border-radius: 12px;
	background-color: #ffffff;
	box-shadow: 0px 13px 5.5px rgba(0, 0, 0, 0.3);

	width: 1122px;
	height: 965px;
`;

const StyledJoinText = styled.h2`
	color: #2c2b2f;

	font-size: 48px;
	font-weight: 800;
	margin-bottom: 43px;
`;

const StyledDivider = styled.div`
	background-color: #e7404a;

	width: 674px;
	height: 2px;
	margin-bottom: 43px;
`;

export default JoinForm;
