import "./setting.css"
import Sidebar from "../../components/sidebar/Sidebar"
export default function Setting() {
    return (
        <div className="setting">
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Update Your Account</span>
                    <span className="settingDeleteTitle">Delete Account</span>
                </div>
                <form className="settingForm">
                    <label>Profile Picture</label>
                    <div className="settingPP">
                        <img src="https://thumbs.dreamstime.com/b/unemployed-man-scrolling-job-search-website-home-using-laptop-computer-unemployed-man-scrolling-job-search-website-home-203026878.jpg" alt="Profile" />
                    <label htmlFor="fileInput">
                    <i className="settingPPIcon far fa-user-circle"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Hansh"/>
                    <label>Email</label>
                    <input type="email" placeholder="hansh789@gmail.com"/>
                    <label>Password</label>
                    <input type="password"/>
                    <button className="settingSubmit">Update</button>
                </form>

            </div>
            <Sidebar/>
            
        </div>
    )
}
