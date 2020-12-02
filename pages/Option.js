import React, { useContext, useState } from 'react'
import { Context } from '../Context';

function Option() {
    //const {handleOption} = useContext(Context);
    const {state, dispatch} = useContext(Context)
    const [newUserName, setNewUser] = useState('');
    const [profilPhoto, setProfilePhoto] = useState('');
    function changeUser(e) {
        e.preventDefault();
        const newUser = {
            id: Date.now(),
            userName: newUserName,
            profilePic: profilPhoto
        }

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
        </div>
    )
}

export default Option
