import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { updateLike } from "../redux/slices/newsfeed.slice";
import { updateNewsfeedLike } from "../utils/getNewsfeed";
function LikeButton({ feedId }) {
	const dispatch = useDispatch();
	const [isLike, setIsLike] = useState(false);
	const isLogIn = useSelector((state) => state.user.isLogIn);
	const newsfeeds = useSelector((state) => state.newsfeed.list);
	const selectFeed = newsfeeds.find((newsfeed) => newsfeed.id === feedId);

	const handleLike = async () => {
		if (isLogIn) {
			setIsLike((prev) => !prev);
			const newLike = {
				id: selectFeed.id,
				like: isLike ? selectFeed.like - 1 : selectFeed.like + 1
			};
			dispatch(updateLike(newLike));
			await updateNewsfeedLike(newLike);
		} else {
			alert("로그인이 필요합니다.");
		}
	};

	const style = {
		backgroundImage: isLike ? "url(/imgs/icon-heart-fill.png)" : "url(/imgs/icon-heart-empty.png)"
	};

	return (
		<StyledLikeBox>
			<button onClick={handleLike} style={style}>
				하트
			</button>
			<span>{selectFeed.like || 0}</span>
		</StyledLikeBox>
	);
}

const StyledLikeBox = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
	button {
		cursor: pointer;
		width: 32px;
		height: 26px;
		background-color: transparent;
		background-position: center;
		background-size: cover;
		border: none;
		font-size: 0;
	}
	span {
		font-size: 26px;
		font-weight: 200;
	}
`;

export default LikeButton;
