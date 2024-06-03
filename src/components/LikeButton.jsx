import { useState } from "react";
import { styled } from "styled-components";
function LikeButton() {
	// const [totalheart, setTotalHeart] = useState(0);
	const [isLike, setIsLike] = useState(false);
	const handleLike = () => {
		setIsLike((prev) => !prev);
		// setTotalHeart((prev) => prev + 1);
	};
	const style = {
		backgroundImage: isLike ? "url(/imgs/icon-heart-fill.png)" : "url(/imgs/icon-heart-empty.png)"
	};
	return (
		<StyledLikeBox>
			<button onClick={handleLike} style={style}>
				하트
			</button>
			{/* <span>{totalheart}</span> */}
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
