import "./post.css"

const Post = () => {
    return (
        <div className="post">

            <img
                className="postImg"
                src="https://media.istockphoto.com/photos/social-media-and-digital-online-concept-woman-using-smartphone-picture-id1288271580?b=1&k=20&m=1288271580&s=170667a&w=0&h=T5tNQeD6dQ7o-PmpZR-ymGDSHvpyj-AEyeRuSNEWE8Q=" alt="post loading" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Life without music is boring.</span>
                <hr />
                <span className="postDate"> 1 hour ago </span>

            </div>
            <p  className="postDisc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam magni dolore laboriosam? Architecto exercitationem ullam vel, doloribus eum est a possimus delectus doloremque. Inventore dolores asperiores eveniet. Mollitia, quidem dicta!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam magni dolore laboriosam? Architecto exercitationem ullam vel, doloribus eum est a possimus delectus doloremque. Inventore dolores asperiores eveniet. Mollitia, quidem dicta!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam magni dolore laboriosam? Architecto exercitationem ullam vel, doloribus eum est a possimus delectus doloremque. Inventore dolores asperiores eveniet. Mollitia, quidem dicta!
            </p>


        </div>
    );
}

export default Post;