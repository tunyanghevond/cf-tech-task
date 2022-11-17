import get from './getElement.js'
import { hideLoading } from './toggleLoading.js'
const displayCourses = (data) => {
  const section = get('.section-content')
  const error = get('.error')

  if (!data) {
    hideLoading()
    error.textContent = `Sorry, something went wrong`
    section.innerHTML = null
    return
  }

  const newCourses = data
    .map((course) => {
      const { slug: id, title, next_start_formatted: startDate } = course

      return `<article class="course" >
            <h2>${title}</h2>
            <h3>Next course start date <p class='course-dates'>${startDate}</p></h3>
            <a href="/single-course.html">
            <button class="btn"  data-id="${id}">View program 
            </a>
             </button>
           </article>
        `
    })
    .join('')

  hideLoading()
  error.textContent = ''
  section.innerHTML = newCourses
  return section
}
export default displayCourses
