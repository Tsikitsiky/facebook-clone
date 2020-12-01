import React, { useContext, useState } from 'react';
import Comments from './Comments';
import {Context} from '../Context';
import Image from './Image'
import Description from './Description';
import LikeBtn from './LikeBtn';

function Post({post}) {
    // const [state , dispatch] = Context();
    // const {likes} = state;
    const {handleLikes, handleAddComment} = useContext(Context);
    let date = new Date(Number(post.postedOn));
    const [comment, setComment] = useState('');
    function handleSubmit(e) {
        e.preventDefault();
        console.log(post)
        handleAddComment(comment, post.id);
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
                            <button onClick={() => {
                                //dispatch({type: "SET_LIKE", by: post.likes + 1})
                                handleLikes(post)
                            }}>
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

export default Post
