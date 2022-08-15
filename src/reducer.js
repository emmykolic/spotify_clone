// import { act } from "react-dom/test-utils";

//This is a method.
export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: 'BQD72wOrQfQuJiY9crifLUoe597aA-wn73dO3WX3zLjEe_DzYwQw-zjkRtPWkCrKpJP-9g_WHqFcy3VlFKe5lQQYG3WIvk6DGyP8lRmjrMjoA1shRLxweZVR2dcADy7EYlyt2Wt9XU-5XkGH-2Q0DlT9CZmH1Ard8SgwWG_SXs0mXjV0GUzoOT6625cl1m5nWp0r-9N8KL6uxwG4G4K8'
    //token: 'BQDCKIHFpsWJGS_8UkTvU3YL1A8pIs3AZiyAhRQ2EGSnNO4gXTgV1IgRCRTxZWu9MTz5jCjJTzBLda2zWTmvRd6aWt_7M-X6uaHSkgzTA1ckxMve7NKLqdfxvmE9pVx2ZFVVFV2T0rQdkB_vyWdIv-AUwwzWjuVpWY55Ru-3tFLxOW0WXWN80qAMySnd-rSbmT50w3BLvBy5HXe9_SYS',
};
const reducer = (state, action) =>{
    console.log(action);
    //Action -> Type -> [playload]
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
            case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
            case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists
            }
            case "SET_DISCOVER_WEEKLY":
                return{
                    ...state,
                    discover_weekly: action.discover_weekly,
                }
        default:
            return state;
    }
}

export default reducer;