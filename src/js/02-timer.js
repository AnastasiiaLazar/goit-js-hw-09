import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    startBtn: document.querySelector('[data-start]'),
    daysValue: document.querySelector('[data-days]'),
    hoursValue: document.querySelector('[data-hours]'),
    minutesValue: document.querySelector('[data-minutes]'),
    secondsValue: document.querySelector('[data-seconds]'),
}

refs.startBtn.setAttribute('disabled', true);

let userSelectedDate = null;
let timerId = null;
let periodOfTime = null;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0] <= Date.now()) {
          Notiflix.Report.warning("Please choose a date in the future");
      } else {
          refs.startBtn.removeAttribute('disabled');
          userSelectedDate = selectedDates[0];
      }
  },
};

flatpickr("input#datetime-picker", options);

refs.startBtn.addEventListener('click', onTimerStart)

function onTimerStart() {
    refs.startBtn.setAttribute('disabled', true);
    timerId = setInterval(() => {
        const currentTime = Date.now();
        periodOfTime = userSelectedDate - currentTime; 
        
        updateTimer(periodOfTime);
        
        if (periodOfTime < 1000) {
            clearInterval(timerId);
        };

    }, 1000)
}

function updateTimer(timeData) {
    refs.daysValue.textContent = addLeadingZero(convertMs(timeData).days);
    refs.hoursValue.textContent = addLeadingZero(convertMs(timeData).hours);
    refs.minutesValue.textContent = addLeadingZero(convertMs(timeData).minutes);
    refs.secondsValue.textContent = addLeadingZero(convertMs(timeData).seconds);
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


function addLeadingZero(value) {
    return String(value).padStart(2, '0')
}