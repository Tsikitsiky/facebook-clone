import React, { useContext, useState } from 'react'
import  {Context}  from '../Context';

function AddPost() {
    const {state, dispatch, user} = useContext(Context)
    const [postDescription, setPostDescription] = useState('');
    const [image, setImage] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        const newPost = {
        "postId": Date.now(),
        "userId": state.currentUser.id,
        "postedBy":state.currentUser.userName,
        "profilePicture": state.currentUser.profilePic,
        "postedOn": Date.now(),
        "postDescription": postDescription,
        "image": image,
        "likes": [],
        "comments": []
    }
    const updatedPosts = [...state.postList, newPost];
        dispatch({type: "SET_POST_LIST", value: updatedPosts})
    }
    return (
        <div className="add-post">
            <h3>New Post:</h3>
            <form onSubmit={handleSubmit}>
                <textarea 
                    placeholder="What is in your mind? ..." 
                    value={postDescription} 
                    onChange={(e)=>setPostDescription(e.target.value)} />
               <label>Picture url:
                    <input type="url" value={image} onChange={(e) => setImage(e.target.value)} />
               </label>
               <button>Post</button>
            </form>
        </div>
    )
}

export default AddPost
