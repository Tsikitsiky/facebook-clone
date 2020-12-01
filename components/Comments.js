import React from 'react';
import styled from "styled-components";
import Image from "./Image"


function Comments({comment}) {
    let date = new Date(Number(comment.On))
    return (
        <div>
            <div >
                <div className="post-head">
                    <Image>
                        <img className="commenter" src={comment.picture} />
                        <span> {comment.by} </span>
                    </Image> 
                    <p> {date.toLocaleDateString()} </p>
                </div>
            </div>
            <p>{comment.content}</p>
        </div>
    )
}

export default Comments
