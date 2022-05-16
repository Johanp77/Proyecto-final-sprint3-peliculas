import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { google } from "../../firebase/firebase.js"
import { loginTypes } from "../types/loginTypes.js"


export const loginGoogle = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, google)
            .then(({ user }) => {
                console.log(user, 'Usuario autorizado')
            })
            .catch(error => {
                console.warn(error, 'No autorizado')
            })
    }
}

//-------------------Logout --------- */
export const logoutAsync = () => {
    return (dispatch) => {
        const auth = getAuth()
        signOut(auth)
            .then((user) => {
                console.log('Adios')
                dispatch(logout())

            })
            .catch(error => {
                console.warn(error)
            })
    }
}

export const logout = () => {
    return {
        type: loginTypes.logout
    }
}