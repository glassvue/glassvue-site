import React, { useContext, useReducer } from "react";
import { reducer } from "./reducer";

const AppContext = React.createContext();

const initialState = {
    name: "",
    image: "",
}


const AppProvider = ({ children }) => {

    const updateHomePage = () => {
        return dispatch(
            {
                type: "HOME_UPDATE",
                payload: {
                    name: " Enable your business success by cutting edge technologies ",
                    image: "../images/home.jpg",
                    isButton: true,
                }
            }
        )
    }

    const updateAboutPage = () => {
        return dispatch(
            {
                type: "ABOUT_UPDATE",
                payload: {
                    name: " About US ",
                    image: "../images/about_us.jpg",
                    isButton: false,
                }
            }
        )
    }
    const updateContactPage = () => {
        return dispatch(
            {
                type: "CONTACT_UPDATE",
                payload: {
                    name: " Get in touch ",
                    image: "../images/getintouch.jpg",
                    isButton: false,
                }
            }
        )
    }

    const updateServicePage = () => {
        return dispatch(
            {
                type: "SERVICE_UPDATE",
                payload: {
                    name: " Our Services ",
                    image: "../images/services.jpg",
                    isButton: false,
                }
            }
        )
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    return <AppContext.Provider value={{
        ...state, updateAboutPage, updateHomePage, updateContactPage, updateServicePage
    }}>
        {children}
    </AppContext.Provider>;
};

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };