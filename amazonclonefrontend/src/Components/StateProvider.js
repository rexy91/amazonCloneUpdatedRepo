// setup data layer
// we need this to track the basket

import React,{createContext, useContext, useReducer} from 'react'

// This is the data layer
export const StateContext = createContext()

// Build a provider , to wrap the app inside the provider. (store)
export const StateProvider = ({reducer, initialState, children}) => (
                //useReducer is a hook
    <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext)
