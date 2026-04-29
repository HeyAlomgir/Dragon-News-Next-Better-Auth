import { redirect } from "next/navigation";

const default_catgory_id ="01";

const Home = () => {
 redirect(`/catgory/${default_catgory_id}`)
};

export default Home;