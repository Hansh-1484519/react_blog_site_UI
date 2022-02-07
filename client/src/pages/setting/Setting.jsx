import "./setting.css"
import Sidebar from "../../components/sidebar/Sidebar"
import { Context } from "../../context/Context"
import { useContext, useState } from "react"
import axios from "axios";
export default function Setting() {

    const [file , setfile] = useState(null);
    const [username , setUsername] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const {user} = useContext(Context);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedUser = {
            userId : user._id,
            username,email,password
        }
        if( file ){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append( "name" , filename);
            data.append( "file" , file);
            updatedUser.profilePic = filename;
            try{
                await axios.post("/upload" , data)
            } catch ( err ) {
                console.log(err);
            }
        }
        try{
            await axios.put("/users"+user._id, updatedUser);
        } catch(err){
            console.log(err);
        }}
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
                        <img src={user.profilePic} alt="Profile" />
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
                    <button className="settingSubmit" onClick={handleSubmit}>Update</button>
                </form>

            </div>
            <Sidebar/>
            
        </div>
    )
}
