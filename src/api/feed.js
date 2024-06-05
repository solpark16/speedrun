import supabase from "../supabase/supabase";

export async function getNewsfeed() {
	const { data: newsfeed, error } = await supabase.from("newsfeed").select("*").order("date", { ascending: true });
	if (error) throw error;
	return newsfeed;
}

export async function getSelectedNewsfeed(feedId) {
	const { data: newsfeed, error } = await supabase.from("newsfeed").select("*").eq("id", feedId);
	if (error) throw error;
	return newsfeed;
}

export async function getNewsfeedLike(feedId) {
	const { data: like, error } = await supabase.from("like").select("*").eq("feedId", feedId);
	if (error) throw error;
	return like;
}
export async function getNewsfeedLikeByUserId(feedId, userId) {
	const { data: like, error } = await supabase
		.from("like")
		.select("*")
		.eq("feedId", feedId)
		.eq("userId", userId)
		.maybeSingle();
	if (error) throw error;
	return like;
}

export async function addNewsfeedLike({ userId, feedId }) {
	const { error } = await supabase.from("like").insert([{ userId, feedId }]).select();
	if (error) throw error;
}

export async function removNewsfeedLike({ userId, feedId }) {
	const { error } = await supabase.from("like").delete().eq("feedId", feedId).eq("userId", userId);
	if (error) throw error;
}
