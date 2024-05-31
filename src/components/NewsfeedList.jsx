import { Link } from "react-router-dom";
import { styled } from "styled-components";
import LikeButton from "./LikeButton";
import ListItem from "./ListItem";
import ShareButton from "./ShareButton";

function NewsfeedList() {
	return (
		<div>
			<div className="container">
				<StyledNewsfeedList>
					<li>
						<Link to="/feed-write/:feedId">
							<ListItem />
						</Link>
						<StyledListFooter>
							<LikeButton />
							<ShareButton />
						</StyledListFooter>
					</li>
				</StyledNewsfeedList>
			</div>
		</div>
	);
}

const StyledNewsfeedList = styled.ul`
	padding: 60px 0;
	li {
		border-bottom: 3px solid #e7404a;
		padding-bottom: 24px;
	}
`;
const StyledListFooter = styled.div`
	display: flex;
	justify-content: space-between;
`;
export default NewsfeedList;
