import fetchCourses from './src/fetchCourses.js'
import displaySingleCourse from './src/displaySingleCourse.js'
import { URL } from './app.js'

const presentCourse = async () => {
  const id = localStorage.getItem('course')
  if (!id) {
    window.location.replace('index.html')
  } else {
    const course = await fetchCourses(`${URL}/${id}`)
    displaySingleCourse(course)
  }
}

window.addEventListener('DOMContentLoaded', presentCourse)
