import supabase from "../supabase/supabase";

export async function getNewsfeed() {
	const { data: newsfeed, error } = await supabase.from("newsfeed").select("*").order("date", { ascending: false });
	if (error) throw error;
	return newsfeed;
}

export async function getSelectedNewsfeed(feedId) {
	const { data: newsfeed, error } = await supabase.from("newsfeed").select("*").eq("id", feedId);
	if (error) throw error;
	return newsfeed;
}

export async function getNewsfeedLike(id) {
	const { data: like, error } = await supabase.from("newsfeed").select("like").eq("id", id);
	if (error) throw error;
	return like;
}

export async function updateNewsfeedLike({ like, id }) {
	const { error } = await supabase.from("newsfeed").update({ like: like }).eq("id", id);
	if (error) throw error;
}
