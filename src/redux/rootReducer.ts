import { combineReducers } from "@reduxjs/toolkit";

import entityReducer from "@/redux/features/entitySlice";

const rootReducer = combineReducers({
  entities: entityReducer,
});

export default rootReducer;
