import {itemType} from "./itemType";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import type { PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
    itemList: itemType[],
    page: number,
    scrollPosition: number
}

const initialState: initialStateType = {
    itemList: [],
    page: 1,
    scrollPosition: 0
}

export const itemSlice = createSlice({
    name: "item",
    initialState,
    reducers: {
        addItemList: (state, action: PayloadAction<itemType[]>) => {
            state.itemList.push(...action.payload);
        },
        addFavoriteItem: (state, action: PayloadAction<itemType>) => {
            const list = [...state.itemList];
            list.forEach((fav: itemType) => {
                if(fav.id === action.payload.id){
                    fav.favorite = true;
                }        
            });
            state.itemList = list;
        },
        removeFavoriteItem: (state, action: PayloadAction<itemType>) => {
            const list = [...state.itemList];
            list.forEach((fav: itemType) => {
                if(fav.id === action.payload.id){
                    fav.favorite = false;
                }        
            });
            state.itemList = list;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setScrollPosition: (state, action: PayloadAction<number>) => {
            state.scrollPosition = action.payload;
        }
    }
});

export const {addItemList, addFavoriteItem, removeFavoriteItem, setPage, setScrollPosition} = itemSlice.actions;
export const getItemList = (state: RootState) => state.itemList;
export const getPage = (state: RootState) => state.page;
export const getScrollPosition = (state: RootState) => state.scrollPosition;
export default itemSlice.reducer;