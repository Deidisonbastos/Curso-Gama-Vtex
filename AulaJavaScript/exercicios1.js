const newListForm = document.querySelector("[data-new-list-form]")
const newListInput = document.querySelector("[data-new-list-input]")
const listConteiner = document.querySelector("[data-lists]")


/*
let lists = ['html', 'js']

newListForm.addEventListener("submit", function (e) {
    e.preventDefault()
    const listName = newListInput.value
    if (listName === null || "") return
    const list = create.list(listName)
    newListInput.value = null
    lists.push(list)
    render()
})

function render() {
    lists.forEach(function (list) {
        const item = document.createElement("li")
        item.classList.add("item")
        item.innerText = list.name
        listConteiner.appendChild(item)
    })

    function createList(name){
        return {id: Date.now().toString(), name: name }

    }
    render()