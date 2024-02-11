export const reducer = (state, action) => {
    if (action.type === "HOME_UPDATE") {
        return {
            ...state,
            name: action.payload.name,
            image: action.payload.image,
            isButton: action.payload.isButton,
        }
    }

    if (action.type === "ABOUT_UPDATE") {
        return {
            ...state,
            name: action.payload.name,
            image: action.payload.image,
            isButton: action.payload.isButton,
        }
    }

    if (action.type === "CONTACT_UPDATE") {
        return {
            ...state,
            name: action.payload.name,
            image: action.payload.image,
            isButton: action.payload.isButton,
        }
    }

    if (action.type === "SERVICE_UPDATE") {
        return {
            ...state,
            name: action.payload.name,
            image: action.payload.image,
            isButton: action.payload.isButton,
        }
    }

    return state;
}