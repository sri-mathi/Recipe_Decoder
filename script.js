let searchButton = document.querySelector("#search")
searchButton.addEventListener("click", () => {
    console.log("button pressed")
    let name = document.getElementById('Res').value
    console.log(name)
    sendApiRequest(name)
})

async function sendApiRequest(name) {
    const nameRes = name;
    let APP_ID = "148d7a28"
    let API_KEY = "ba4e01b7315cae5c5f14aa1b7f361b47"
    let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${nameRes}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)

}

function useApiData(data) {

    document.querySelector("#content").innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.hits[0].recipe.label}</h5>
      <p class="card-text">Source: ${data.hits[0].recipe.source}</p>
      <a href="${data.hits[0].recipe.url}" class="btn btn-primary">Get Recipe</a>
    </div>
  </div>
`
}
