import { styled } from "styled-components";
import NewGameItem from "./NewGameItem";

function NewGames() {
	const newGames = [
		{ id: "newgame-01", url: "new-game-01.jpg" },
		{ id: "newgame-02", url: "new-game-02.jpg" },
		{ id: "newgame-03", url: "new-game-03.jpg" }
	];
	return (
		<StyledNewGameBox>
			<div className="container">
				<StyledTitleNewGame>화제의 신작</StyledTitleNewGame>
				<StyledNewGames>
					{newGames.map((game) => {
						return (
							<li key={game.id}>
								<NewGameItem game={game} />
							</li>
						);
					})}
				</StyledNewGames>
			</div>
		</StyledNewGameBox>
	);
}
const StyledNewGameBox = styled.div`
	padding: 60px 0;
`;
const StyledNewGames = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 16px;
	li {
		overflow: hidden;
		border-radius: 26px;
	}
`;

const StyledTitleNewGame = styled.h2`
	font-size: 48px;
	font-weight: 800;
	margin-bottom: 60px;
	text-align: center;
`;
export default NewGames;
