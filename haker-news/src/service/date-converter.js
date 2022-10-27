export const timeConverter = (unixTime) => {
    const newDate = new Date(unixTime * 1000),
        months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        year = newDate.getFullYear(),
        month = months[newDate.getMonth()],
        date = newDate.getDate(),
        hour = newDate.getHours(),
        min = newDate.getMinutes(),
        time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min

    return time;
  }