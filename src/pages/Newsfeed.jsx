import { Link } from "react-router-dom";

function Newfeed() {
	return (
		<main>
			<h1>스피드런 화이팅!!</h1>
			<div>
				<Link to="/feed-read/1">피드 읽기 페이지(솔님)</Link>
			</div>
			<div>
				<Link to="/feed-write/1">피드 쓰기 페이지(유상님)</Link>
			</div>
			<div>
				<Link to="/feed-edit/1">피드 수정 페이지(유상님)</Link>
			</div>
			<div>
				<Link to="/join">회원가입 페이지(세영님)</Link>
			</div>
			<div>
				<Link to="/login">로그인 페이지(재연님)</Link>
			</div>
			<div>
				<Link to="/my-page/1">마이페이지(솔님)</Link>
			</div>
		</main>
	);
}

export default Newfeed;
