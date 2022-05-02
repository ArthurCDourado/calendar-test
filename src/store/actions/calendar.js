export function setSelectedCalendarView(selectedView) {
    return {
        type: 'SET_SELECTED_CALENDAR_VIEW',
        payload: selectedView
    }
}

export function goBackAYear(date) {
    return {
        type: 'GO_BACK_A_YEAR',
        payload: date
    }
}

export function goForwardAYear(date) {
    return {
        type: 'GO_FORWARD_A_YEAR',
        payload: date
    }
}

export function goBackAMonth(date) {
    return {
        type: 'GO_BACK_A_MONTH',
        payload: date
    }
}

export function goForwardAMonth(date) {
    return {
        type: 'GO_FORWARD_A_MONTH',
        payload: date
    }
}
