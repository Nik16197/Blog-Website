import React from 'react';
import { Link } from "react-router-dom";
import "./pos.css"

function Pos({ post }) {



    return (
        <div className='pos'>
            {
                post.photo && (
                    <img className='posImage'
                        src={post.photo}
                        alt="" />
                )
            }

            <div className='posInfo'>
                <div className='posCats'>
                    {
                        post.categories.map((c) => (
                            <span className='posCat'>{c}</span>
                        ))
                    }

                </div>

                <Link to={`/post/${post._id}`} className="link">
                    <span className="posTitle">  {post.title}</span>
                </Link>

                <hr />

                <span className="posDate">{new Date(post.createdAt).toDateString()}</span>

                <p className="posDesc">
                    {post.desc}
                </p>
            </div>
        </div>
    );
}

export default Pos;