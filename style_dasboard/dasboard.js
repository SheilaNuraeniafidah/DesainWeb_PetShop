console.log("masuk ke dasboard.js")

document.getElementById('form-search-nav').addEventListener('submit', (event) => {
  event.preventDefault()
  console.log("masuk ke event")
  const keyword = document.getElementById('form-search-nav').querySelector('input').value
  console.log(keyword)
  const data = document.querySelectorAll('.nav-item')
  let benar;

  data.forEach((element, currentIndex) => {
    console.log(element.querySelector('a').innerText)
    if (element.querySelector('a').innerText.toLowerCase() == keyword.toLowerCase()) {
      console.log(element.querySelector('a').innerText.toLowerCase())
      console.log(keyword.toLowerCase())
      benar = currentIndex;
      // Exit the loop once a match is found
      return;
    } else {
      console.log("gagal ditemukan")
    }
  });
  
  if (benar >= 0 ) {
    const elementToClick = document.querySelectorAll('.nav-item').item(benar).querySelector(".nav-link");
    elementToClick.click()
    console.log(elementToClick);
  }
  
  
})