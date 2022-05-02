import { connect } from "react-redux";
import './Calendar.css'
import Year from "../Year/Year";
import Month from "../Month/Month";
import {goBackAYear, goForwardAYear, setSelectedCalendarView} from "../../store/actions/calendar";
import { goBackAMonth, goForwardAMonth } from "../../store/actions/calendar";

const viewOptions = [
    {value: "month-view", label: "Month"},
    {value: "year-view", label: "Year"}
];

const Calendar = props => {

    const { selectedCalendarView, date }  = props

    const formatter = new Intl.DateTimeFormat('en-us', { month: 'long' });

    const year = date.toISOString().substring(0, 4)

    return (
        <div>
            <div className="calendar-header">
                <div>
                    <span onClick={() => {selectedCalendarView === 'month-view' ?
                        props.goBackAMonth(date) : props.goBackAYear(date)}} className="cursor-pointer">
                        {" < "}
                    </span>
                    <span onClick={() => {selectedCalendarView === 'month-view' ?
                        props.goForwardAMonth(date) : props.goForwardAYear(date)}} className="cursor-pointer">
                        {" > "}
                    </span>
                    {selectedCalendarView === 'month-view' && <span>{formatter.format(date)} </span>}
                    <span>{year}</span>
                </div>

                <select value={selectedCalendarView}
                    onChange={(e) => props.setSelectedCalendarView(e.target.value)}>
                    {viewOptions.map((option) => (
                        <option value={option.value} key={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
            <div className={selectedCalendarView === 'month-view' ? 'month-view' : 'year-view'}>
                { selectedCalendarView === 'month-view' ? <Month/> : <Year/> }
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        selectedCalendarView: state.calendar.selectedCalendarView,
        date: state.calendar.date
    }
}

function mapDispatchToProps(dispatch) {
    return {
        goBackAYear(date) {
            const action = goBackAYear(date)
            dispatch(action)
        },
        goForwardAYear(date) {
            const action = goForwardAYear(date)
            dispatch(action)
        },
        goBackAMonth(date) {
            const action = goBackAMonth(date)
            dispatch(action)
        },
        goForwardAMonth(date) {
            const action = goForwardAMonth(date)
            dispatch(action)
        },
        setSelectedCalendarView(selectedView) {
            const action = setSelectedCalendarView(selectedView)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
