import { createSlice } from "@reduxjs/toolkit";

import { dispatch } from "../store";
import { type } from "@testing-library/user-event/dist/type";

const initialState = {
    sidebar: {
        open: false,
        type: "CONTACT",
    }
};

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toogleSidebar(state, action) {
            state.sidebar.open = !state.sidebar.open;
        },
        updateSidebarType(state, action) {
            state.sidebar.type = action.payload.type;
        },
    },
});

export default slice.reducer;

export function ToogleSidebar() {
    return async () => {
        dispatch(slice.actions.toogleSidebar());
    }
}

export function UpdateSidebarType(type) {
    return async () => {
        dispatch(slice.actions.updateSidebarType({
            type
        }))
    }

}
