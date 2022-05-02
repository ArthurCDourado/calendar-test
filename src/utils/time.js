import moment from "moment";

const daysOfTheWeek = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
};

const daysMonth = (date) => {
    return getDaysArray(firstDayOfMonth(date), lastDayOfMonth(date));
};

const firstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1);
};

const lastDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};

const dateMove = (date, numberOfDays, direction) => {
    return direction === "back" ? new Date(moment(date).subtract(numberOfDays, "days")) :
        new Date(moment(date).add(numberOfDays, "days"));
};

const dayOfWeek = (date) => {
    return date.toLocaleDateString('en-US', { weekday: "long" }).toLowerCase();
};



const daysMonthBefore = (date) => {
    const firstDateMonth = firstDayOfMonth(date);
    const dayOfTheWeek = dayOfWeek(firstDateMonth);
    const dateBefore = dateMove(firstDateMonth, daysOfTheWeek[dayOfTheWeek], "back");
    return getDaysArray(dateBefore, firstDateMonth - 1);
};

const daysMonthAfter = (date) => {
    const daysBefore = daysMonthBefore(date).length;
    const daysOfTheMonth = lastDayOfMonth(date).getDate();
    const diff = 42 - daysBefore - daysOfTheMonth;
    const dateAfter = dateMove(lastDayOfMonth(date), diff, "forward");
    const firstDayOfNextMonth = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        1
    );
    return getDaysArray(firstDayOfNextMonth, dateAfter);
};

export function generateMonths(date) {
    return [
        ...daysMonthBefore(date),
        ...daysMonth(date),
        ...daysMonthAfter(date),
    ];
}

const getDaysArray = (start, end) => {
    const arr = [];
    for (const st = new Date(start); st <= end; st.setDate(st.getDate() + 1)) {
        arr.push(new Date(st));
    }
    return arr;
};


// Generates a Year
const getMonthsArray = (start, end) => {
    const arr = [];
    for (const st = new Date(start.getFullYear(), start.getMonth(), start.getDate()); st.getTime() <= end.getTime(); st.setMonth(st.getMonth() + 1)) {
        arr.push(generateMonths(st))
    }
    return arr;
}

const monthsYear = (date) => {
    return getMonthsArray(firstMonthOfYear(date), lastMonthOfYear(date));
};

const firstMonthOfYear = (date) => {
    return new Date(date.getFullYear(), 0, 1);
};

const lastMonthOfYear = (date) => {
    return new Date(date.getFullYear() + 1, 0, 0);
};

export function generateYear(date) {
    return monthsYear(date);
}

