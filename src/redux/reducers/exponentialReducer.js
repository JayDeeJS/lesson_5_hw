import { types } from "../types"

const initialState = {
    nums: [],
}

export function exponentialReducer (state = initialState, action) {
    switch (action.type) {
        case types.ADD_INIT:
            return {...state, nums: [...state.nums, action.payload]}
        case types.ADD_SUM:
            return {...state, nums: [...state.nums, action.payload.inputNum + action.payload.lastNum]}
        case types.CLEAR_ALL:
            return {...state, nums: []}
        default: return state
    }
}