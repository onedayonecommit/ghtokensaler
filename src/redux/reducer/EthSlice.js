import { createSlice } from "@reduxjs/toolkit";

const EthSlice = createSlice({
    name: "ethslice",
    initialState: {
        accounts: null,
        web3: null,
    },
    reducers: {
        createWeb3: (state, action) => {
            state.web3 = action.payload;
        },
        createAccounts: (state, action) => {
            state.accounts = action.payload;
        }
    }
})