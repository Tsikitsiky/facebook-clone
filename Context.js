import React, { createContext, useEffect, useReducer } from 'react';
import postData from './postData.json'

const Context = createContext();
function ContextProvider({children}) {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case "SET_POST_LIST": return {...state, postList: action.value};
            case "SET_CURRENT_USER": return {...state, currentUser: action.value}
        } 
    }, {
        postList: [],
        currentUser: {
            id: 5,
            userName: "Meee",
            profilePic: "https://picsum.photos/30"}
    });

    useEffect(() => {
            dispatch({type: "SET_POST_LIST", value: postData})
    }, [])

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
