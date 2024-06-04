import supabase from "../supabase/supabase";

export async function getNewsfeed() {
	const { data: newsfeed, error } = await supabase.from("newsfeed").select("*");
	if (error) throw error;
	return newsfeed;
}

export async function updateNewsfeedLike({ like, id }) {
	console.log(id);
	const { error } = await supabase.from("newsfeed").update({ like: like }).eq("id", id);
	if (error) throw error;
}
