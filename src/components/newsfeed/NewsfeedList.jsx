import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { getNewsfeedByDate } from "../../api/feed";
import { getInitalFeed } from "../../redux/slices/newsfeed.slice";
import NewsfeedItem from "./NewsfeedItem";

function NewsfeedList() {
	const dispatch = useDispatch();
	const [feeds, setFeeds] = useState([]);

	const getDataByDate = useCallback(async () => {
		const data = await getNewsfeedByDate();
		dispatch(getInitalFeed(data));
		setFeeds(data);
	}, [dispatch]);

	useEffect(() => {
		getDataByDate();
	}, [getDataByDate]);
	return (
		<div className="newsfeed-list">
			<div className="container">
				<StyledNewsfeedList>
					{feeds.map((list) => {
						return <NewsfeedItem key={list.id} list={list} />;
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

export default NewsfeedList;
