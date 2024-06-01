import { Link } from "react-router-dom";
import styled from "styled-components";
function Header() {
	return (
		<StyledHeader>
			<div className="container">
				<StyledHeaderBox>
					<StyleLogoBox>
						<Link to="/">
							<img src="../src/assets/speed-run-logo.png" alt="스피드런 로고" />
						</Link>
					</StyleLogoBox>
					<div>
						<StyledLoginButton>
							<Link to="/login">Login</Link>
						</StyledLoginButton>
						<StyledMypageButton>
							<Link to="/my-page/:userId">마이페이지</Link>
						</StyledMypageButton>
					</div>
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
	justify-content: space-between;
	align-items: center;
`;
const StyleLogoBox = styled.h1`
	width: 162px;
	img {
		width: 100%;
	}
`;
const StyledLoginButton = styled.span`
	font-size: 16px;
	margin-right: 16px;
	padding-left: 25px;
	background-image: url("../src/assets/icon-login.png");
	background-position: left center;
	background-size: contain;
	background-repeat: no-repeat;
`;
const StyledMypageButton = styled.span`
	border-radius: 6px;
	background-color: #e7404a;
	font-size: 16px;
	font-weight: 600;
	padding: 14px 35px;
`;

export default Header;
