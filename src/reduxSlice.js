import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
    users: [ ],
    isloading: false,
    isError: false
}

export const getUsers = createAsyncThunk("getUsers",async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response?.json()
    return data;
})       

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getUsers.pending,(state,action)=>{
            state.isloading=true;
        })
        builder.addCase(getUsers.fulfilled,(state,action)=>{
            state.isloading=false;
            state.users=action.payload;
        })
        builder.addCase(getUsers.rejected,(state, action)=>{
            state.isloading=false;
            state.error=true;
        })
    },
})                                                                                                                                
export default userSlice.reducer;