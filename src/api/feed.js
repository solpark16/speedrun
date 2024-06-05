import supabase from "../supabase/supabase";

export async function getNewsfeedByDate() {
	const { data: newsfeed, error } = await supabase.from("newsfeed").select("*").order("date", { ascending: false });
	if (error) throw error;
	return newsfeed;
}

export async function getNewsfeedByUserId(userId) {
	const { data: newsfeed, error } = await supabase.from("newsfeed").select("*").eq("userId", userId);
	if (error) throw error;
	return newsfeed;
}

export async function getSelectedNewsfeed(feedId) {
	const { data: newsfeed, error } = await supabase.from("newsfeed").select("*").eq("id", feedId);
	if (error) throw error;
	return newsfeed;
}

export async function getNewsfeedLike(feedId) {
	const { data: like, error } = await supabase.from("likedata").select("*").eq("feedid", feedId);
	if (error) throw error;
	return like;
}
export async function getNewsfeedLikeByUserId(feedId, userId) {
	const { data: like, error } = await supabase
		.from("likedata")
		.select("*")
		.eq("feedid", feedId)
		.eq("userid", userId)
		.maybeSingle();
	if (error) throw error;
	return like;
}

export async function addNewsfeedLike({ userId, feedId }) {
	const { error } = await supabase
		.from("likedata")
		.insert([{ userid: userId, feedid: feedId }])
		.select();
	if (error) throw error;
}

export async function removNewsfeedLike({ userId, feedId }) {
	const { error } = await supabase.from("likedata").delete().eq("feedid", feedId).eq("userid", userId);
	if (error) throw error;
}
