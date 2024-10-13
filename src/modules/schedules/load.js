import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load.js"
import { scheduleShow } from "./show.js"

const selectedDate = document.getElementById("date")

export async function schedulesDay() {
  // obtem a data do input
  const date = selectedDate.value

  // buscar na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date })

  // Exibe os agendamentos
  scheduleShow({ dailySchedules })

  // redenrizar as horas disponiveis
  hoursLoad({ date, dailySchedules })
}