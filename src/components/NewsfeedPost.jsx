import { styled } from "styled-components";
import LikeButton from "./LikeButton";
import ShareButton from "./ShareButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getInitalFeed } from "../redux/slices/newsfeed.slice";
import { getNewsfeed } from "../utils/getNewsfeed";
import supabase from "../supabase/supabase";

const NewsfeedPost = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { feedId } = useParams();

	const newsfeedList = useSelector((state) => state.newsfeed.list);
	async function getData() {
		const data = await getNewsfeed();
		dispatch(getInitalFeed(data));
	}

	useEffect(() => {
		getData();
	}, []);

	const getPost = newsfeedList.find((newsfeed) => {
		return newsfeed.id === feedId;
	});
	const { title, userId, date, content } = { ...getPost };

	const deletePostHandler = async () => {
		const { error } = await supabase.from("newsfeed").delete().eq("id", feedId);
		navigate("/");
	};
	return (
		<StyledNewsfeedPost>
			<div className="container">
				<StyledPostItem>
					<StyledPostHeader>
						<StyledImgBox>
							<img src="/imgs/default-user-profile.png" alt="유저 아이디" />
						</StyledImgBox>
						<StyledInfoBox>
							<StyledListTitle>{title}</StyledListTitle>
							<div>
								<span>{userId}</span> | <span>{date}</span>
							</div>
						</StyledInfoBox>
						<StyledDeleteButton onClick={() => deletePostHandler()}>삭제</StyledDeleteButton>
					</StyledPostHeader>
					<StyledPostContent>{content}</StyledPostContent>
					<StyledPostFooter>
						<LikeButton />
						<ShareButton />
					</StyledPostFooter>
				</StyledPostItem>
			</div>
		</StyledNewsfeedPost>
	);
};
const StyledNewsfeedPost = styled.div``;
const StyledPostItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	border-bottom: 3px solid #e7404a;
	padding: 60px 0;
`;

const StyledPostHeader = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 96px 986px;
	gap: 24px;
`;
const StyledImgBox = styled.div`
	width: 96px;
	height: 96px;
	img {
		width: 100%;
	}
`;
const StyledInfoBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;
const StyledDeleteButton = styled.button`
	cursor: pointer;
`;
const StyledListTitle = styled.div`
	width: 100%;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	word-break: break-all;
	font-size: 48px;
	font-weight: 800;
`;
const StyledPostContent = styled.div`
	margin-bottom: 30px;
	font-size: 18px;
	line-height: 1.5em;
	text-overflow: ellipsis;
	overflow: hidden;
	word-break: break-word;
	display: -webkit-box;
	-webkit-box-orient: vertical;
`;
const StyledPostFooter = styled.div`
	display: flex;
	justify-content: space-between;
`;
export default NewsfeedPost;
