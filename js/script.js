const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/nbateams";

const resultContainer = document.querySelector(".results");

async function callApi() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);

    const result = json.data;
    console.log(result);

    resultContainer.innerHTML = "";

    for (let i = 0; i < result.length; i++) {

      if (i === 15) {
        break;
      }


      if (result[i].name.startsWith("C") || result[i].name.startsWith("c")) {
        continue;
      }

      resultContainer.innerHTML += `
      <div class="card">
      <h4>Name: ${result[i].name}</p>
      <p> City: ${result[i].city}</p>
      `;
    }



  } catch (error) {
    resultContainer.innerHTML = message("error", error);
  }


}

callApi();
