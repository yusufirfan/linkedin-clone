import {signInWithEmailAndPassword,createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from "firebase/auth"
import {auth} from "../firebaseConfig"


export const LoginAPI = (email,password) => {
    try{
       let response = signInWithEmailAndPassword(auth,email,password)
       return response
    } catch(err){
        console.log(err);
    }
}

export const RegisterAPI = (email,password) => {
    try{
        let response = createUserWithEmailAndPassword(auth,email,password)
       return response
    } catch(err){
        console.log(err);
    }
}

export const GoogleSignInAPI = () => {
    try{
        let googleprovider = new GoogleAuthProvider()
        let response = signInWithPopup(auth,googleprovider)
        return response
    } catch(err){
        alert(err.errors.message)
    }
}