import React from 'react'
import { Button } from "react-bootstrap"
import "./Login.css"
import { auth, provider } from "./firebase"
import { actionTypes } from './reducer'
import { useStateValue } from "./StateProvider"

function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })

            })
            .catch(error => {
                console.log(error.message)
            })


    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://dcassetcdn.com/design_img/3034794/578323/578323_16854917_3034794_51f76c44_image.jpg" alt="logo" />
                <h3>Sign in to Our Website</h3>

                <Button onClick={signIn} variant="success">Sign In with Google</Button>

            </div>

        </div>
    )
}

export default Login
