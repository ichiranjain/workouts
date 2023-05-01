function formatTime(hours, minutes) {
    return `${String(hours).padStart(2, '0')}${String(minutes).padStart(2, '0')}`;
}

function scrollToCurrentTime() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeId = `time-${formatTime(currentHour, currentMinute)}`;

    const timeElements = Array.from(document.querySelectorAll('.time'));
    const timeIds = timeElements.map((el) => el.id);

    let closestTimeId = timeIds.reduce((prev, curr) => {
        const prevDiff = Math.abs(parseInt(prev.split('-')[1]) - parseInt(currentTimeId.split('-')[1]));
        const currDiff = Math.abs(parseInt(curr.split('-')[1]) - parseInt(currentTimeId.split('-')[1]));

        return prevDiff < currDiff ? prev : curr;
    });

    const closestTimeElement = document.getElementById(closestTimeId) || document.querySelector('.time');
    if (closestTimeElement) {
        closestTimeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        closestTimeElement.parentElement.classList.add('highlight');
    }
}

window.addEventListener('DOMContentLoaded', scrollToCurrentTime);

function showSchedule(day) {
    const scheduleContainers = document.querySelectorAll('.schedule-container');
    scheduleContainers.forEach((container) => {
      container.style.display = container.id === day ? 'block' : 'none';
    });
  }
  
  function handleDaySwitch(event) {
    const day = event.target.getAttribute('data-day');
    if (day) {
      showSchedule(day);
    }
  }
  
  function setCurrentDay() {
    const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const today = new Date().getDay();
    const currentDay = dayNames[today];
    showSchedule(currentDay);
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    setCurrentDay();
    scrollToCurrentTime();
  
    const daySwitcher = document.querySelector('.day-switcher');
    daySwitcher.addEventListener('click', handleDaySwitch);
  });
  
