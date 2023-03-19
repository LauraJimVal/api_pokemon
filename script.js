document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('input')
    const button = document.querySelector("button")
    const itemContainer = document.querySelector('.item-container')

    button.addEventListener('click', (e) => { // evento click del botón
        e.preventDefault()
        const searchValue = input.value.toLowerCase()
        consultarApi(searchValue)
    })

    function consultarApi (item){ // llamada a la api
        fetch(`https://pokeapi.co/api/v2/pokemon/${item}/`) 
            .then((res) => res.json()) // traer respuesta
            .then((data) => {
                crearItem(data) // llamada a la función para visualizar los datos por pantalla
            }) // traer los datos  
            .catch((error) => { // manejar errores
                console.log(`Ha ocurrido un error: ${error}`);
            });
    }


    function crearItem(item){ // crear los elementos para visualizar los datos por pantalla
        const img = document.createElement('img') 
        img.src = item.sprites.front_default

        const h3 = document.createElement('h3')
        h3.textContent = item.name

        const div = document.createElement('div')
        div.appendChild(img)
        div.appendChild(h3)

        itemContainer.appendChild(div)
    }
})
