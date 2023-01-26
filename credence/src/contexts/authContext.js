import React, {createContext,useReducer, useState} from 'react'
import { SignInReducer } from '../reducers/authReducers'

export const SignInContext = createContext()

 export const SignInContextProvider = (props)=>{

const[signedIn,dispatchSignedIn] = useReducer(SignInReducer,{
    userToken:null,
})
const[loginPending, setLoginPending] = useState(false);

return(
    <SignInContext.Provider value = {{signedIn,dispatchSignedIn, loginPending, setLoginPending}}>
        {props.children}
    </SignInContext.Provider>
)

}


