export const timeConverter = (unixTime) => {
    const newDate = new Date(unixTime * 1000),
        months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        year = newDate.getFullYear(),
        month = months[newDate.getMonth()],
        date = newDate.getDate(),
        hour = newDate.getHours().toString().padStart(2,0),
        min = newDate.getMinutes().toString().padStart(2,0),
        time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min

    return time;
  }