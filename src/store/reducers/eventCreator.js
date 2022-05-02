const initialState = {
    id: null,
    selectedEvent: '',
    selectedDate: '',
    title: '',
    description: '',
    from: '00:00',
    to: '00:00',
    color: 'blue',
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SET_SELECTED_DATE':
            return {
                ...state,
                selectedDate: action.payload
            }
        case 'SET_SELECTED_EVENT':
            return {
                ...state,
                id: action.payload.id,
                selectedDate: action.payload.selectedDate,
                title: action.payload.title,
                from: action.payload.from,
                to: action.payload.to,
                color: action.payload.color,
                description: action.payload.description,
            }
        case 'IS_OPEN_MODAL':
            return {
                ...state,
                openModal: true
            }
        case 'IS_CLOSE_MODAL':
            return {
                ...state,
                openModal: false
            }
        case 'SET_TITLE':
            return {
                ...state,
                title: action.payload
            }
        case 'SET_DESCRIPTION':
            return {
                ...state,
                description: action.payload
            }
        case 'SET_FROM':
            return {
                ...state,
                from: action.payload
            }
        case 'SET_TO':
            return {
                ...state,
                to: action.payload
            }
        case 'SET_COLOR':
            return {
                ...state,
                color: action.payload
            }
        case 'RESET_INITIAL_STATE':
            return {
                ...initialState,
            };
        default:
            return state
    }
}
