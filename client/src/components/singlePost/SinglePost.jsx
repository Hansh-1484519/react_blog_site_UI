import axios from "axios"
import {useEffect , useState} from "react"
import {useLocation} from "react-router"
import "./singlePost.css"

export default function SinglePost() {

    const location = useLocation();
   // console.log( location.pathname.split('/')[2] );
    const path = location.pathname.split("/")[2];

    // state hook
    const [post , setPost] = useState({});

    useEffect(() => {
        const getpost = async () => {
            const res = await axios.get("/posts/" + path);
            //console.log(res);
            setPost(res.data);
        }
        getpost();
    }, [path]);


    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {
                    post.photo && (
                        <img className="singlePostImg"
                            src= { post.photo}
                            alt="loading" />

                    )
                }
                <h1 className="singlePostTitle">
                    { post.title }
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b> {post.username} </b> </span>
                    <span className="singlePostDate"> {new Date (post.createdAt).toDateString() } </span>
                </div>
                <p className="singlePostDesc">
                    { post.desc }
                </p>
            </div>
        </div>
    )
}
