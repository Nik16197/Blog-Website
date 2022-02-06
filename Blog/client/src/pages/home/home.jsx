import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import Posts from "../../components/posts/post";

import './home.css';
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts");
            // console.log(res.data);
            setPosts(res.data)
        };
        fetchPosts();
    }, [])


    return (
        <>
            <Header />
            <div className="home">
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </>



    );
}

export default Home;