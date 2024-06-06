import supabase from "../supabase/supabase";

export async function getLoginUser(loginInfo) {
	const { data, error } = await supabase.auth.signInWithPassword(loginInfo);
	if (error) {
		alert("로그인에 실패했습니다.");
		throw error;
	}
	return data;
}
export async function signOut() {
	const { error } = await supabase.auth.signOut();
	if (error) {
		alert("로그아웃에 실패했습니다.");
		throw error;
	}
}
export async function signUp(newUserInfo) {
	const { error } = await supabase.auth.signUp(newUserInfo);
	return error;
}
