import {connect} from "react-redux";
import Modal from 'react-modal';
import { isOpenModal, setSelectedDate, setSelectedEvent } from "../../store/actions/eventCreator";
import EventCreatorModal from "../EventCreatorModal/EventCreatorModal";
import {useEffect} from "react";

const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        height: "17rem",
        width: "22rem",
        bottom: 'auto',
        marginRight: 'auto',
        transform: 'translate(-50%, -50%)',
    },
    overlay: {
        height: "20rem",
        width: "25rem",
        backgroundColor: "#03396c",
        margin: "auto",
        borderRadius: "0.2rem",
    }

};

const Day = props => {

    const { isOpenPopup, selectedDate, eventsOfTheDay, day, date, selectedCalendarView } = props

    const sorter = (sortBy) => (a, b) => a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? 1 : -1;
    const eventsOfTheDayFiltered = eventsOfTheDay.filter((eOTT) => eOTT.selectedDate.getTime() === day.getTime()).sort(sorter('from'))
    const currentDate = new Date(date)
    const receivedDate = new Date(day)

    useEffect(function () {
        if (selectedDate && selectedDate.getTime() === day.getTime()) {
            props.isOpenModal();
        }
    }, [selectedDate])

    const openEventCreator = () => {
        return (
            <Modal
                ariaHideApp={false}
                isOpen={isOpenPopup}
                shouldCloseOnOverlayClick={true}
                style={modalStyles}>
                <EventCreatorModal/>
            </Modal>
        );
    };

    return (
        <div className="day cursor-pointer" onClick={() => props.setSelectedDate(day) }>

            { isOpenPopup && selectedDate && selectedDate.getTime() === day.getTime() && openEventCreator() }

            <div className={currentDate.getMonth() !== receivedDate.getMonth() ? selectedCalendarView === 'month-view' ? 'not-current-month-day' : '' : ''}>
                { String(day.getDate()) }
            </div>

            <div className="events-of-the-day-list">
                { eventsOfTheDayFiltered.map((eventOfTheDay, index) => (
                    <div key={index} className={`event ${eventOfTheDay.color}`} onClick={ () => props.setSelectedEvent(eventOfTheDay) }>
                        <>
                            <small>{eventOfTheDay.title} - {eventOfTheDay.from}</small>
                            <Modal
                                ariaHideApp={false}
                                isOpen={isOpenPopup}
                                shouldCloseOnOverlayClick={true}
                                style={modalStyles}>
                                <EventCreatorModal/>
                            </Modal>
                        </>
                    </div>
                ))}
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        date: state.calendar.date,
        month: state.calendar.month,
        isOpenPopup: state.eventCreator.openModal,
        selectedDate: state.eventCreator.selectedDate,
        eventsOfTheDay: state.day.eventsOfTheDay,
        selectedCalendarView: state.calendar.selectedCalendarView
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setSelectedEvent(selectedEvent) {
            const action = setSelectedEvent(selectedEvent)
            dispatch(action)
        },
        isOpenModal() {
            const action = isOpenModal()
            dispatch(action)
        },
        setSelectedDate(selectedDate) {
            const action = setSelectedDate(selectedDate)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Day)
