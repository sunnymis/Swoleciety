export default class DateService {

  static getCurrentWeek() {
    const today = new Date(Date.now());
    const todaysDate = today.getDate();
    const day = today.getDay();
    const weekStart = new Date(today.setDate(todaysDate - day)).getDate();
    const thisMonth = today.getMonth() + 1;
    const thisYear = today.getFullYear().toString().substr(2, 3);
    let formattedDate = `${thisMonth}${weekStart}${thisYear}`;
    if (thisMonth < 10) {
      formattedDate = `0${formattedDate}`;
    }
    return formattedDate;
  }

  static convertFormattedDateToRealDate(formattedDate) {
    const month = parseInt(formattedDate.substr(0, 2), 10) - 1;
    const date = formattedDate.substr(2, 2);
    const year = `20${formattedDate.substr(4, 2)}`;
    return new Date(year, month, date);
  }

  static convertRealDateToFormattedDate(realDate) {
    const date = realDate.getDate();
    const thisMonth = realDate.getMonth() + 1;
    const thisYear = realDate.getFullYear().toString().substr(2, 3);
    let formattedDate = `${thisMonth}${date}${thisYear}`;
    if (thisMonth < 10) {
      formattedDate = `0${formattedDate}`;
    }
    return formattedDate;
  }

  static getNextWeek(week) {
    const currentWeek = this.convertFormattedDateToRealDate(week);
    return new Date(currentWeek.setDate(currentWeek.getDate() + 7));
  }

  static getPreviousWeek(week) {
    const currentWeek = this.convertFormattedDateToRealDate(week);
    return new Date(currentWeek.setDate(currentWeek.getDate() - 7));
  }


}