import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        _id: "",
        logged: false,
        role: "",
        firstName: "",
        lastName: "",
    },
    reducers: {
        userLogin: state => {
            state.logged = true;
        },
        userLogout: state => {
            state.logged = false;
        },
        setUser: (state, action) => {
            state.role = action.payload.role;
            state._id = action.payload._id;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;

        },
        clearUser: state => {
            state.role = "";
            state._id = "";
            state.firstName = "";
            state.lastName = "";
        },

    }
})

export const { userLogin, userLogout, setUser, clearUser } = userSlice.actions


export const selectLogged = (state) => state.user.logged
export const selectRole = (state) => state.user.role
export const selectUser = (state) => state.user

export default userSlice.reducer