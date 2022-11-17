import fetchUrl from './fetchUrl.js'
import displayCourses from './displayCourses.js'
import setCourse from './setCourse.js'

const showCourses = async (url) => {
  //fetch courses
  const data = await fetchUrl(url)

  //display corses
  const section = await displayCourses(data)
  if (section) {
    setCourse(section)
  }
}

export default showCourses
