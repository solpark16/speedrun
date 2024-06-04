import { Link } from "react-router-dom";
import ListItem from "./ListItem";
import NewsfeedPostFooter from "./NewsfeedFooter";
function NewsfeedItem({ list }) {
	return (
		<li key={list.id}>
			<Link to={`/feed-read/${list.id}`}>
				<ListItem title={list.title} content={list.content} date={list.date} userId={list.userId} />
			</Link>
			<NewsfeedPostFooter feedId={list.id} />
		</li>
	);
}

export default NewsfeedItem;
