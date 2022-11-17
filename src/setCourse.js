const setCourse = (section) => {
  section.addEventListener('click', function (e) {
    const id = e.target.parentElement.dataset.id
    localStorage.setItem('course', id)
  })
}

export default setCourse
