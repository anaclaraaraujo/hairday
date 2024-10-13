import dayjs from "dayjs"

import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js"

const hours = document.getElementById("hours")

export function hoursLoad({date}) {
  // limpa a lista de horários
  hours.innerHTML = ""


  // definir se o horario esta disponivel
  const opening = openingHours.map((hour) => {

    const [scheduleHour] = hour.split(":")
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())

    return {
      hour, 
      available: isHourPast,
    }
  })

  // redenrizar os horarios
  opening.forEach(({hour, available}) => {
    const li = document.createElement("li")

    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour-unavailable")

    li.textContent = hour

    if(hour === "9:00") {
      hourHearderAdd("Manhã")
    } else if ( hour === "13:00") {
      hourHearderAdd("Tarde")
    } else if (hour === "18:00") {
      hourHearderAdd("Noite")
    }

    hours.append(li)
  })

  hoursClick()
}


function hourHearderAdd(title) {
  const header = document.createElement("li")
  header.classList.add("hour-period")
  header.textContent = title

  hours.append(header)
}