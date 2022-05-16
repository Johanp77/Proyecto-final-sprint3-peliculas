import { loginTypes } from "../types/loginTypes";


export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case loginTypes.login:
            return {
                user: action.payload.user,
                pass: action.payload.pass
            }
        default:
            return state;
    }
}