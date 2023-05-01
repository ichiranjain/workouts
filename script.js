function scrollToCurrentTime() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeId = `time-${String(currentHour).padStart(2, '0')}${String(currentMinute).padStart(2, '0')}`;

    const timeElement = document.getElementById(currentTimeId) || document.querySelector('.time');
    if (timeElement) {
        timeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

window.addEventListener('DOMContentLoaded', scrollToCurrentTime);
