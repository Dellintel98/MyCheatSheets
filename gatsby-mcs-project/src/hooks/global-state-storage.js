import React from "react"
import globalHook from "use-global-hook"


const initialState = { 
    isUserLoggedIn: false,
    article: {
        newsId: "",
        title: "",
        newsText: "",
        newsImagePath: "",
        iconName: "",
    },
};

const actions = {
    setUserLoggedIn: (store, value) => {
        store.setState({ isUserLoggedIn: value });
    },
    setCurrentNewsArticle: (store, value) => {
        store.setState({article: value});
    },
};

const useGlobalState = globalHook(React, initialState, actions);

export default useGlobalState;