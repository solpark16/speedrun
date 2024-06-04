import React, { useEffect, useState } from "react";
import styled from "styled-components";
import supabase from "../supabase/supabase";
import { useNavigate, useParams } from "react-router-dom";

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

// const StyledInput = styled.input`
// 	font-family: inherit;
// 	font-size: 30px;
// 	font-weight: 500;
// 	line-height: 48px;
// 	text-align: left;
// 	padding: 10px;
// 	margin-bottom: 10px;
// 	margin-top: 10px;
// 	border: 4px solid #e7404a;
// 	border-radius: 18px;
// 	background-color: #333;
// 	color: #fff; /* 흰색 글자 색상 */
// 	padding-left: 35px;
// `;

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
	padding: 14px 18px 14px 18px;
	gap: 3px;
	border-radius: 6px;
	opacity: 0px;
	margin-left: 0;

	&:hover {
		background-color: #d9534f; /* 호버 시 더 어두운 빨간색 */
	}
`;

function WritingEditForm() {
	const { feedId } = useParams();
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		title: "",
		content: ""
	});

	async function getSelectedNewsFeed() {
		const { data } = await supabase.from("newsfeed").select("*").eq("id", feedId);
		const { title, content } = data[0];
		setFormData({
			title,
			content
		});
	}

	useEffect(() => {
		getSelectedNewsFeed();
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await supabase
			.from("newsfeed")
			.update({
				title: formData.title,
				content: formData.content
			})
			.eq("id", feedId);
		navigate(`/feed-read/${feedId}`);
	};

	return (
		<div>
			<div className="container">
				<StyledForm onSubmit={handleSubmit}>
					<StyledDiv>
						<StyledTitleInput
							type="text"
							id="title"
							name="title"
							placeholder="제목을 입력하세요"
							value={formData.title}
							onChange={handleChange}
						/>
						<div style={{ borderBottom: "5px solid #b4b9c9", padding: "15px" }}></div>
					</StyledDiv>
					{/* <StyledDiv>
						<StyledInput
							type="text"
							id="tags"
							name="tags"
							placeholder="태그를 입력해주세요..."
							value={formData.tags}
							onChange={handleChange}
						/>
					</StyledDiv> */}
					<StyledDiv>
						<StyledTextArea
							id="content"
							name="content"
							placeholder="내용을 입력해주세요..."
							value={formData.content}
							onChange={handleChange}
						></StyledTextArea>
					</StyledDiv>
					<StyledButton type="submit">수정하기</StyledButton>
				</StyledForm>
			</div>
		</div>
	);
}

export default WritingEditForm;
