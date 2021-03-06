// Timer

function timer(id, deadline) {
  function getTimeRemaining(endtime) {
    const t = new Date(endtime) - new Date(),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60)) % 60),
      minutes = Math.floor((t / (1000 * 60)) % 60),
      seconds = Math.floor((t / 1000) % 60)

    return {
      total: t,
      days,
      hours,
      minutes,
      seconds
    }
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`
    } else {
      return num
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(undateClock, 1000)

    undateClock()

    function undateClock() {
      const t = getTimeRemaining(endtime)

      days.textContent = getZero(t.days)
      hours.textContent = getZero(t.hours)
      minutes.textContent = getZero(t.minutes)
      seconds.textContent = getZero(t.seconds)

      if (t.total <= 0) {
        clearInterval(timeInterval)
      }
    }
  }

  setClock(id, deadline)
}

export default timer
