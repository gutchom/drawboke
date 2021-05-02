import firebase from "firebase/app";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export function RedirectForSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
}  

function UserLogout() { 
    firebase.auth().signOut();
}

function UserToolbarButtons() {
    const [login_user, setUser] = useState< firebase.User | null >(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setUser(user);
        });
    }, []);

    return(
        <div>
            { login_user 
            ?   (<ul>
                    <li><Link to="/user/esehara">{ login_user.displayName }</Link></li>
                    <li><Link to="/draw/new">絵を描く</Link></li>
                    <li><Link to="/boke/new">絵に一言</Link></li>
                    <li>
                        <button 
                            onClick={() => { UserLogout(); }} 
                        > Log out </button></li>
                </ul>)

            :   (<ul>
                    <li>
                        <button
                            onClick={() => { RedirectForSignIn(); }}
                        > PLAY </button>
                        </li>
                </ul>)
            
            }
        </div>
    )

}

export function UserToolbar() {
    return (
        <div>
            <h1>DrawBoke</h1>
            <UserToolbarButtons />
        </div>
    );
}

