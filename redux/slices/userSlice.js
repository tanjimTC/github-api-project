import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AxiosConfig from "../../AxiosConfig/AxiosConfig";

export const getUserByName = createAsyncThunk("user/fetchUser", async (arg) => {
  try {
    const result = await AxiosConfig.get(`search/users?q=${arg}+in:user`);
    return {
      success: true,
      status: result.status,
      response: result.data,
    };
  } catch (error) {
    return {
      success: false,
      status: error?.response?.status,
      response: error?.response?.data,
    };
  }
});

export const getUserInfo = async (url) => {
  try {
    const result = await axios.get(url);
    return {
      success: true,
      status: result.status,
      response: result.data,
    };
  } catch (error) {
    return {
      success: false,
      status: error?.response?.status,
      response: error?.response?.data,
    };
  }
};

export const getUserInfobyName = async (login) => {
  try {
    const result = await AxiosConfig.get(`search/users?q=${login}+in:user`);
    return {
      success: true,
      status: result.status,
      response: result.data,
    };
  } catch (error) {
    return {
      success: false,
      status: error?.response?.status,
      response: error?.response?.data,
    };
  }
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: true,
    gitUser: null,
    userProfile: {},
    userRepos: [],
    userFollowers: [],
    userFollowing: [],
  },
  reducers: {
    userInfoRepo: (state, action) => {
      state.userRepos = action.payload;
    },
    userInfoProfile: (state, action) => {
      state.userProfile = action.payload;
    },
    userInfoFollowers: (state, action) => {
      state.userFollowers = action.payload;
    },
    userInfoFollowing: (state, action) => {
      state.userFollowing = action.payload;
    },
  },
  extraReducers: {
    [getUserByName.fulfilled]: (state, action) => {
      if (action.payload?.success) {
        if (action.payload.response?.total_count === 0) {
          state.gitUser = undefined;
        } else {
          state.gitUser = action.payload.response;
          state.loading = false;
        }
      } else if (action.payload?.status === 404) {
        state.gitUser = undefined;
      } else {
        state.gitUser = "Something went wrong!";
      }
    },
  },
});

export const {
  userInfoProfile,
  userInfoRepo,
  userInfoFollowers,
  userInfoFollowing,
} = userSlice.actions;

export default userSlice.reducer;

export const userSelector = (state) => state.user;
