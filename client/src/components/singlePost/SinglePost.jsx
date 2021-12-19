import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg"
                    src="https://miro.medium.com/max/1200/1*xMuIOwjliGUPjkzukeWKfw.jpeg" alt="loading" />
                <h1 className="singlePostTitle">
                    Beauty of nature is on it's peek
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Hansh Raj</b> </span>
                    <span className="singlePostDate"> 1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quia aspernatur labore blanditiis nostrum nobis sunt, illum quod esse officia non fugit accusamus voluptates facilis beatae? Illum fugit eligendi sit?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quia aspernatur labore blanditiis nostrum nobis sunt, illum quod esse officia non fugit accusamus voluptates facilis beatae? Illum fugit eligendi sit?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quia aspernatur labore blanditiis nostrum nobis sunt, illum quod esse officia non fugit accusamus voluptates facilis beatae? Illum fugit eligendi sit?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quia aspernatur labore blanditiis nostrum nobis sunt, illum quod esse officia non fugit accusamus voluptates facilis beatae? Illum fugit eligendi sit?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quia aspernatur labore blanditiis nostrum nobis sunt, illum quod esse officia non fugit accusamus voluptates facilis beatae? Illum fugit eligendi sit?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quia aspernatur labore blanditiis nostrum nobis sunt, illum quod esse officia non fugit accusamus voluptates facilis beatae? Illum fugit eligendi sit?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quia aspernatur labore blanditiis nostrum nobis sunt, illum quod esse officia non fugit accusamus voluptates facilis beatae? Illum fugit eligendi sit?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quia aspernatur labore blanditiis nostrum nobis sunt, illum quod esse officia non fugit accusamus voluptates facilis beatae? Illum fugit eligendi sit?
                </p>
            </div>
        </div>
    )
}
