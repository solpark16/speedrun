import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { addNewsfeedLike, getNewsfeedLike, getNewsfeedLikeByUserId, removNewsfeedLike } from "../../api/feed";
import LikeButton from "./LikeButton";
import ShareButton from "./ShareButton";

function NewsfeedFooter({ feedId }) {
	// const newsfeeds = useSelector((state) => state.newsfeed.list);
	// const selectFeed = newsfeeds.find((newsfeed) => newsfeed.id === feedId);
	const isLogIn = useSelector((state) => state.user.isLogIn);
	const currentUser = useSelector((state) => state.user.currentUserInfo);
	const [isLike, setIsLike] = useState(false);
	const [heart, setHeart] = useState(0);

	const getLikeCount = useCallback(async () => {
		const likes = await getNewsfeedLike(feedId);
		const likeCount = likes.length;
		setHeart(likeCount);
	}, [feedId]);

	const getLikeHeart = useCallback(async () => {
		const userlikes = await getNewsfeedLikeByUserId(currentUser.id, feedId);
		console.log({ userlikes });
		if (userlikes) {
			heart > 0 ? setIsLike(true) : setIsLike(false);
		} else {
			setIsLike(false);
		}
	}, []);

	useEffect(() => {
		getLikeCount();
		if (currentUser) {
			getLikeHeart();
		}
	}, []);

	// useEffect(() => {
	// 	getLikeCount();
	// 	if (!currentUser) {
	// 		setIsLike(false);
	// 	} else {
	// 		getLikeHeart();
	// 	}
	// }, [currentUser, getLikeCount, getLikeHeart]);

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
