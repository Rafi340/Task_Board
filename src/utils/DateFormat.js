const DateFormat = (date) => {
  
    const format = new Date(date || new Date());
    
    const formattedDate = format.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    return formattedDate;
}

export default DateFormat;