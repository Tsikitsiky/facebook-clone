
import React, { createContext, useEffect, useReducer } from 'react';
import postData from './postData.json';
import usersData from './usersData.json'

const Context = createContext();
function ContextProvider({children}) {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case "SET_POST_LIST": return {...state, postList: action.value};
            case "SET_USERS": return {...state, usersList: action.value};
            case "SET_CURRENT_USER": return {...state, currentUser: action.value}
        } 
    }, {
        postList: [],
        usersList : [],
        currentUser: {
        "id": 5,
        "userName": "Sarah",
        "profilePic": "https://picsum.photos/50"

        }
    });

    useEffect(() => {
            dispatch({type: "SET_POST_LIST", value: postData})
            dispatch({type: "SET_USERS", value: usersData})
    }, [])

    let user;
    if(state.usersList) {
        user = state.usersList.find(user => user.id === state.currentUser);
    }

    return (
        <Context.Provider value={{state, dispatch, user}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
