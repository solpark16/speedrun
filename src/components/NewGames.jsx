import { styled } from "styled-components";
import NewGameItem from "./NewGameItem";

function NewGames() {
	return (
		<StyledNewGameBox>
			<div className="container">
				<StyledTitleNewGame>화제의 신작</StyledTitleNewGame>
				<StyledNewGames>
					<li>
						<NewGameItem />
					</li>
					<li>
						<NewGameItem />
					</li>
					<li>
						<NewGameItem />
					</li>
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
`;

const StyledTitleNewGame = styled.h2`
	font-size: 48px;
	font-weight: 800;
	margin-bottom: 60px;
	text-align: center;
`;
export default NewGames;
