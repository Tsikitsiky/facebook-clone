import React, { useContext } from 'react';
import {Context} from '../Context';
import Post from "../components/Post"

function Feed() {
    // const [state , dispatch] = Context();
    // const {postList} = state;
    const {posts} = useContext(Context);

    return (
        <div>
            {posts.length !== 0 && posts.map(post => {
                return <Post key={post.id} post={post} />
            } )
    }
        </div>
    )
}

export default Feed