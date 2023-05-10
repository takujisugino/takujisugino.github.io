const redirect = () => { window.location = "/" }
const wait = (ms) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  })
}

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => { window.location = '/' }, 10000)
});
