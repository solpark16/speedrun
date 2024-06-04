import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { getNewsfeed } from "../api/feed";
import { getInitalFeed } from "../redux/slices/newsfeed.slice";
import LikeButton from "./LikeButton";
import ListItem from "./ListItem";
import ShareButton from "./ShareButton";

function NewsfeedList() {
	const dispatch = useDispatch();
	const newsfeedList = useSelector((state) => state.newsfeed.list);
	async function getData() {
		const data = await getNewsfeed();
		dispatch(getInitalFeed(data));
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="newsfeed-list">
			<div className="container">
				<StyledNewsfeedList>
					{newsfeedList.map((list) => {
						return (
							<li key={list.id}>
								<Link to={`/feed-read/${list.id}`}>
									<ListItem title={list.title} content={list.content} date={list.date} userId={list.userId} />
								</Link>
								<StyledListFooter>
									<LikeButton feedId={list.id} />
									<ShareButton feedId={list.id} />
								</StyledListFooter>
							</li>
						);
					})}
				</StyledNewsfeedList>
			</div>
		</div>
	);
}

const StyledNewsfeedList = styled.ul`
	padding-bottom: 200px;
	li {
		border-bottom: 3px solid #e7404a;
		padding: 60px 0;
	}
`;
const StyledListFooter = styled.div`
	display: flex;
	justify-content: space-between;
`;
export default NewsfeedList;
