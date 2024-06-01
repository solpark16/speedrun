import { useState } from "react";
import { styled } from "styled-components";
function LikeButton() {
	const [heart, setHeart] = useState(0);
	const handleLike = () => setHeart((prev) => prev + 1);
	return (
		<StyledLikeBox>
			<button onClick={handleLike}>하트</button>
			<span>{heart}</span>
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
		background-image: url("/src/assets/icon-heart.png");
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