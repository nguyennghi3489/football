import { LOAD_VIDEO } from '../constants/actionTypes'

const video = (
    state = {},
    action
) => {
    switch (action.type) {
        case LOAD_VIDEO: {
            return {
                ...state,
                videoList: action.data
            }
        }
        default:
            return state
    }
}

export default video
