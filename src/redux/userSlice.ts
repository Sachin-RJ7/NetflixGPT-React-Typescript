import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
    uid: string | null;
    email: string | null;
    displayName: string | null;
}

const initialState: UserState = {
    uid: null,
    email: null,
    displayName: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<UserState>) => {
            return action.payload
        },
    
        removeUser: (state, action) => {
            return action.payload;
        }
    }
})

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;