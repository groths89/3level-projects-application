import timezones from "./timezones.js";
//const otherClockDiv = document.createElement('div')
//const timezoneDiv = document.createElement('div')
//const timezonePickerSelect = document.createElement('select')
//otherClockDiv.classList.add('other-clock')
//timezoneDiv.classList.add('timezone')
//timezonePickerSelect.classList.add('timezone_picker')
//document.querySelector('.clocks-container').appendChild(otherClockDiv)
//document.querySelector('.other-clock').appendChild(timezoneDiv)
//document.querySelector('.timezone').appendChild(timezonePickerSelect)
//const timezoneSelect = document.querySelector('.timezone_picker');

//const addClockButton = document.querySelector('.btn_add-clock');

//let timezone, index, jindex, length, llength, selElmnt, newSelElmnt, newOptionsList, newOptionItem;

//timezone = document.getElementsByClassName('timezone');
//length = timezone.length;

//document.addEventListener('DOMContentLoaded', populateTimezones);
//document.addEventListener('DOMContentLoaded', createTimezoneSelect);
//document.addEventListener('click', closeAllSelect);
//otherClockDisplay.prepend(clock);

/* function realtimeTimezone() {
    setInterval(() => {
        let selectedTimezone = document.querySelector('.select-selected');
        let timezoneString = selectedTimezone.textContent;
        let time;
        console.log(timezoneString)
        if(timezoneString !== 'Select Timezone') {
            
            time = new Date().toLocaleTimeString('it-IT', {timeZone: timezoneString});
        } else {
            time = new Date().toLocaleTimeString('it-IT');
        }

        clock.textContent = `${time}`;
    }, 100)
}

function populateTimezones() {
    for (let index = 0; index < timezones.length; index++) {
        const optionTag = document.createElement('option');
        optionTag.value = timezones[index];
        optionTag.textContent = timezones[index];
        timezoneSelect.appendChild(optionTag);
    }
}

function createTimezoneSelect() {
    for (index = 0; index < length; index++) {
        selElmnt = timezone[index].getElementsByTagName('select')[0];
        llength = selElmnt.length;
        newSelElmnt = document.createElement('div');
        newSelElmnt.setAttribute('class', 'select-selected');
        newSelElmnt.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        timezone[index].appendChild(newSelElmnt);
        
        newOptionsList = document.createElement('div');
        newOptionsList.setAttribute('class', 'select-items select-hide');
        
        for (jindex = 1; jindex < llength; jindex++) {
            newOptionItem = document.createElement('div');
            newOptionItem.innerHTML = selElmnt.options[jindex].innerHTML;
            newOptionItem.addEventListener('click', function(e) {
                let y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName('select')[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName('same-as-selected');
                        yl = y.length;
                        for (k = 0; k < yl; k++) {
                            y[k].removeAttribute('class');
                        }
                        this.setAttribute('class', 'same-as-selected');
                        break;
                    }
                }
                h.click();
            });
            newOptionsList.appendChild(newOptionItem);
        }
        timezone[index].appendChild(newOptionsList);
        newSelElmnt.addEventListener('click', function(e) {
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle('select-hide');
            this.classList.toggle('select-arrow-active');
        })
    }
}

function closeAllSelect(elmnt) {
    let x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName('select-items');
    y = document.getElementsByClassName('select-selected');
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i);
        } else {
            y[i].classList.remove('select-arrow-active');
        }
    }
    for(i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add('select-hide');
        }
    }
} */

//realtimeTimezone();