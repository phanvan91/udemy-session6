import _ from 'lodash'
import {DELETE_POST, FETCH_ID, FETCH_POSTS} from "../actions";


export default function (state={},action) {
    switch (action.type) {
        case FETCH_POSTS:
            console.log(_.mapKeys(action.payload.data,'id'))
            return _.mapKeys(action.payload.data,'id')
        case FETCH_ID :
            // const post = action.payload.data
            // const newState = {...state}
            // newState[post.id] = post
            // return {newState}
            console.log(action.payload.data)
            return {
                ...state, [action.payload.data.id] : action.payload.data
            }
        case DELETE_POST :
            return _.omit(state,action.payload)
        default:
            return state
    }
}