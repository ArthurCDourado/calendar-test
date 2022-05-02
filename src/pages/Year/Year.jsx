import {connect} from "react-redux";
import Month from "../Month/Month";

const Year = props => {

    const { year }  = props

    const formatter = new Intl.DateTimeFormat('en-us', { month: 'long' });

    return (
        <>
            {year.map((month, index) => (
                <div key={index}>
                    <div className="month-name">{formatter.format(month[index + 10])}</div>
                    <Month monthOfYear={month}/>
                </div>
            ))}
        </>
    );
};

function mapStateToProps(state) {
    return {
        year: state.calendar.year
    }
}

export default connect(mapStateToProps)(Year)
