"use client";
import { configureStore } from "@reduxjs/toolkit";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PortfolioItem {
  id: string;
  image: string;
  project: string;
  skills: string[];
  bio: string;
}

interface PortfolioState {
  portfolios: PortfolioItem[];
}

const initialState: PortfolioState = {
  portfolios: [],
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setPortfolios: (state, action: PayloadAction<PortfolioItem[]>) => {
      state.portfolios = action.payload;
    },
    fetchPortfolios: (state) => {
      // Simulating API call (You can replace this with an actual API call)
      state.portfolios = [];
    },
  },
});

export const store = configureStore({
  reducer: {
    portfolio: portfolioSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
