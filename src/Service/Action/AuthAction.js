import { SIGNUP_SUCCESS, SIGNUP_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS , LOGOUT_FAIL} from "../Constant/ActionType";
import {auth, db} from '../../Component/Firebase/firebase'
import { signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Firestore } from "firebase/firestore";

const provider = new GoogleAuthProvider();

const SignUpSuccess = (user) => {
    return {
        type: SIGNUP_SUCCESS,
        payload: user
    };
}
const SignUpFail = (err) => {
    return {
        type: SIGNUP_FAIL,
        payload: err
    };
}
const LogInSuccess = (user) => {
    return {
        type : LOGIN_SUCCESS,
        payload : user
    }
}
const LogInFail = (err) => {
    return {
        type : LOGIN_FAIL,
        payload : err
    }
}
const LogOutSuccess = () => {
    return {
        type : LOGOUT_SUCCESS
    }
}
const LogOutFail = (err) => {
    return {
        type : LOGOUT_FAIL,
        payload : err
    }
}

export  const logInGoogle = () => {
    return diapatch => {
        signInWithPopup(auth, provider)
        .then((userCredential) => {
            console.log("userCredential", userCredential);
            const user = userCredential.user
            sessionStorage.setItem("LoginData", JSON.stringify(user))
            diapatch(LogInSuccess(user))
        }).catch((err) => {
            console.log("error", err);
            diapatch(LogInFail(err))
        })
    }
}

export const logOut = () => {
    return dispatch => {
        signOut(auth).then((res) => {
            console.log("result", res);
            dispatch(LogOutSuccess())
        }).catch((err) => {
            console.log("error", err);
            dispatch(LogOutFail(err))
        })
    }
}


export const signUpInitiate = (email, password, displayName) => {
    return async (dispatch) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Update the user's display name
            // await updateProfile(user, { displayName });

            // Store additional user data in Firestore
            const userRef = Firestore.collection('users').doc(user.uid);
            await userRef.set({
                displayName,
                email,
                uid: user.uid
            });

            sessionStorage.setItem("LoginData", JSON.stringify(user));
            dispatch(SignUpSuccess(user));
        } catch (error) {
            console.error(error);
            dispatch(SignUpFail(error.message));
            throw error;
        }
    };
}

export const logInInitiate = (email, password) => {
    // console.log(email, password);
    return dispatch => {
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log("userCredential", userCredential.user);
            const user = userCredential.user
            sessionStorage.setItem("LoginData", JSON.stringify(user))
            dispatch(LogInSuccess(user))
        }).catch((err) => {
            console.log("error", err.code);
            dispatch(LogInFail(err.code))
        })
    }
}