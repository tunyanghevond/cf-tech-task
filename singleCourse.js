import fetchUrl from './src/fetchUrl.js'
import displaySingleCourse from './src/displaySingleCourse.js'
const baseURL = 'https://private-e05942-courses22.apiary-mock.com/courses/'
const ipStackURL = 'http://api.ipstack.com/check'
const key = '597b4fd3c134ec9b05d1ccf4b2fc1434'

const presentCourse = async () => {
  const id = localStorage.getItem('course')
  if (!id) {
    window.location.replace('index.html')
  } else {
    const currentLocation = await fetchUrl(`${ipStackURL}?access_key=${key}`)
    const course = await fetchUrl(`${baseURL}${id}`)
    displaySingleCourse(course, currentLocation.continent_code)
  }
}

window.addEventListener('DOMContentLoaded', presentCourse)
