import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { profileByUserId, uploadProfile, uploadProfileImage } from "../../api/profile";

const Profile = () => {
	const currentUser = useSelector((state) => state.user.currentUserInfo);
	const { userId } = useParams();
	const [profileUrl, setProfileUrl] = useState("");
	const [description, setDescription] = useState("");
	const getImage = useCallback(async () => {
		const data = await profileByUserId(userId);
		setProfileUrl(data[0].image_url);
		setDescription(data[0].description);
	}, [userId]);

	useEffect(() => {
		getImage();
	}, [getImage]);

	const handleImageChange = async (event) => {
		event.preventDefault();
		const fileObj = event.target.files[0];
		const data = await uploadProfileImage(fileObj);
		setProfileUrl(`https://nwgklfpvdgbiihmimalr.supabase.co/storage/v1/object/public/avatars/${data.path}`);
		await uploadProfile(data, userId);
	};

	return (
		<StyledProfileBanner>
			<div className="container">
				<StyledProfileHeader>
					<StyledMyPageTitle>마이페이지</StyledMyPageTitle>
				</StyledProfileHeader>
				<StyledProfileBox>
					<StyledProfileImgBox>
						<StyledProfileImg src={profileUrl} />
						<label htmlFor="file">
							<StyledUploadBtn>이미지 업로드</StyledUploadBtn>
						</label>
						<StyledImageChangeInput type="file" name="file" id="file" onChange={handleImageChange} />
					</StyledProfileImgBox>
					<StyledProfileTextBox>
						<StyledProfileId>{currentUser.user_metadata?.display_name}</StyledProfileId>
						<StyledProfileContext>{description}</StyledProfileContext>
					</StyledProfileTextBox>
				</StyledProfileBox>
			</div>
		</StyledProfileBanner>
	);
};

export default Profile;

const StyledProfileBanner = styled.div`
	background-color: #e7404a;
	min-height: 757px;
	padding: 73px;
	box-sizing: border-box;
`;
const StyledProfileHeader = styled.div`
	display: flex;
	justify-content: space-between;
`;
const StyledMyPageTitle = styled.h2`
	font-size: 48px;
	font-weight: 800;
	line-height: 1;
`;
const StyledProfileBox = styled.div`
	display: flex;
	margin-top: 91px;
	gap: 59px;
`;
const StyledUploadBtn = styled.div`
	margin-top: 20px;
	cursor: pointer;
	border: none;
	text-align: center;
	width: auto;
	display: inline-block;
	background-color: #2c2b2f;
	padding: 17px 35px;
	color: #fff;
	font-size: 20px;
	border-radius: 9px;
`;
const StyledProfileImgBox = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
`;
const StyledProfileImg = styled.img`
	width: 371px;
	height: 371px;
	border-radius: 50%;
	flex: 0 0 auto;
	object-fit: cover;
`;
const StyledImageChangeInput = styled.input`
	display: none;
`;
const StyledProfileTextBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const StyledProfileId = styled.p`
	font-size: 48px;
	font-weight: 800;
	line-height: 1;
	margin-bottom: 37px;
`;
const StyledProfileContext = styled.p`
	font-size: 28px;
	line-height: 48px;
	font-weight: 500;
`;
