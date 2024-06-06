import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { getSelectedNewsfeed } from "../../api/feed";
import supabase from "../../supabase/supabase";
import NewsfeedFooter from "./NewsfeedFooter";

const NewsfeedPost = () => {
	const currentUser = useSelector((state) => state.user.currentUserInfo);
	const navigate = useNavigate();
	const { feedId } = useParams();
	const isLogIn = useSelector((state) => state.user.isLogIn);
	const [post, setPost] = useState({});

	async function getPost() {
		const data = await getSelectedNewsfeed(feedId);
		setPost(data[0]);
	}

	useEffect(() => {
		getPost();
	}, []);

	const { id, title, userid, userName, date, content, profileUrl } = post;
	// 게시물 삭제 핸들러
	const deletePostHandler = async () => {
		const confirmDelete = confirm("정말 삭제하시겠습니까?");
		if (confirmDelete) {
			await supabase.from("newsfeed").delete().eq("id", feedId);
			navigate("/");
		}
	};

	return (
		<StyledNewsfeedPost>
			<div className="container">
				<StyledPostItem>
					<StyledPostHeader>
						<StyledPostHeaderTop>
							<StyledImgBox>
								<img src={profileUrl} alt="유저 아이디" />
							</StyledImgBox>
							<StyledInfoBox>
								<StyledListTitle>{title}</StyledListTitle>
								<div>
									<span>{userName}</span> | <span>{date}</span>
								</div>
							</StyledInfoBox>
						</StyledPostHeaderTop>
						<StyledPostHeaderBottom>
							{isLogIn && currentUser.id === userid ? (
								<>
									<Link to={`/feed-edit/${id}`}>
										<StyledButton>수정하기</StyledButton>
									</Link>
									<StyledButton onClick={() => deletePostHandler()}>삭제하기</StyledButton>
								</>
							) : (
								<></>
							)}
						</StyledPostHeaderBottom>
					</StyledPostHeader>

					<StyledPostContent>{content}</StyledPostContent>
					<NewsfeedFooter feedId={feedId} />
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
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 24px;
`;
const StyledPostHeaderTop = styled.div`
	display: flex;
	gap: 24px;
`;
const StyledPostHeaderBottom = styled.div`
	display: flex;
	gap: 24px;
`;
const StyledImgBox = styled.div`
	width: 96px;
	height: 96px;
	overflow: hidden;
	border-radius: 50%;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
const StyledInfoBox = styled.div`
	/* width: 100%; */
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;
const StyledButton = styled.button`
	width: 145px;
	height: 52px;
	cursor: pointer;
	background-color: #e7404a;
	color: #fff;
	font-size: 20px;
	border-radius: 9px;
	border: none;
	font: inherit;
`;
const StyledListTitle = styled.div`
	/* width: 100%; */
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

export default NewsfeedPost;
