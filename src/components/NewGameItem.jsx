import { Link } from "react-router-dom";
import { styled } from "styled-components";

function NewGameItem({ game }) {
	return (
		<Link to={`/feed-read/${game.id}`} key={game.id}>
			<StyledNewGameImg>
				<img src={`/imgs/${game.url}`} alt="게임 이름" />
			</StyledNewGameImg>
		</Link>
	);
}

const StyledNewGameImg = styled.div`
	width: 100%;
	height: 100%;
	img {
		width: 100%;
		height: 100%;
	}
`;

export default NewGameItem;
