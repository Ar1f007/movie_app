import { CHANGE_THEME } from './types';

const initialState = {
    mode: 'light'
}
const reducer = (state=initialState, action) => {
    if(action.type === CHANGE_THEME){
        return {
            ...state,
            mode: state.mode === 'light' ? 'dark' : 'light'
        }
    }
    return state;
}

export default reducer;