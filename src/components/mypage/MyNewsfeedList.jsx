import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { getNewsfeedByUserId } from "../../api/feed";
import { getInitalFeed } from "../../redux/slices/newsfeed.slice";
import NewsfeedItem from "../newsfeed/NewsfeedItem";

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
					{newsfeedList.length ? (
						newsfeedList.map((list) => {
							return <NewsfeedItem key={list.id} list={list} />;
						})
					) : (
						<StyledNoPost>작성하신 게시물이 없습니다.</StyledNoPost>
					)}
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
const StyledNoPost = styled.div`
	text-align: center;
	font-size: 28px;
	color: #808080;
`;
const StyledTitleMyNewsfeedList = styled.h2`
	font-size: 48px;
	font-weight: 800;
	margin-bottom: 60px;
	text-align: center;
`;
export default MyNewsfeedList;
