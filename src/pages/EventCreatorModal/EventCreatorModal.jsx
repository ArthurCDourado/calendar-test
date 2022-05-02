import {connect} from "react-redux";
import {
    isCloseModal, resetInitialState,
    setColor,
    setDescription,
    setFrom, setSelectedDate,
    setTitle,
    setTo
} from "../../store/actions/eventCreator";
import {addEventToDay, deleteEventToDay, updateEventToDay} from "../../store/actions/day";
import {useEffect} from "react";

const colorOptions = [
    {value: "blue", label: "Blue"},
    {value: "red", label: "Red"},
    {value: "green", label: "Green"},
    {value: "orange", label: "Orange"},
];

const invalidTitle = (title) => {
    if (title.length > 30) {
        alert("Please enter a title with less than 30");
    }
    return title.length > 30;
};

const EventCreatorModal = props => {

    const {title, description, from, to, color, selectedDate, id} = props

    function handleSubmit() {
        if (!invalidTitle(title)) {
            !!id ? props.updateEventToDay({id, title, description, from, to, color, selectedDate}) :
                props.addEventToDay({title, description, from, to, color, selectedDate})
            handleCloseModal()
        }
    }

    function handleDelete() {
        props.deleteEventToDay(id)
        handleCloseModal()
    }

    function handleCloseModal() {
        props.resetInitialState()
        props.isCloseModal();
    }

    useEffect(function () {
        if (!selectedDate) {
            handleCloseModal()
        }
    }, [selectedDate])

    return (
        <form onClick={($event) => $event.stopPropagation()}>
            <header style={{display: 'flex', justifyContent: 'center'}}>
                <input readOnly
                       type="date"
                       value={!!selectedDate ? selectedDate.toISOString().substring(0, 10) : ''}
                />
            </header>
            <div>
                <div style={{marginTop: '10px', marginBottom: '10px'}}>
                    <label>Title: </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => props.setTitle(e.target.value)}
                    />
                </div>
                <div style={{display: 'flex', justifyContent: 'between'}}>
                    <div style={{marginTop: '10px', marginBottom: '10px', marginRight: '10px'}}>
                        <label>From: </label>
                        <input
                            type="time"
                            value={from}
                            onChange={(e) => props.setFrom(e.target.value)}
                        />
                    </div>
                    <div style={{marginTop: '10px', marginBottom: '10px', marginLeft: '10px'}}>
                        <label>To: </label>
                        <input
                            type="time"
                            value={to}
                            onChange={(e) => props.setTo(e.target.value)}
                        />
                    </div>
                </div>
                <div style={{marginTop: '10px', marginBottom: '10px'}}>
                    <label>Color: </label>
                    <select
                        value={color}
                        onChange={(e) => props.setColor(e.target.value)}
                    >
                        {colorOptions.map((option) => (
                            <option value={option.value} key={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', marginTop: '10px', marginBottom: '10px'}}>
                    <label style={{marginBottom: '5px'}}>Description: </label>
                    <textarea
                        value={description}
                        onChange={(e) => props.setDescription(e.target.value)}
                    />
                </div>
            </div>
            <footer style={{textAlign: 'right'}}>
                <button style={{marginLeft: '5px', marginRight: '5px'}} type="button" onClick={() => props.setSelectedDate('')}>Cancel</button>
                <button style={{marginLeft: '5px', marginRight: '5px'}} type="submit" onClick={() => handleSubmit()}>Save</button>
                {id && (
                    <button style={{marginLeft: '5px', marginRight: '5px'}} type="button" onClick={() => handleDelete()}>
                        Delete
                    </button>
                )}
            </footer>
        </form>
    );
};

function mapStateToProps(state) {
    return {
        selectedDate: state.eventCreator.selectedDate,
        title: state.eventCreator.title,
        description: state.eventCreator.description,
        from: state.eventCreator.from,
        to: state.eventCreator.to,
        color: state.eventCreator.color,
        id: state.eventCreator.id
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setTitle(title) {
            const action = setTitle(title)
            dispatch(action)
        },
        setDescription(description) {
            const action = setDescription(description)
            dispatch(action)
        },
        setFrom(date) {
            const action = setFrom(date)
            dispatch(action)
        },
        setTo(date) {
            const action = setTo(date)
            dispatch(action)
        },
        setSelectedDate(date) {
            const action = setSelectedDate(date)
            dispatch(action)
        },
        setColor(color) {
            const action = setColor(color)
            dispatch(action)
        },
        isCloseModal() {
            const action = isCloseModal()
            dispatch(action)
        },
        addEventToDay(eventOfTheDay) {
            const action = addEventToDay(eventOfTheDay)
            dispatch(action)
        },
        updateEventToDay(eventOfTheDay) {
            const action = updateEventToDay(eventOfTheDay)
            dispatch(action)
        },
        deleteEventToDay(id) {
            const action = deleteEventToDay(id)
            dispatch(action)
        },
        resetInitialState() {
            const action = resetInitialState()
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventCreatorModal)
