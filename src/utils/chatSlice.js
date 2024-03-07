import { createSlice } from "@reduxjs/toolkit";



const ChatSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addChatMessage:(state,action)=>{
            state.messages.splice(50,1)
            state.messages.unshift(action.payload);
        }
    }
})



export const {addChatMessage} = ChatSlice.actions;

export default ChatSlice.reducer;