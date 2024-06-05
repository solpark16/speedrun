import { useEffect, useState } from "react";
import { styled } from "styled-components";
import supabase from "../../supabase/supabase";
import ProfileUpdateButton from "./ProfileUpdateButton";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Profile = () => {
	const { userId } = useParams();
	const [profileUrl, setProfileUrl] = useState("");
	const [profileObj, setProfileObj] = useState({});
	async function getImage() {
		// const { data } = supabase.storage.from("avatars").getPublicUrl("default-user-profile.png");
		// profiles에서 이미지 및 description 데이터 가져오기
		const { data } = await supabase.from("profiles").select("*").eq("userId", userId);
		console.log(data);
		setProfileUrl(data[0].image_url);
	}
	useEffect(() => {
		getImage();
	}, []);

	const handleImageChange = async (event) => {
		event.preventDefault();

		//업데이트 시키기
		const { error } = await supabase
			.from("profiles")
			.update({
				description: "ddd",
				updated_at: Date.now()
			})
			.eq("userId", userId)
			.select();
		if (error) {
			console.log(error);
		}

		const fileObj = event.target.files[0];
		setProfileObj(fileObj);
		const { data } = await supabase.storage.from("avatars").upload(`avatar_${Date.now()}.png`, fileObj);
		setProfileUrl(`https://piuvdfomheejtudrutht.supabase.co/storage/v1/object/public/avatars/${data.path}`);
	};

	return (
		<StyledProfileBanner>
			<div className="container">
				<StyledProfileHeader>
					<StyledMyPageTitle>마이페이지</StyledMyPageTitle>
					<ProfileUpdateButton />
				</StyledProfileHeader>
				<StyledProfileBox>
					<StyledProfileImgBox>
						<StyledProfileImg src={profileUrl} />
						<label htmlFor="file">
							<StyledUploadBtn>이미지 업로드</StyledUploadBtn>
						</label>
						<StyledImageChangeInput type="file" name="file" id="file" onChange={handleImageChange} />
					</StyledProfileImgBox>
					<div>
						{/* <StyledProfileId>{currentUser.user_metadata.display_name}</StyledProfileId> */}
						<StyledProfileContext>
							Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam
							neque ultrices.Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit
							aliquam sit nullam neque ultrices.Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
							phasellus mollis si
						</StyledProfileContext>
					</div>
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
