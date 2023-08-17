export function formatTimestamp(timestamp: number, locale: string = "en-GB"): string {
  const dateTime = new Date(timestamp);

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: "numeric",
    day: "numeric",
  };

  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
  };

  const dateStr = new Intl.DateTimeFormat(locale, dateOptions).format(dateTime)
  const currentDateStr = new Intl.DateTimeFormat(locale, dateOptions).format(new Date())

  if (dateStr === currentDateStr) {
    return new Intl.DateTimeFormat(locale, timeOptions).format(dateTime)
  } else {
    return new Intl.DateTimeFormat(locale, dateTimeOptions).format(dateTime)
  }
}
