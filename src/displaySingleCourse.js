import { hideLoading } from './toggleLoading.js'
import get from './getElement.js'
const displaySingleCourse = (course) => {
  hideLoading()

  const { description, start_dates, prices } = course
  const list = [
    {
      description,
      startDate: start_dates[0],
      nextStartDateOne: start_dates[1],
      nextStartDateTwo: start_dates[2],
      priceAmount: prices[0].amount,
      priceCurrency: prices[0].currency,
    },
  ]

  const section = get('.single-course')
  const singleCourse = list
    .map((course) => {
      const {
        description,
        startDate,
        nextStartDateOne,
        nextStartDateTwo,
        priceAmount,
        priceCurrency,
      } = course
      return `<article >
      <h1 class="course-title">${description}</h1>
      <h2>
        start date <span>${startDate}</span>
      </h2>
      <h3>
        next possible dates
        <span>${nextStartDateOne}</span>,
        <span>${nextStartDateTwo}</span>
      </h3>
      <h4>
        course price <span>${priceAmount}${priceCurrency}</span>
      </h4>
     <button class="btn">
      <a href="./index.html" >all courses</a>
     </button>
    </article>
        `
    })
    .join('')
  section.innerHTML = singleCourse
}

export default displaySingleCourse
