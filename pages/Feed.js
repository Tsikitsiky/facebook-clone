import React, { useContext } from 'react';
import {Context} from '../Context';
import Post from "../components/Post"

function Feed() {
    const {state , dispatch} = useContext(Context);
    const {postList} = state;
    console.log(postList)
    return (
        <div>
            {postList.length !== 0 && postList.map(post => {
                return <Post key={post.postedOn} post={post} />
            } )
    }
        </div>
    )
}

export default Feed