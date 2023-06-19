export default function constructUrlFromDate(date: Date) {
  return `/entries/${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()}`;
}
