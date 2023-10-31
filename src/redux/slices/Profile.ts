import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
    email: string;
  };
  
  const initialState: InitialState = {
    email: "",
  };
  
  export const slice = createSlice({
      name: 'Profile',
      initialState,
      reducers: {
          setEmail: (state, action) => {
              state.email = action.payload;
          },
      },
  });

// Action creators are generated for each case reducer function
export const { setEmail,
   
} = slice.actions;

export default slice.reducer;
