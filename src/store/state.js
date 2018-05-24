let chooseCity = '北京'
try {
  if (localStorage.city) {
    chooseCity = localStorage.city
  }
} catch (e) {

}

export default {
  city: chooseCity
}
