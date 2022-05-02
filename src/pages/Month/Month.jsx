import {connect} from "react-redux";
import Day from "../Day/Day";

const weekDays = {
    S: 'sunday',
    M: 'monday',
    Tu: 'tuesday',
    W: 'wednesday',
    T: 'thursday',
    F: 'friday',
    Sa: 'saturday',
};

const Month = props => {

    const { month, monthOfYear, selectedCalendarView }  = props

    return (
        <div className="month">
            <div className="weekNames">
                {Object.keys(weekDays).map((day, index) => (
                    <div key={index}>{ day }</div>
                ))}
            </div>
            <div className="days-disposition">
                {selectedCalendarView === 'month-view' ?
                    month.map((day, index) => (<Day day={day} key={index}/>)) :
                    monthOfYear.map((day, index) => (<Day day={day} key={index}/>))}
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        month: state.calendar.month,
        selectedCalendarView: state.calendar.selectedCalendarView
    }
}

export default connect(mapStateToProps)(Month)
