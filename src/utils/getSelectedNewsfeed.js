import supabase from "../supabase/supabase";

export async function getSelectedNewsfeed(feedId) {
	const { data: newsfeed, error } = await supabase.from("newsfeed").select("*").eq("id", feedId);
	if (error) throw error;
	return newsfeed;
}
