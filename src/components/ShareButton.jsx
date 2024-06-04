import { useSelector } from "react-redux";
import { styled } from "styled-components";
function ShareButton({ feedId }) {
	const newsfeeds = useSelector((state) => state.newsfeed.list);
	const selectFeed = newsfeeds.find((newsfeed) => newsfeed.id === feedId);
	const handleShare = () => {
		window.prompt("복사하여 사용하세요.", `http://speedrun-virid.vercel.app/feed-read/${selectFeed.id}`);
	};
	return <StyledShareButton onClick={handleShare}>Share</StyledShareButton>;
}

const StyledShareButton = styled.button`
	cursor: pointer;
	width: 30px;
	height: 30px;
	background-color: transparent;
	background-image: url("/imgs/icon-share.png");
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	font-size: 0;
	border: none;
`;

export default ShareButton;
