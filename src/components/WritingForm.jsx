import React, { useState } from "react";

const WritingForm = () => {
	const [formData, setFormData] = useState({
		title: "",
		author: "",
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
			<h1>글쓰기</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="title">제목:</label>
					<input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
				</div>
				<div>
					<label htmlFor="author">작성자:</label>
					<input type="text" id="author" name="author" value={formData.author} onChange={handleChange} />
				</div>
				<div>
					<label htmlFor="body">내용:</label>
					<textarea id="body" name="body" value={formData.body} onChange={handleChange}></textarea>
				</div>
				<button type="submit">저장</button>
			</form>
		</div>
	);
};

export default WritingForm;
