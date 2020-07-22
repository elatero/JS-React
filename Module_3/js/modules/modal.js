// Modal window

function toggleModalWindow(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector)
  modal.classList.toggle('show')

  if (modal.matches('.show')) {
    document.body.style.overflow = 'hidden'

    if (modalTimerId) {
      clearInterval(modalTimerId)
    }
  } else {
    document.body.style.overflow = ''
  }
}

function moadal(triggerSelector, modalSelector, modalTimerId) {
  const modalTrigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector),
    modalCloseBtn = document.querySelector('[data-close]')

  modalTrigger.forEach((btn) =>
    btn.addEventListener('click', () =>
      toggleModalWindow(modalSelector, modalTimerId)
    )
  )

  modalCloseBtn.addEventListener('click', () => {
    toggleModalWindow(modalSelector, modalTimerId)
  })

  modal.addEventListener('click', (e) => {
    const target = e.target
    if (target && target === modal) {
      toggleModalWindow(modalSelector, modalTimerId)
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      toggleModalWindow(modalSelector, modalTimerId)
    }
  })

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      toggleModalWindow(modalSelector, modalTimerId)
      window.removeEventListener('scroll', showModalByScroll)
    }
  }

  window.addEventListener('scroll', showModalByScroll)
}
const modalTimerId = setTimeout(
  () => toggleModalWindow(modalSelector, modalTimerId),
  300000
)
export default moadal
export { toggleModalWindow }
