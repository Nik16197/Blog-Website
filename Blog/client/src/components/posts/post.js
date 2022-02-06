import Pos from '../post/pos';
import './post.css';


function Posts({ posts }) {

    return (
        <div className="posts" >
            {posts.map((p) => (
                <Pos post={p} />
            ))}
        </div>
    );
}

export default Posts;