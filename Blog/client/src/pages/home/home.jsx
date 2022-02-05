import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import Posts from "../../components/posts/post";

import './home.css';

function Home(props) {
    return (
        <>
            <Header />
            <div className="home">
                <Posts />
                <Sidebar />
            </div>
        </>



    );
}

export default Home;