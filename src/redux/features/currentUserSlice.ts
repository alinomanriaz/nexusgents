import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCurrentUser = createAsyncThunk('currentUser/fetch', async () => {
    const response = await axios.get('/api/user/profile')
    return response.data.user
})

type User = {
    email: string;
    lastSeen: Date;
    online: boolean;
    username: string;
    _id: string;
}

type CurrentUserState = {
    loading: boolean;
    user: User | null;
}

const initialState: CurrentUserState = {
    loading: true,
    user: null
}

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
            state.loading = false
        },
        clearUser: (state) => {
            state.user = null
            state.loading = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrentUser.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchCurrentUser.fulfilled, (state, action: PayloadAction<User>) => {
                state.user = action.payload
                state.loading = false
            })
            .addCase(fetchCurrentUser.rejected, (state, action) => {
                console.error('Fetch user failed:', action.error.message)
                state.user = null
                state.loading = false
            })
    }
})

export const { setUser, clearUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;
