const images = [
    {'id': '1', 'url': './img/chopper.jpeg'},
    {'id': '1', 'url': './img/lufy.jpeg'},
    {'id': '1', 'url': './img/nami.jpeg'},
    {'id': '1', 'url': './img/robin.jpeg'},
    {'id': '1', 'url': './img/sanji.jpeg'},
    {'id': '1', 'url': './img/zoro.jpeg'},
]

const containerItems = document.getElementById( 'container-items' )

const loadItems = (images, container) =>{
    images.forEach(image =>
        container.innerHTML += `
        <div class='items'>
            <img src = '${image.url}'
        </div>
        `
)}

loadItems(images, containerItems)

let items = document.querySelectorAll('.items')

const previous = () => {
    containerItems.appendChild(items[0])
    items = document.querySelectorAll('.items')
}
const next = () => {
    const lastItem = items[items.length -1]
    containerItems.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.items')
}

document.querySelector('#previous').addEventListener('click', previous)

document.querySelector('#next').addEventListener('click', next)
