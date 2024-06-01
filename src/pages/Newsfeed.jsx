import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import NewGames from "../components/NewGames";
import NewsfeedList from "../components/NewsfeedList";
import WriteButton from "../components/WriteButton";

function Newfeed() {
	return (
		<>
			<Header />
			<MainBanner />
			<NewGames />
			<NewsfeedList />
			<WriteButton />
		</>
	);
}

export default Newfeed;
