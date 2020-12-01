import React, { useEffect, useReducer } from 'react';
import postData from './postData.json'

function Context() {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case "SET_POST_LIST": return {...state, postList: postData};
            case "SET_LIKE": return {...state, postList: action.by}
        } 
    }, {
        postList: [],
    });

    useEffect(() => {
            dispatch({type: "SET_POST_LIST"})
    }, [])

    function increment(id) {
        const updatedList = postList.map(post => {
            if(post.id === id) {
                return {
                    ...post,
                    likes: post.likes + 1
                }
            }
            return post
        })
        dispatch({type: "SET_LIKE", by: updatedList})
    }

    return [state, dispatch]
}

export default Context
