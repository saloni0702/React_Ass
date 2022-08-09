import React, {
    Component
} from 'react';
import './App.css'

class Insta extends React.Component {
        state = {
            isLoading: true,
            users: [],
            error: null
        };
        getFetchUsers() {
            this.setState({
                loading: true
            }, () => {
                fetch("http://localhost:3004/user").then(res => res.json()).then(result => this.setState({
                    loading: false,
                    users: result
                })).catch(console.log);
            });
        }
        componentDidMount() {
            this.getFetchUsers();
        }
        render() {
            const {
                users,
                error
            } = this.state;
            return (
              <React.Fragment>
              <header>
                <img src="./images/head.jpg" class="head" alt="head"/>
                <img src="./images/camera.jpg" class="camera" alt="camera"/>
              </header>
              {
                    error ? <p>
              {
                        error.message
                    } < /p> : null}  {
                        users.map(user => {
                            const {
                                name,
                                location,
                                PostImage,
                                description,
                                date,
                                likes
                            } = user;
                            return (
                            <div key={name}>
                                <div class="post">
                                            <div class="info">
                                                <div class="user">
                                                    <h1 class="username">{name}</h1><br/>
                                                    <h1 class="location">{location}</h1>
                                                </div>
                                                <img src="./images/dots.jpg" class="options" alt="dot"/>
                                            </div>
                                            <img src={PostImage} class="post-image" alt=""/>
                                            <div class="post-content">
                                                <div class="reaction-wrapper">
                                                    <img src="./images/like.jpg" class="icon" alt="like"/>
                                                    <img src="./images/share.jpg" class="icon" alt="share"/>
                                                    <p class="post-time">{date}</p>
                                                </div>
                                                <p class="likes">{likes} likes</p>
                                                <p class="description">{description}</p>
                                            </div>
                                </div>
                            </div>
                            );
                        })
                    } < /React.Fragment> );
            }
        }
export default Insta;
