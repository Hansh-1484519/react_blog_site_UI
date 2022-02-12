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
    const [success, setSuccess] = useState(false);
    const {user} = useContext(Context);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedUser = {
            userid : user._id,
            username,email,password
        }
        if( file ){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append( "name" , filename);
            data.append( "file" , file);
            updatedUser.profilePic = filename;
            try{
                await axios.post("/upload" , data);
            } catch ( err ) {
                console.log(err);
            }
        }
        try{
            console.log("requested");
            await axios.put("/users/"+ user._id, updatedUser);
            setSuccess(true);
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
                <form className="settingForm" onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <div className="settingPP">
                       
                        <img src = { file ? URL.createObjectURL(file)  : user.profilePic} alt="pic"/>
                    <label htmlFor="fileInput">
                    <i className="settingPPIcon far fa-user-circle"></i>
                    </label>
                    <input 
                        type="file" 
                        id="fileInput" 
                        style={{display:"none"}}  
                        onChange = { (e) => setfile( e.target.files[0])}
                    />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder={user.username} onChange={e => setUsername(e.target.value)}/>
                    <label>Email</label>
                    <input type="email" placeholder={user.email} onChange={e => setEmail(e.target.value)}/>
                    <label>Password</label>
                    <input type="password" onChange = {e => setPassword(e.target.value)}/>
                    <button className="settingSubmit" type="submit">Update</button>
                    {success && <span style={{color : "grey", textAlign : "center" , marginTop : "20px"}}>Profile has been updated....</span>}
                </form>

            </div>
            <Sidebar/>
            
        </div>
    )
}
