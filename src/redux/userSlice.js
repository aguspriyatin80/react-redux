import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",
    // initialState: {
    //     name: "agus",
    //     email: "agus@gmail.com"
    // },
    initialState: {
        userInfo: {
            name: "agus",
            email: "agus@gmail.com"
        },
        pending: null,
        error: false
    },

    reducers: {
        // update: (state, action) => {
        //     state.name = action.payload.name
        //     state.email = action.payload.email
        // },
        // remove: (state) => (state = {}),
        // addHello: (state, action) => {
        //     state.name = "Hello " + action.payload.name;
        // }
        updateStart: (state) => {
            state.pending = true
        },
        updateSuccess: (state, action) => {
            state.pending = false
            state.userInfo = action.payload
        },
        updateFailure: (state) => {
            state.pending = false
            state.error = true
        },
    }
})
export const { update, remove, addHello, updateStart, updateSuccess, updateFailure } = userSlice.actions
export default userSlice.reducer