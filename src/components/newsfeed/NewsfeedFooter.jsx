import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { addNewsfeedLike, getNewsfeedLike, getNewsfeedLikeByUserId, removNewsfeedLike } from "../../api/feed";
import LikeButton from "./LikeButton";
import ShareButton from "./ShareButton";

function NewsfeedFooter({ feedId }) {
	const newsfeeds = useSelector((state) => state.newsfeed.list);
	const selectFeed = newsfeeds.find((newsfeed) => newsfeed.id === feedId);
	const [isLike, setIsLike] = useState(false);
	const isLogIn = useSelector((state) => state.user.isLogIn);
	const currentUser = useSelector((state) => state.user.currentUserInfo);
	const [heart, setHeart] = useState(0);

	const getLikeCount = useCallback(async () => {
		const likes = await getNewsfeedLike(selectFeed?.id);
		const likeCount = likes.length;
		setHeart(likeCount);
	}, [selectFeed?.id]);

	const getLikeHeart = useCallback(async () => {
		const likes = await getNewsfeedLikeByUserId(currentUser.id, selectFeed?.id);

		if (isLogIn && likes) {
			heart > 0 ? setIsLike(true) : setIsLike(false);
		} else {
			setIsLike(false);
		}
	}, [currentUser.id, heart, isLogIn, selectFeed?.id]);

	useEffect(() => {
		getLikeCount();
		if (!currentUser) {
			setIsLike(false);
		} else {
			getLikeHeart();
		}
	}, [selectFeed, isLogIn, currentUser, getLikeHeart, getLikeCount, heart]);

	const handleLike = async () => {
		if (isLogIn) {
			const newLike = {
				userId: currentUser.id,
				feedId: feedId
			};
			setIsLike((prev) => !prev);
			setHeart((prev) => (isLike ? prev - 1 : prev + 1));
			isLike ? await removNewsfeedLike(newLike) : await addNewsfeedLike(newLike);
		} else {
			alert("로그인이 필요합니다.");
		}
	};

	const handleShare = () => {
		window.prompt("복사하여 사용하세요.", `http://speedrun-virid.vercel.app/feed-read/${selectFeed.id}`);
	};
	return (
		<StyledPostFooter>
			<LikeButton isLike={isLike} handleLike={handleLike} heart={heart} />
			<ShareButton handleShare={handleShare} />
		</StyledPostFooter>
	);
}
const StyledPostFooter = styled.div`
	display: flex;
	justify-content: space-between;
`;
export default NewsfeedFooter;
