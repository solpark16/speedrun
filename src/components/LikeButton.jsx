import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
// import { updateLike } from "../redux/slices/newsfeed.slice";
import { addNewsfeedLike, getNewsfeedLike, removNewsfeedLike } from "../api/feed";
function LikeButton({ feedId }) {
	// const dispatch = useDispatch();
	const [isLike, setIsLike] = useState(false);
	const isLogIn = useSelector((state) => state.user.isLogIn);
	const [heart, setHeart] = useState(0);

	const getLike = async () => {
		const like = await getNewsfeedLike(feedId);
		setHeart(like.length);
	};

	const handleLike = async () => {
		if (isLogIn) {
			setIsLike((prev) => !prev);
			const newLike = {
				userId: "testUserId",
				feedId: feedId
			};
			setHeart((prev) => (isLike ? prev - 1 : prev + 1));
			isLike ? await removNewsfeedLike(newLike) : await addNewsfeedLike(newLike);
		} else {
			alert("로그인이 필요합니다.");
		}
	};

	useEffect(() => {
		getLike();
	}, []);

	const style = {
		backgroundImage: isLike ? "url(/imgs/icon-heart-fill.png)" : "url(/imgs/icon-heart-empty.png)"
	};

	return (
		<StyledLikeBox>
			<button onClick={handleLike} style={style}>
				하트
			</button>
			<span>{heart || 0}</span>
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
