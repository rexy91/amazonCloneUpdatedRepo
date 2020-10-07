//If its not export default, we need to import with {}

export const initialState={
    basket: [],
    user: null 
}
    // Reducer takes in initalstate and action 

function reducer(state, action) {

    switch(action.type) {
        case 'ADD_TO_BASKET':
            console.log(state)
            // Add item to basket array:
            return {
                ...state, // this will give bakset and user
                basket:[...state.basket, action.item] //Now add item to the basket array. 
            }
        case 'REMOVE_FROM_BASKET':
        // Here is logic for removing from basket
            break;
        default:
            return state;
    }
} 

export default reducer // to be use in other files.