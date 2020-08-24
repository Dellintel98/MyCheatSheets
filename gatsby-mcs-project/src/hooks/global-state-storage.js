import React from "react"
import globalHook from "use-global-hook"


const initialState = { 
    isUserLoggedIn: false,
};

const actions = {
    setUserLoggedIn: (store, value) => {
        store.setState({ isUserLoggedIn: value });
    },
};

const useGlobalState = globalHook(React, initialState, actions);

export default useGlobalState;