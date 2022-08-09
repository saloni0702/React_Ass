import { useEffect, useState } from "react";
import "./App.css";
const PostView = ()=> {
    const [userData, setUserData] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:3004/user').then((data)=> {
            return data.json()
        }).then((userData)=> {
            setUserData(userData);
            console.log(userData)
        })
    }, []);
    return (
        <>
            <div className="container">
                <header>
                    <div className="nav">
                        <img src="./images/head.jpg" alt="insta-logo" class="head"></img>
                        <img src="./images/camera.jpg" alt="camera" class="camera"></img>
                    </div>
                </header>
                <hr/>
                <div >
                    {
                        userData.map((user,i)=> {
                            return (
                                <div class="post">
                                            <div class="info">
                                                <div class="user">
                                                    <p class="username">{user.name}</p>
                                                    <p class="location">{user.location}</p>
                                                </div>
                                                <img src="./images/dots.jpg" class="options" alt="dot"/>
                                            </div>
                                            <img src={user.PostImage} class="post-image" alt=""/>
                                            <div class="post-content">
                                                <div class="reaction-wrapper">
                                                    <img src="./images/like.jpg" class="icon" alt="like"/>
                                                    <img src="./images/share.jpg" class="icon" alt="share"/>
                                                    <p class="post-time">{user.date}</p>
                                                </div>
                                                <p class="likes">{user.likes} likes</p>
                                                <p class="description">{user.description}</p>
                                            </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default PostView;