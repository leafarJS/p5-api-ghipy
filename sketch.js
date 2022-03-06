let api = "https://api.giphy.com/v1/gifs/search?";
let apiKey = "api_key=K2VGStqDntogxhlo7UZmLesGLFB6LQsw";
let query = "&q=michael+jackson";
let limit = "&limit=25&offset=0&rating=g";
let options = "&lang=es";

function setup() {
  noCanvas();
  let url = `${api}${apiKey}${query}${limit}${options}`;
  loadJSON(url, obtenerDatos);
}
function obtenerDatos(giphy) {
  for (let i = 0; i < giphy.data.length; i++) {
    createImg(giphy.data[i].images.original.url);
  }
}
