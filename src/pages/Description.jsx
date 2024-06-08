import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginJoinHeader from "../components/join_login/LoginJoinHeader";
import { logInToggle } from "../redux/slices/user.slice";
import supabase from "../supabase/supabase";
function Description() {
	const dispatch = useDispatch();
	const currentUser = useSelector((state) => state.user.currentUserInfo);
	const [image, setImage] = useState(null);
	const [imageUrl, setImageUrl] = useState("");
	const [description, setDescription] = useState("");
	const fileInputRef = useRef(null);
	const navigate = useNavigate();
	async function getDefaultImage() {
		const { data } = supabase.storage.from("avatars").getPublicUrl("default-user-profile.png");
		setImageUrl(data.publicUrl);
	}
	useEffect(() => {
		getDefaultImage();
	}, []);
	const handleImageChange = async (event) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImage(reader.result);
			};
			reader.readAsDataURL(file);
			const { data } = await supabase.storage.from("avatars").upload(`avatar_${Date.now()}.png`, file);
			setImageUrl(`https://nwgklfpvdgbiihmimalr.supabase.co/storage/v1/object/public/avatars/${data.path}`);
		}
	};

	const handleButtonClick = () => {
		fileInputRef.current.click();
	};

	const handleSubmit = async () => {
		await supabase.from("profiles").insert({
			image_url: imageUrl,
			description,
			userid: currentUser.id
		});
		dispatch(logInToggle(true));
		navigate("/");
	};

	return (
		<>
			<LoginJoinHeader />
			<div className="container">
				<StyledDescriptionBg>
					<StyledDesciptionText>본인을 소개해주세요!</StyledDesciptionText>
					<UploadButton
						onClick={handleButtonClick}
						style={{
							backgroundImage: image ? `url(${image})` : "#b4b9c9",
							backgroundSize: "cover"
						}}
					>
						사진을 업로드 해주세요
					</UploadButton>
					<input
						type="file"
						accept="image/*"
						ref={fileInputRef}
						style={{ display: "none" }}
						onChange={handleImageChange}
					/>

					<TextArea
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						placeholder="당신이 좋아하는 것에 대해 적어보세요."
					/>
					<SubmitButton type="submit" onClick={handleSubmit}>
						시작하기
					</SubmitButton>
				</StyledDescriptionBg>
			</div>
		</>
	);
}
const StyledDesciptionText = styled.h2`
	color: #2c2b2f;

	font-size: 48px;
	font-weight: 800;
	margin-bottom: 43px;
`;

const StyledDescriptionBg = styled.div`
	margin-top: 115px;
	margin-bottom: 115px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 12px;
	background-color: #ffffff;
	box-shadow: 0px 13px 5.5px rgba(0, 0, 0, 0.3);
	width: 1122px;
	height: 965px;
`;

const UploadButton = styled.button`
	width: 371px;
	height: 371px;
	border-radius: 50%;
	color: #ffffff;
	font-size: 24px;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 43px;
	background-color: #b4b9c9;
`;

const TextArea = styled.textarea`
	width: 80%;
	height: 200px;
	border: 1px solid #ccc;
	border-radius: 12px;
	padding: 10px;
	font-size: 16px;
	resize: none;
	margin-bottom: 43px;
`;
const SubmitButton = styled.button`
	width: 674px;
	height: 67px;
	background-color: #e7404a;
	color: white;
	border: none;
	border-radius: 11px;
	font-size: 30px;
	font-weight: 600;
	cursor: pointer;

	&:hover {
		background-color: #d6393f;
	}
`;

export default Description;
