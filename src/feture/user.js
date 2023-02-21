import {createSlice} from '@reduxjs/toolkit'
import SongData from '../data'


export const sclice = createSlice({
    name:"users",
    initialState: {value : []},
    reducers : {
        getUserFetch:(state) => {
            state.isLoading = true;
            isLoading: false
         },
         getUserSuccess : (state,action) =>{
            state.value = action.payload;
            state.isLoading = false;
         },
         getFailure : (state) => {
            state.isLoading = false;
         },
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

export const {getUserFetch , getUserSuccess, getFailure ,addUser, deleteUser,updateUsername } = sclice.actions
export default sclice.reducer