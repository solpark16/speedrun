import { styled } from "styled-components";
function MainBanner() {
	return (
		<StyledMainBanner>
			<div className="container">
				<StyledBgBanner>
					<StyledMainTitle>
						Discover the key to <br />
						grow your business
					</StyledMainTitle>
					<StyledMainParagraph>
						Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit <br />
						phasellus mollis sit aliquam sit nullam neque ultrices.
					</StyledMainParagraph>
					<StyledMainButton>자세히 보기</StyledMainButton>
				</StyledBgBanner>
			</div>
		</StyledMainBanner>
	);
}

const StyledMainBanner = styled.div`
	background-color: #e7404a;
`;
const StyledBgBanner = styled.div`
	background-image: url("/imgs/main-banner.png");
	background-position: center right;
	background-size: 460px 215px;
	background-repeat: no-repeat;
	padding: 275px 0;
`;
const StyledMainTitle = styled.h2`
	font-size: 48px;
	font-weight: 800;
	margin-bottom: 20px;
`;
const StyledMainParagraph = styled.p`
	font-size: 16px;
	line-height: 1.5em;
	margin-bottom: 35px;
`;
const StyledMainButton = styled.button`
	padding: 14px 18px;
	background-color: white;
	color: #e7404a;
	border-radius: 6px;
	border: none;
	font-size: 14px;
	font-weight: bold;
`;
export default MainBanner;
