import {combineReducers, createStore} from 'redux'
import eventCreatorReducer from "./reducers/eventCreator";
import dayReducer from "./reducers/day";
import calendarReducer from "./reducers/calendar";

const reducers = combineReducers({
    day: dayReducer,
    eventCreator: eventCreatorReducer,
    calendar: calendarReducer
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig
