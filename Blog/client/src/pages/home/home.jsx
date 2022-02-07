import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import Posts from "../../components/posts/post";

import './home.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Home() {

    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search);
            // console.log(res.data);
            setPosts(res.data)
        };
        fetchPosts();
    }, [search])


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