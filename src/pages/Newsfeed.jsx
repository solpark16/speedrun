import { Link } from "react-router-dom";

function Newfeed() {
	return (
		<main>
			<div>
				<Link to="/feed-read/1">읽기 페이지</Link>
			</div>
			<div>
				<Link to="/feed-write/1">쓰기 페이지</Link>
			</div>
			<div>
				<Link to="/join">회원가입 페이지</Link>
			</div>
			<div>
				<Link to="/login">로그인 페이지</Link>
			</div>
			<div>
				<Link to="/my-page/i">마이페이지</Link>
			</div>
		</main>
	);
}

export default Newfeed;
