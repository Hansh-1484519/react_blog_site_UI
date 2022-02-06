import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlePost.css";

export default function SinglePost() {
  const location = useLocation();
  // console.log( location.pathname.split('/')[2] );
  const path = location.pathname.split("/")[2];

  // state hook
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  //update post
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updatemode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getpost = async () => {
      const res = await axios.get("/posts/" + path);
      //console.log(res);
      setPost(res.data);
    };
    getpost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img className="singlePostImg" src={PF + post.photo} alt="loading" />
        )}
        {    updatemode ? <input type="text" value={post.title} class="singlePostTitleInput"/> : (
                <h1 className="singlePostTitle">
          {post.title}
          {post.username === user?.username && (
              <div className="singlePostEdit">
              <i 
                className="singlePostIcon far fa-edit"
                onClick={()=> setUpdateMode(true)}
                ></i>
              <i
                className="singlePostIcon far fa-trash-alt"
                onClick={handleDelete}
                ></i>
            </div>
          )}
        </h1>
          )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username} </b>
            </Link>
          </span>
          <span className="singlePostDate">
            {" "}
            {new Date(post.createdAt).toDateString()}{" "}
          </span>
        </div>
        { updatemode ? <input type="text" value={post.desc} /> : (
            <p className="singlePostDesc">{post.desc}</p>
        )}
      </div>
    </div>
  );
}
