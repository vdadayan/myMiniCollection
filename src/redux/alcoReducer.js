
let initialState = {
    alco: []
}
const ALCO = "ALCO";

export const getAlcoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALCO: {
            return {}
        }
        default:
            return state
    }
}

const actionAlco = (data) => ({
    type: ALCO,
    data
})


export const alcoThunk = () => {
    return async (dispatch) => {
        // const data = await
        dispatch(actionAlco())
    }
}