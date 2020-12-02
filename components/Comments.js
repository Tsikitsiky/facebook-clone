import React from 'react';
import styled from "styled-components";
import Image from "./Image"


function Comments({comment}) {
    let date = new Date(Number(comment.On))
    return (
        <div className="comments-container">
            <div >
                <div className="post-head">
                    <Image>
                        <img className="commenter" src={comment.picture} />
                        <span> {comment.by} </span>
                    </Image> 
                    <p className="comment-content"> {date.toLocaleDateString()} </p>
                </div>
            </div>
            <p className="comment-content">{comment.content}</p>
        </div>
    )
}

export default Comments
