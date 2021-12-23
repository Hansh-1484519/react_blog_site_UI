import "./post.css"
import { Link } from "react-router-dom"

const Post = ({ post }) => {
    return (
        <div className="post">
            {post.photo && (
                <img
                    className="postImg"
                    src={post.photo}
                    alt="post loading"
                />

            )}

            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((cat) => {
                        <span className="postCat"> {cat.name} </span>
                    })}

                </div>
                <Link to={`/post/${post._id}`} className="link">
                    <span className="postTitle">{post.title}</span>

                </Link>

                <hr />
                <span className="postDate"> {new Date(post.createdAt).toDateString()} </span>

            </div>
            <p className="postDisc">
                {post.desc}
            </p>


        </div>
    );
}

export default Post;