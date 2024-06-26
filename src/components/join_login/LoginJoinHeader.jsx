import { Link } from "react-router-dom";
import styled from "styled-components";

function LoginJoinHeader() {
	return (
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
	);
}
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

export default LoginJoinHeader;
