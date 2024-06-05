import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getLoginUser } from "../../api/auth";
import { logInToggle, setCurrentUser } from "../../redux/slices/user.slice";
import LoginButton from "./LoginButton";

const StyledFormBox = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const StyledInputForm = styled.input`
	font-family: inherit;
	width: 675px;
	height: 68px;
	margin-bottom: 40px;
	border-radius: 11px;
	border: 1px solid #b4b9c9;
	color: #343434;
	font-size: 20px;
	padding-left: 70px;
	background-image: url("/imgs/icon-e-mail.png");
	background-repeat: no-repeat;
	background-size: 27px 27px;
	background-position: 27px center;
	box-sizing: border-box;
`;

const StyledPasswordInput = styled.input`
	font-family: inherit;
	width: 675px;
	height: 68px;
	margin-bottom: 40px;
	border-radius: 11px;
	border: 1px solid #b4b9c9;
	color: #343434;
	font-size: 20px;
	padding-left: 70px;

	background-image: url("/imgs/icon-lock.png");
	background-repeat: no-repeat;
	background-size: 27px 27px;
	background-position: 27px center;
	box-sizing: border-box;
`;

function LoginInput() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [user, setUser] = useState(null);

	const handleLogin = async (e) => {
		e.preventDefault();

		if (!email || !password) {
			alert("이메일 또는 비밀번호를 입력하세요");
		}

		const loginInfo = {
			email,
			password
		};
		const userData = await getLoginUser(loginInfo);
		setUser(userData.user);

		if (userData) {
			dispatch(logInToggle(true));
			dispatch(setCurrentUser(userData.user));
			navigate(-1);
		} else {
			alert("로그인에 실패했습니다.");
		}
	};

	console.log(user);

	return (
		<>
			{!user ? (
				<StyledFormBox onSubmit={handleLogin}>
					<StyledInputForm
						type="email"
						placeholder="이메일을 입력해주세요"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<StyledPasswordInput
						type="password"
						placeholder="비밀번호를 입력해주세요"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<LoginButton onClick={handleLogin} />
				</StyledFormBox>
			) : (
				<div>이미 로그인 되었습니다.</div>
			)}
		</>
	);
}

export default LoginInput;
