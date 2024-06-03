import React, { useState } from "react";
import styled from "styled-components";

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
	/* border-bottom: 5px solid #b4b9c9; 구분선 추가 */

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

const TextArea = styled.textarea`
	padding: 10px;
	border: 5px solid #b4b9c9;
	border-radius: 8px;
	font-size: 30px;
	background-color: #333; /* 텍스트 영역 배경 색상 */
	color: #d9d9d9; /* 글자 색상 */
	height: 1054px;
	resize: none;
	padding-left: 35px;
`;

const Button = styled.button`
	padding: 10px;
	border: none;

	background-color: #e7404a; /* 빨간색 버튼 배경 */
	color: white;
	font-size: 22px;
	cursor: pointer;
	width: 187px; /* 고정된 버튼 너비 */
	margin-top: 25px;
	width: Fixed (81px) px;
	height: Fixed (16px) px;
	padding: 14px 18px 14px 18px;
	gap: 3px;
	border-radius: 6px;
	opacity: 0px;

	margin-left: 0; /* 왼쪽 정렬 */

	&:hover {
		background-color: #d9534f; /* 호버 시 더 어두운 빨간색 */
	}
`;

function WritingEditForm() {
	const [formData, setFormData] = useState({
		title: "",
		tags: "",
		body: ""
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// 폼 제출 처리
		console.log("Form Data:", formData);
	};

	return (
		<div>
			<div className="container">
				<Form onSubmit={handleSubmit}>
					<StyledDiv>
						<TitleInput
							type="text"
							id="title"
							name="title"
							placeholder="제목을 입력하세요"
							value={formData.title}
							onChange={handleChange}
						/>
						<div style={{ borderBottom: "5px solid #b4b9c9", padding: "15px" }}></div>
					</StyledDiv>
					<StyledDiv>
						<TextArea
							id="body"
							name="body"
							placeholder="내용을 입력해주세요..."
							value={formData.body}
							onChange={handleChange}
						></TextArea>
					</StyledDiv>
					<Button type="submit">수정하기</Button>
				</Form>
			</div>
		</div>
	);
}

export default WritingEditForm;
