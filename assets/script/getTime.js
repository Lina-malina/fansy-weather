const options = {
  weekday: 'short',
  month: 'long',
  day: '2-digit',
  hour: 'numeric',
  minute: 'numeric',
};
function getDate(timestamp) {
  return new Date(timestamp * 1000);
}
export { options, getDate };
