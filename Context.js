import React, { createContext, useEffect, useReducer, useState } from 'react';
import postData from './postData.json'

const Context = createContext()
function ContextProvider({children}) {
    const [posts, setPosts] = useState([]);
    const [currentUser, setCurrentUser] = useState({
        id: 5,
        userName: "Meee",
        profilePic: "https://picsum.photos/30"
    });
    useEffect(() => {
        setPosts(postData)
    }, []);

    function handleLikes(currentPost) {
        const hasLiked = currentPost.likes.some(item => item.id === currentUser.id);
        if(!hasLiked) {
            console.log("Like it")
            const updatedPost = posts.map(post => {
                if(post.id === currentPost.id) {
                    return {
                        ...post,
                        likes: [...post.likes, currentUser]
                    }
                }
                return post;
            })
            setPosts(updatedPost)
        }
        
    }

    function handleAddComment(comment, id) {
        const newComment ={
            "picture": "https://picsum.photos/30",
                "id": Date.now(),
                "by": currentUser.userName,
                "content": comment,
                "On": Date.now()
        }
        const updatedPost = posts.map(post => {
            if(post.id === id) {
                return {
                    ...post,
                    comments: [...post.comments, newComment]
                }
            }
            return post;
        })
        setPosts(updatedPost);
    }

    function handleAddPost(newPost) {
        const updatedPosts = [...posts, newPost];
        setPosts(updatedPosts)
    }

    function handleOption(newUser) {
        setCurrentUser(newUser);
    }

    return (
        <Context.Provider value={{posts, handleLikes, handleAddComment, currentUser, handleAddPost, handleOption}} >
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
