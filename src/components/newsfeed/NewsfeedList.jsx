import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { getNewsfeedByDate, getNewsfeedByLike } from "../../api/feed";
import { getInitalFeed } from "../../redux/slices/newsfeed.slice";
import NewsfeedItem from "./NewsfeedItem";

function NewsfeedList() {
	const dispatch = useDispatch();
	const [feeds, setFeeds] = useState([]);
	const [isSortActive, setIsSortActive] = useState(null);

	const getDataByDate = useCallback(async () => {
		const data = await getNewsfeedByDate();
		dispatch(getInitalFeed(data));
		setFeeds(data);
		setIsSortActive("date");
	}, [dispatch]);

	const handleClickSortByDate = async () => {
		setIsSortActive("date");
		getDataByDate();
	};

	const handleClickSortByLike = async () => {
		const data = await getNewsfeedByLike();
		setFeeds(data);
		setIsSortActive("like");
	};

	useEffect(() => {
		getDataByDate();
	}, [getDataByDate]);
	console.log(feeds.length);
	return (
		<div className="newsfeed-list">
			<div className="container">
				<StyledSortMenu>
					<li>
						<StyledSortbutton
							$isActive={isSortActive === "date"} // isActive 속성 전달
							onClick={handleClickSortByDate}
						>
							최신순
						</StyledSortbutton>
					</li>
					<li>
						<StyledSortbutton
							$isActive={isSortActive === "like"} // isActive 속성 전달
							onClick={handleClickSortByLike}
						>
							인기순
						</StyledSortbutton>
					</li>
				</StyledSortMenu>
				<StyledNewsfeedList>
					{feeds.length ? (
						feeds.map((list) => <NewsfeedItem key={list.id} list={list} />)
					) : (
						<StyledNoPost>작성된 게시물이 없습니다.</StyledNoPost>
					)}
				</StyledNewsfeedList>
			</div>
		</div>
	);
}

const StyledSortMenu = styled.ul`
	display: flex;
	justify-content: flex-end;
	gap: 15px;
`;

const StyledSortbutton = styled.button`
	cursor: pointer;
	background: transparent;
	border: none;
	color: white;
	font-size: 18px;
	padding: 10px 15px;
	border-radius: 10px;
	background-color: ${(props) => (props.$isActive ? "#e7404a" : "#818181")};
	&:hover {
		text-decoration: underline;
	}
`;
const StyledNoPost = styled.div`
	text-align: center;
	font-size: 28px;
	color: #808080;
	margin-top: 60px;
`;
const StyledNewsfeedList = styled.ul`
	padding-bottom: 200px;
	li {
		border-bottom: 3px solid #e7404a;
		padding: 60px 0;
	}
`;

export default NewsfeedList;
