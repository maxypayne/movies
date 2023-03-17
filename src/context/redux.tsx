import { createSlice, configureStore } from '@reduxjs/toolkit';
// import React, { useLayoutEffect, useState } from 'react';

// function useWindowSize() {
//   const [size, setSize] = useState([0, 0]);
//   useLayoutEffect(() => {
//     function updateSize() {
//       setSize([window.innerWidth, window.innerHeight]);
//     }
//     window.addEventListener('resize', updateSize);
//     updateSize();
//     return () => window.removeEventListener('resize', updateSize);
//   }, []);
//   console.log({size});
  
//   return size;
// }

// useWindowSize();

const desktopSlice = createSlice({
  name: 'desktop',
  initialState: { desktop: false, isLoggedIn: false },
  reducers: {
    toggleDesktop(state, action) {
      state.desktop = action.payload;
    },
    setIsLogedIn(state, action){
      state.isLoggedIn = action.payload;
    }
  }
});


export const store = configureStore({
  reducer: desktopSlice.reducer,
});

export const actions = desktopSlice.actions;