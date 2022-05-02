import {generateMonths, generateYear} from "../../utils/time";
import moment from "moment";

const initialState = {
    selectedCalendarView: 'month-view',
    date: new Date(),
    year: generateYear(new Date()),
    month: generateMonths(new Date())
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SET_SELECTED_CALENDAR_VIEW':
            return {
                ...state,
                selectedCalendarView: action.payload
            }
        case 'GO_BACK_A_MONTH':
            return {
                ...state,
                month: generateMonths(moment(action.payload).subtract(1, "months").toDate()),
                date: moment(action.payload).subtract(1, "months").toDate()
            }
        case 'GO_FORWARD_A_MONTH':
            return {
                ...state,
                month: generateMonths(moment(action.payload).add(1, "months").toDate()),
                date: moment(action.payload).add(1, "months").toDate()
            }
        case 'GO_BACK_A_YEAR':
            return {
                ...state,
                year: generateYear(moment(action.payload).subtract(1, "years").toDate()),
                date: moment(action.payload).subtract(1, "years").toDate()
            }
        case 'GO_FORWARD_A_YEAR':
            return {
                ...state,
                year: generateYear(moment(action.payload).add(1, "years").toDate()),
                date: moment(action.payload).add(1, "years").toDate()
            }
        default:
            return state
    }
}
