import supabase from "../supabase/supabase";
export async function profileByUserId(userId) {
	const { data } = await supabase.from("profiles").select("*").eq("userid", userId);
	return data;
}

export async function uploadProfileImage(fileObj) {
	const { data, error } = await supabase.storage.from("avatars").upload(`avatar_${Date.now()}.png`, fileObj);
	if (error) alert("업로드에 실패했습니다.");
	return data;
}

export async function uploadProfile(data, userId) {
	const { error } = await supabase
		.from("profiles")
		.update({
			image_url: `https://nwgklfpvdgbiihmimalr.supabase.co/storage/v1/object/public/avatars/${data.path}`
		})
		.eq("userid", userId)
		.select();
	if (error) alert("업로드에 실패했습니다.");
}
