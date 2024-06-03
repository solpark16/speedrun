import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addNewsfeed } from "../redux/slices/newsfeed.slice";
import { v4 as uuidv4 } from "uuid";
import supabase from "../supabase/supabase";
import { useNavigate } from "react-router-dom";

const TitleInput = styled.input`
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

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
`;

const Input = styled.input`
	font-family: inherit;
	font-size: 30px;
	font-weight: 500;
	line-height: 48px;
	text-align: left;
	padding: 10px;
	margin-bottom: 10px;
	margin-top: 10px;
	border: 4px solid #e7404a;
	border-radius: 18px;
	background-color: #333;
	color: #fff; /* 흰색 글자 색상 */
	padding-left: 35px;
`;

const TextArea = styled.textarea`
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

const Button = styled.button`
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

function WritingForm() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		id: uuidv4(),
		date: new Date().getDate(),
		title: "",
		content: "",
		userId: "userId"
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	};

	async function add() {
		const { data, error } = await supabase.from("newsfeed").insert([formData]).select();
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		add();

		dispatch(addNewsfeed(formData));

		navigate(-1);
	};

	async function getUserId(userId) {
		const {
			data: { user }
		} = await supabase.auth.getUser(userId);
	}

	return (
		<div>
			<div className="container">
				<Form onSubmit={handleSubmit}>
					<StyledDiv>
						<TitleInput
							type="text"
							name="title"
							placeholder="제목을 입력하세요"
							value={formData.title}
							onChange={handleChange}
						/>
						<div style={{ borderBottom: "5px solid #b4b9c9", padding: "15px" }}></div>
					</StyledDiv>
					{/* <StyledDiv>
						<Input
							type="text"
							id="tags"
							name="tags"
							placeholder="태그를 입력해주세요..."
							value={formData.tags}
							onChange={handleChange}
						/>
					</StyledDiv> */}
					<StyledDiv>
						<TextArea
							name="content"
							placeholder="내용을 입력해주세요..."
							value={formData.content}
							onChange={handleChange}
						></TextArea>
					</StyledDiv>
					<Button type="submit">저장하기</Button>
				</Form>
			</div>
		</div>
	);
}

export default WritingForm;
