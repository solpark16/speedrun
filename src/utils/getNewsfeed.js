import supabase from "../supabase/supabase";

export async function getNewsfeed() {
	const { data: newsfeed, error } = await supabase.from("newsfeed").select("*");
	if (error) throw error;
	return newsfeed;
}
