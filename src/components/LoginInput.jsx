import React from "react";
import styled from "styled-components";

const Input = styled.input`
	width: 250px;
	padding: 10px;
	border: 1px solid #ccc;
	margin: 10px 0;
	margin-top: 3rem;
`;

function LoginInput({ type, placeholder, value, onChange }) {
	return (
		<>
			<Input type={type} placeholder={placeholder} value={value} onChange={onChange} />
		</>
	);
}

export default LoginInput;
