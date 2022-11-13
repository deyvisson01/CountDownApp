import * as dayjs from 'dayjs'

export function getDays(date1: string): string {

  let diffM = new Date(date1).getTime() - new Date().getTime()

  let diffDays = diffM / (1000 * 60 * 60 * 24)

  return diffDays.toFixed(0)
}

export function calcFutureDate(count: number): string {
  var date = new Date();
  var newDate = new Date();
  newDate.setDate(date.getDate() + count);
  return dayjs(newDate).format('YYYY-MM-DDTHH:mm:ss')
}

export function getRamdomValue(): number {
  return Math.floor(Math.random() * 999)
}
