import { types } from "./types";

export function addInitAction (input) {
    return {
        type: types.ADD_INIT,
        payload: input,
    }
}

export function addSumAction (addition) {
    return {
        type: types.ADD_SUM,
        payload: addition,
    }
}

export function clearAllAction () {
    return {
        type: types.CLEAR_ALL,
    }
}