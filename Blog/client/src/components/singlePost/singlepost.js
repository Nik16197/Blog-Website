import React, { useEffect, useState } from 'react';
import './singlepost.css';
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function Singlepost() {

    const [singlePost, setSinglepost] = useState({});
    const loc = useLocation();
    const id = loc.pathname.split("/")[2];

    console.log("id   " + id)
    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + id)
            setSinglepost(res.data);

            // console.log(res)
        }

        getPost();
    }, [id])

    const handleDelete = async (e) => {
        try {
            await axios.delete("/posts/" + id)
        } catch (err) {

        }

    }
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {
                    singlePost.photo && (
                        <img
                            className="singlePostImg"
                            src={singlePost.photo}
                            alt=""
                        />
                    )
                }

                <h1 className="singlePostTitle">
                    {singlePost.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span>
                        Author:

                        <Link to={`/?user=${singlePost.username}`} className="link">
                            <b className="singlePostAuthor">
                                {singlePost.username}
                            </b>
                        </Link>

                    </span>
                    <span>{new Date(singlePost.createdAt).toDateString()}</span>
                </div>
                <p className="singlePostDesc">
                    {singlePost.desc}

                </p>
            </div>
        </div>
    );
}

export default Singlepost;