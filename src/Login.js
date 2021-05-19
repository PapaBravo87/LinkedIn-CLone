import { React, useState } from 'react'
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import './Login.css'
import { login } from './features/userSlice'

function Login() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setprofilePic] = useState("");
    const dispatch = useDispatch();


    const loginToApp = (e) => {
        e.preventDefault();
    };

    const register = () => {
        if (!name || !email || !password) {
            return alert("Please Fill All The Fields!");
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: profilePic
                    })
                );
            });
        }).catch((error) => alert(error));
    };
    
    return (
        
        <div className="login">
            <img 
                src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg_.png?itok=lsJ4yrWp" 
                alt="" 
            />

            <form>
                <input 
                    placeholder="Full Name (required if registering)" 
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)} 
                />

                <input 
                    placeholder="Profile pic URL (optional)" 
                    type="text" 
                    value={profilePic}
                    onChange={e => setprofilePic(e.target.value)}
                />

                <input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <input 
                    placeholder="Password" 
                    type="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <button 
                    type="submit"
                    onClick={loginToApp}
                >
                    Sign In
                </button>

            </form>

            <p>
                Not a Member?{" "}
                <span className="login__register" onClick={register}>
                    Register Now
                </span>
            </p>

        </div>
    )
}

export default Login
