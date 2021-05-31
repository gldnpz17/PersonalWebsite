const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default class DateTimeFormatter {
  static parseToHoursAndMinutes(rawDateTime) {
    if (rawDateTime == null) {
      return null;
    }

    var dateTime = new Date(rawDateTime);

    return dateTime.getHours().toString() + ":" + dateTime.getMinutes().toString()
  }
  
  static parseToDate(rawDateTime) {
    if (rawDateTime == null) {
      return null;
    }

    var dateTime = new Date(rawDateTime);

    return dateTime.getDate().toString() + " " + months[dateTime.getMonth()] + " " + dateTime.getFullYear().toString();
  }
}