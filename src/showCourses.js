import fetchCourses from './fetchCourses.js'
import displayCourses from './displayCourses.js'

const showCourses = async (url) => {
  //fetch courses
  const data = await fetchCourses(url)

  //display corses
  const section = await displayCourses(data)
  console.log(section)
}

export default showCourses
