import { styled } from "styled-components";
import ProfileUpdateButton from "./ProfileUpdateButton";

const Profile = () => {
	return (
		<StyledProfileBanner>
			<div className="container">
				<StyledProfileHeader>
					<StyledMyPageTitle>마이페이지</StyledMyPageTitle>
					<ProfileUpdateButton />
				</StyledProfileHeader>
				<StyledProfileBox>
					{/* 프로필 이미지. img 태그로 바꿀 가능성 염두 */}
					<StyledProfileImg></StyledProfileImg>
					{/* 아이디. 디자인 내 더미 텍스트 필요성 확인 필요 */}
					<div>
						<StyledProfileId>아이디</StyledProfileId>
						<StyledProfileContext>
							Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam
							neque ultrices.Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit
							aliquam sit nullam neque ultrices.Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
							phasellus mollis si
						</StyledProfileContext>
					</div>
				</StyledProfileBox>
			</div>
		</StyledProfileBanner>
	);
};

export default Profile;

const StyledProfileBanner = styled.div`
	background-color: #e7404a;
	min-height: 757px;
	padding: 73px;
	box-sizing: border-box;
`;
const StyledProfileHeader = styled.div`
	display: flex;
	justify-content: space-between;
`;
const StyledMyPageTitle = styled.h2`
	font-size: 48px;
	font-weight: 800;
	line-height: 1;
`;
const StyledProfileBox = styled.div`
	display: flex;
	margin-top: 91px;
	gap: 59px;
`;
const StyledProfileImg = styled.div`
	width: 371px;
	height: 371px;
	background-color: #d9d9d9;
	border-radius: 50%;
	flex: 0 0 auto;
`;
const StyledProfileId = styled.p`
	font-size: 48px;
	font-weight: 800;
	line-height: 1;
	margin-bottom: 37px;
`;
const StyledProfileContext = styled.p`
	font-size: 28px;
	line-height: 48px;
	font-weight: 500;
`;
