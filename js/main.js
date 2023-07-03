const imagesbox = document.querySelector('#images');

const getImages = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    //setCharacters(jsonData.results);
    return await response.json();
};

let images = [];

getImages().then((response) => {
    response.results.forEach((image) => {
        const mydiv =
            `<div class="col-lg-3 mb-4">
                <a href="#" class="">
                    <img class="img-fluid rounded-2" src="${image.image}" alt="Rick & Morty" class="img-home" />
                        <div>
                            <h6>${image.name}</h6>
                        </div>
                    <p>
                        <span >Episodios: </span>
                        <span>${image.episode.length}</span>
                    </p>
                    <p>
                    <span >Estado: </span>
                    <span>${image.status}</span>
                    </p>
                    <p>
                    <span >Especie: </span>
                    <span>${image.species}</span>
                </p>
                </a>
            </div >`;
        imagesbox.innerHTML += mydiv;
    });
});

// const formulario = document.querySelector('#search')

// const buscador = (search) => {
//     imagesbox.innerHTML = ''
//   let a_minusculas = search.toLowerCase();
//    let resultado = images.filter((images_name) => images_name.name.toLowerCase().includes(a_minusculas));
//    console.log(resultado)
//    getImages(resultado)
// };

// formulario.addEventListener("submit", (event)=> {
//   event.preventDefault()
//   let valor_buscado = event.target["image"].value
//   console.log(valor_buscado)
//   buscador(valor_buscado)
// })
