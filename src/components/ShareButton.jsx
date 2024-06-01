import { styled } from "styled-components";
function ShareButton() {
	return <StyledShareButton>Share</StyledShareButton>;
}

const StyledShareButton = styled.button`
	cursor: pointer;
	width: 30px;
	height: 30px;
	background-color: transparent;
	background-image: url("../src/assets/icon-share.png");
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	font-size: 0;
	border: none;
`;

export default ShareButton;
