export function isOpenModal() {
    return {
        type: 'IS_OPEN_MODAL'
    }
}

export function isCloseModal() {
    return {
        type: 'IS_CLOSE_MODAL'
    }
}

export function setTitle(title) {
    return {
        type: 'SET_TITLE',
        payload: title
    }
}

export function setDescription(description) {
    return {
        type: 'SET_DESCRIPTION',
        payload: description
    }
}

export function setFrom(date) {
    return {
        type: 'SET_FROM',
        payload: date
    }
}

export function setTo(date) {
    return {
        type: 'SET_TO',
        payload: date
    }
}

export function setColor(color) {
    return {
        type: 'SET_COLOR',
        payload: color
    }
}

export function setSelectedDate(selectedDate) {
    return {
        type: 'SET_SELECTED_DATE',
        payload: selectedDate
    }
}

export function resetInitialState() {
    return {
        type: 'RESET_INITIAL_STATE'
    }
}

export function setSelectedEvent(selectedEvent) {
    return {
        type: 'SET_SELECTED_EVENT',
        payload: selectedEvent
    }
}

