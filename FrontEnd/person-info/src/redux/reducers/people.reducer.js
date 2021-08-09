import { ACTION_TYPES } from '../actions/people.actions';

const intialState = {
    list: [],
    selectedPerson:null
}
export const peopleReducer = (state = intialState, actions) => {
    switch (actions.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...actions.payload]
            }
        case ACTION_TYPES.CREATE:
            return {
                ...state,
                list: [...state.list, actions.payload]
            }
        case ACTION_TYPES.SELECT_PERSON:
          return  {...state,selectedPerson:actions.payload}
        case ACTION_TYPES.CLREAR_PERSON:
            return {...state, selectedPerson:null}
        default:
            return state;
    }
}