import fetchCourses from './fetchCourses.js'
import displayCourses from './displayCourses.js'
import setCourse from './setCourse.js'

const showCourses = async (url) => {
  //fetch courses
  const data = await fetchCourses(url)

  //display corses
  const section = await displayCourses(data)
  if (section) {
    setCourse(section)
  }
}

export default showCourses
