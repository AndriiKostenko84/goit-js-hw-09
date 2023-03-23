import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix, { Notify } from 'notiflix';

const startBtnEl = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
const inputPicker = document.querySelector('input#datetime-picker');

const timerSpanValue = document.querySelector('.timer span.value');

let intervalId = null;
startBtnEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] > new Date()) {
            Notify.success('Press START to start countdown process');
            startBtnEl.disabled = false;
        } else {
             Notify.failure('Please choose a date in the future');
      }
  },
};

flatpickr('input#datetime-picker', options);

startBtnEl.addEventListener('click', () => {
    startBtnEl.disabled = true;
    intervalId = setInterval(count, 1000);
});