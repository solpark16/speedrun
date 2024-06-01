import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { getInitalFeed } from "../redux/slices/newsfeed.slice";
import { getNewsfeed } from "../utils/getNewsfeed";
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
		<div>
			<div className="container">
				<StyledNewsfeedList>
					{newsfeedList.map((list) => {
						return (
							<li key={list.id}>
								<Link to={`/feed-write/${list.id}`}>
									<ListItem title={list.title} content={list.content} date={list.date} userId={list.userId} />
								</Link>
								<StyledListFooter>
									<LikeButton />
									<ShareButton />
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
