import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { getNewsfeedByDate, getNewsfeedByUserId } from "../../api/feed";
import { getInitalFeed } from "../../redux/slices/newsfeed.slice";
import { useEffect } from "react";
import NewsfeedItem from "../newsfeed/NewsfeedItem";
import { useParams } from "react-router-dom";

const MyNewsfeedList = () => {
	const { userId } = useParams();
	const dispatch = useDispatch();
	const newsfeedList = useSelector((state) => state.newsfeed.list);
	async function getData() {
		const data = await getNewsfeedByUserId(userId);
		dispatch(getInitalFeed(data));
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<StyledMyNewsfeedList>
			<div className="container">
				<StyledTitleMyNewsfeedList>내 게시물</StyledTitleMyNewsfeedList>
				<StyledNewsfeedList>
					{newsfeedList.map((list) => {
						return <NewsfeedItem key={list.id} list={list} />;
					})}
				</StyledNewsfeedList>
			</div>
		</StyledMyNewsfeedList>
	);
};

const StyledMyNewsfeedList = styled.div`
	padding: 60px;
`;
const StyledNewsfeedList = styled.ul`
	padding-bottom: 200px;
	li {
		border-bottom: 3px solid #e7404a;
		padding: 60px 0;
	}
`;
const StyledTitleMyNewsfeedList = styled.h2`
	font-size: 48px;
	font-weight: 800;
	margin-bottom: 60px;
	text-align: center;
`;
export default MyNewsfeedList;
