const initialState = {
    eventsOfTheDay: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'ADD_EVENT_OF_THE_DAY':
            return {
                ...state,
                eventsOfTheDay: state.eventsOfTheDay.concat({...action.payload, id: crypto.randomUUID()})
            }
        case 'UPDATE_EVENT_OF_THE_DAY':
            return {
                ...state,
                eventsOfTheDay: state.eventsOfTheDay.filter(e => e.id !== action.payload.id ).concat(action.payload)
            }
        case 'DELETE_EVENT_OF_THE_DAY':
            return {
                ...state,
                eventsOfTheDay: state.eventsOfTheDay.filter(e => e.id !== action.payload)
            }
        default:
            return state
    }
}
