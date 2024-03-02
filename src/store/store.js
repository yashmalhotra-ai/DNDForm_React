import { configureStore } from '@reduxjs/toolkit'
import drawerSlice from './drawerSlice';
import globalSlice from './globalSlice'

const store = configureStore({
  reducer: {
    global: globalSlice,
    drawer: drawerSlice,
  },
})

export default store;