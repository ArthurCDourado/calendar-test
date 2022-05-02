export function addEventToDay(eventOfTheDay) {
    return {
        type: 'ADD_EVENT_OF_THE_DAY',
        payload: eventOfTheDay
    }
}

export function updateEventToDay(eventOfTheDay) {
    return {
        type: 'UPDATE_EVENT_OF_THE_DAY',
        payload: eventOfTheDay
    }
}

export function deleteEventToDay(id) {
    return {
        type: 'DELETE_EVENT_OF_THE_DAY',
        payload: id
    }
}
