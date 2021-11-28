export default class DateClass {
  date:Date = new Date()
  y = this.date.getFullYear()
  m = this.date.getMonth();
  d = this.date.getDate()

  datePlus:Date = new Date(this.y, this.m, this.d)

  getDaysPlus(daysPlus:number):string {
    this.datePlus.setDate(this.datePlus.getDate() + daysPlus)
    const day = this.datePlus.getDate().toString()
    return `${this.datePlus.getFullYear()}-${this.datePlus.getMonth()+1}-${day.length > 1 ? day : '0'+day}`
  }

  getMonthPlus():string {
    const lastDay:Date = new Date(this.y, this.m, 0);
    lastDay.setMonth(this.m + 1)
    return lastDay.getFullYear() + '-' + (lastDay.getMonth()+1) + '-' + lastDay.getDate()
  }

  getToday():string {
    return this.y + '-' + (this.m+1)+ '-' + this.d
  }
}
