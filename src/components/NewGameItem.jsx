import { Link } from "react-router-dom";
import { styled } from "styled-components";

function NewGameItem() {
	return (
		<Link to="">
			<StyledNewGameImg>
				<img src="../src/assets/default-new-game.png" alt="게임 이름" />
			</StyledNewGameImg>
		</Link>
	);
}

const StyledNewGameImg = styled.div`
	width: 100%;
	border-radius: 26px;
`;

export default NewGameItem;
