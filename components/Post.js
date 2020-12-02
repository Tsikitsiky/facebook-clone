import React, { useContext, useState } from 'react';
import Comments from './Comments';
import {Context} from '../Context';
import Image from './Image'
import Description from './Description';
import LikeBtn from './LikeBtn';

export default function Post({post}) {
    const {state , dispatch} = useContext(Context);
    let date = new Date(Number(post.postedOn));
    const handleLikes = () => {
        const hasLiked = post.likes.some(item => item.id === state.currentUser.id);
        console.log(hasLiked)
        if(!hasLiked) {
            const updatedPost = state.postList.map(postU => {
                if(postU.id === post.id) {
                    return {
                        ...postU,
                        likes: [...postU.likes, state.currentUser]
                    }
                }
                return postU;
            })
            dispatch({type: "SET_POST_LIST", value: updatedPost})
    } else {
        const updatedPost = state.postList.map(postU => {
            if(postU.id === post.id) {
                const newLikes= post.likes.filter(like => like.id !== state.currentUser.id)
                return {
                    ...postU,
                    likes: newLikes
                }
            }
            return postU;
        })
        dispatch({type: "SET_POST_LIST", value: updatedPost})
    }
}
    const [comment, setComment] = useState('');
    function handleSubmit(e) {
        e.preventDefault();
        console.log(post)
        const newComment ={
            "picture": "https://picsum.photos/30",
                "id": Date.now(),
                "by": state.currentUser.userName,
                "content": comment,
                "On": Date.now()
        }
        const updatedPost = state.postList.map(postU => {
            if(postU.id === post.id) {
                return {
                    ...postU,
                    comments: [...postU.comments, newComment]
                }
            }
            return postU;
        })
        dispatch({type: "SET_POST_LIST", value: updatedPost})
        setComment('')
    }
    return (
        <div className="post-container">
                        <div className="post-head">
                            <Image>
                                <img className="profile" src= {post.profilePicture} />
                                <span> {post.postedBy} </span>
                            </Image>
                            <p> {date.toLocaleDateString()} </p>
                        </div>
                        <Description>
                            <p> {post.postDescription} </p>
                        </Description>
                        <Image>
                            <img src= {post.image} />
                        </Image>
                        <LikeBtn>
                            <button onClick={
                                handleLikes
                            }>
                                Like
                            </button>
                            <span> {post.likes.length} </span>
                        </LikeBtn>
                        <div> 
                            {post.comments.map(comment => {
                            return <Comments  key={comment.id} comment = {comment} />
                            })} 
                            <form onSubmit={handleSubmit}>
                                <input value={comment} placeholder="Add a comment" onChange={(e) => setComment(e.target.value)} />
                                <button>
                                    Comment
                                </button>
                            </form>
                        </div>
                        <hr />
                    </div>
    )
}


