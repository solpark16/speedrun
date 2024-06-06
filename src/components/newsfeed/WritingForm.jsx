import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { profileByUserId } from "../../api/profile";
import supabase from "../../supabase/supabase";

function WritingForm() {
	const navigate = useNavigate();
	const year = new Date().getFullYear();
	const month = new Date().getMonth() + 1;
	const day = new Date().getDate();
	const { id: userId, user_metadata } = useSelector((state) => state.user.currentUserInfo);
	const userName = user_metadata.display_name || "anonymous";
	const [profileUrl, setProfileUrl] = useState("");

	async function getProfileImage() {
		const data = await profileByUserId(userId);
		setProfileUrl(data[0].image_url);
	}
	const [formData, setFormData] = useState({
		id: uuidv4(),
		date: `${year}/${month}/${day}`,
		title: "",
		content: "",
		userName: userName,
		userid: userId,
		profileUrl
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			profileUrl,
			[name]: value
		});
	};

	async function addNewsfeed() {
		await supabase.from("newsfeed").insert([formData]).select();
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!formData.title.trim() || !formData.content.trim()) {
			Swal.fire("제목과 내용을 모두 입력해야 합니다.");
			return;
		}
		addNewsfeed();
		navigate("/");
	};

	useEffect(() => {
		getProfileImage();
	}, []);

	return (
		<div>
			<div className="container">
				<StyledForm onSubmit={handleSubmit}>
					<StyledDiv>
						<StyledTitleInput
							type="text"
							name="title"
							placeholder="제목을 입력하세요"
							value={formData.title}
							onChange={handleChange}
						/>
						<div style={{ borderBottom: "5px solid #b4b9c9", padding: "15px" }}></div>
					</StyledDiv>

					<StyledDiv>
						<StyledTextArea
							name="content"
							placeholder="내용을 입력해주세요..."
							value={formData.content}
							onChange={handleChange}
						></StyledTextArea>
					</StyledDiv>
					<StyledButton type="submit">저장하기</StyledButton>
				</StyledForm>
			</div>
		</div>
	);
}

const StyledTitleInput = styled.input`
	font-family: inherit;
	font-weight: 800;
	line-height: 48px;
	font-size: 80px;
	margin-top: 100px;
	margin-bottom: 10px;
	text-align: left;
	padding: 10px;
	box-sizing: border-box;
	border: none;
	background: none;
	color: #ffffff; /* input 글자 색상 */
	width: 100%;

	&::placeholder {
		color: white;
	}
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
`;

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
`;
const StyledTextArea = styled.textarea`
	font-family: inherit;
	padding: 10px;
	border: 5px solid #b4b9c9;
	border-radius: 8px;
	font-size: 30px;
	font-weight: 500;
	background-color: #333; /* 텍스트 영역 배경 색상 */
	color: #d9d9d9; /* 글자 색상 */
	height: 1054px;
	resize: none;
	padding-left: 35px;
`;

const StyledButton = styled.button`
	font-family: inherit;
	padding: 10px;
	border: none;
	background-color: #e7404a; /* 빨간색 버튼 배경 */
	color: white;
	font-size: 22px;
	font-weight: 500;
	cursor: pointer;
	width: 187px;
	margin-top: 25px;
	margin-bottom: 45px;
	padding: 14px 18px 14px 18px;
	gap: 3px;
	border-radius: 6px;
	opacity: 0px;
	margin-left: 0;

	&:hover {
		background-color: #d9534f; /* 호버 시 더 어두운 빨간색 */
	}
`;

export default WritingForm;
