import React, { useContext, useState } from 'react'
import { Context } from '../Context';

function Option() {
    //const {handleOption} = useContext(Context);
    const {state, dispatch} = useContext(Context)
    const [newUserName, setNewUser] = useState('');
    const [profilPhoto, setProfilePhoto] = useState('');
    const [userOption, setUserOption] = useState()
    function changeUser(e) {
        e.preventDefault();
        const newUser = {
            id: Date.now(),
            userName: newUserName,
            profilePic: profilPhoto
        }
        const newUsersArray = [...state.usersList, newUser]

        dispatch({type: "SET_USERS", value: newUsersArray})
        dispatch({type: "SET_CURRENT_USER", value: newUser})
    }

    function handleSelect(e) {
        setUserOption(e.target.value);
        const newUser = state.usersList.find(user => user.id === Number(e.target.value));
        console.log(e.target.value);
         dispatch({type: "SET_CURRENT_USER", value: newUser})
    }
    return (
        <div>
            <h3>Option:</h3>
            <form onSubmit={changeUser}>
                <label>UserName
                    <input 
                        placeholder="Type your username here"
                        value={newUserName} 
                        onChange={(e)=>setNewUser(e.target.value)} />
                </label>
                <label>Profile Picture
                    <input 
                        placeholder="Paste a url here"
                        value={profilPhoto} 
                        onChange={(e) => setProfilePhoto(e.target.value)} />
                </label>
                <button>Save</button>
            </form>
            <select value={userOption} onChange={handleSelect}>
                {state.usersList.map(user => <option key={user.id} value={user.id}> {user.userName} </option>)}
            </select>
        </div>
    )
}

export default Option
