import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const authUserSlices = createSlice({
  name: "auth-user",
  initialState: initialState,
  reducers: {
    setAuthUser: (state, action) => {
      const { userData, token } = action.payload;
      localStorage.setItem("userData", JSON.stringify(userData));
      Cookies.set("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const newState = {
        ...state,
        user: userData,
      };
      return newState;
    },
    removeAuthUser: () => {
      Cookies.remove("token");
      localStorage.clear();
      const newState = {
        ...initialState,
      };
      return newState;
    },
  },
});

export const { setAuthUser, removeAuthUser } = authUserSlices.actions;
export default authUserSlices.reducer;
