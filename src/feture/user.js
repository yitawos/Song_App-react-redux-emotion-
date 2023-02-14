import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import SongData from '../data'

export const getpost = createAsyncThunk("post/getpost", async ({id}) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts`).then((res)=> res.json())
})

export const sclice = createSlice({
    name:"users",
    initialState: {value : SongData},
    reducers : {
        addUser : (state,action) => {
             state.value.push(action.payload)
    },

        deleteUser: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id);
      },

      updateUsername: (state, action) => {
       state.value.map((user) => {
          if (user.id === action.payload.id) {
          return  user.username = action.payload.username;
          }
        })
      }
    
}
})

export const {addUser, deleteUser,updateUsername } = sclice.actions
export default sclice.reducer