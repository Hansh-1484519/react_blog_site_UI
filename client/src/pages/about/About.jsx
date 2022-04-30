import { useState , useEffect} from "react";
import Header from "../../components/header/Header"
import Sidebar from "../../components/sidebar/Sidebar"
import axios from "axios"
import "./about.css"
import { useLocation } from "react-router-dom";

export default function Home() {
//
    const [posts , setPosts] = useState([]);
    const {search} = useLocation();
    //console.log( location );

    useEffect(() =>{
        const fetchPosts = async () =>{
            const res = await axios.get("/posts"+search);
            // console.log(res);
            setPosts( res.data );
        };
        fetchPosts();
    }, [search]);


    return (
        <>
        <div>
            <Sidebar/>
        </div>

        </>
    )
}
