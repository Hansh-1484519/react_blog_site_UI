import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://thumbs.dreamstime.com/b/unemployed-man-scrolling-job-search-website-home-using-laptop-computer-unemployed-man-scrolling-job-search-website-home-203026878.jpg" alt="My Profile" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quae sint sed, voluptatibus dolorem, numquam natus eos in deleniti dignissimos repellat voluptatem error? Pariatur sit, sed voluptates reiciendis hic suscipit.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>

            </div>
        </div>
    )
}
