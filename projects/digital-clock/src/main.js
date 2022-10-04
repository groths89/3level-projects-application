const currentClockDisplay = document.querySelector('.main-clock');
const otherClockDisplay = document.querySelector('.other-clock');
const currentDateDisplay = document.querySelector('.date');
const addClockDisplay = document.querySelector('.add-clock');

const clock = document.createElement('div');
clock.classList.add('clock');

function realtime() {
    const date = new Date();
    const hour = format(date.getHours());
    const minutes = format(date.getMinutes());
    const secconds = format(date.getSeconds());
    const day = date.getDate();
    const year = date.getFullYear();
    const fullMonth = getMonth(date);
    
    currentDateDisplay.textContent = `${fullMonth} ${day}, ${year}`;
    currentClockDisplay.textContent = `${hour}:${minutes}:${secconds}`;

    setTimeout(realtime, 1000)
}

function format(number) {
    if (number < 10) {
        return '0' + number;
    } else {
        return number;
    }
}

function getMonth(date) {
    const month = date.getMonth() + 1;
    let monthInWords;

    switch (month) {
        case 1:
            monthInWords = 'January'
            break;
        case 2:
            monthInWords = 'February'
            break;
        case 3:
            monthInWords = 'March'
            break;
        case 4:
            monthInWords = 'April'
            break;
        case 5:
            monthInWords = 'May'
            break;
        case 6:
            monthInWords = 'June'
            break;
        case 7:
            monthInWords = 'July'
            break;
        case 8:
            monthInWords = 'August'
            break;
        case 9:
            monthInWords = 'September'
            break;
        case 10:
            monthInWords = 'October'
            break;
        case 11:
            monthInWords = 'November'
            break;
        case 12:
            monthInWords = 'December'
            break;
        default:
            break;
    }

    return monthInWords;
}

realtime();

export default realtime;