let items = [];

const itemsDiv = document.getElementById("itmes")
const input = document.getElementById("ItemInput")
const storageKey = "items";

function renderItem() {
    itemsDiv.innerHTML = null;

    for (const [idx, item] of Object.entries(items)) {

        //addind container div to hold the items 
        const container = document.createElement("div")
        container.style.marginBottom = "10px"

        // crating paragraph tag 
        const text = document.createElement("p")
        text.style.display = "inline"
        text.style.marginRight = "10px"
        text.textContent = item;

        //adding a remove button to remove the item form the list 
        const button = document.createElement("button")
        button.textContent = "Remove"
        button.onclick = () => removeItem(idx)

        container.appendChild(text)
        container.appendChild(button)


        itemsDiv.appendChild(container)
    }
}


function loadItems() {
    //loading the saved items 
    const oldItem = localStorage.getItem(storageKey)
    if(oldItem) items = JSON.parse(oldItem)
        renderItem()
}

function saveItem () {
    //function to save item even after reload 
    const stringItem = JSON.stringify(items);
    localStorage.setItem(storageKey, stringItem)
}

function addItem() {
    //adding items into the list
    const value = input.value;
    if(!value) {
        alert("you cannot add an empty item") // alerting for empty input
        return
    }
    items.push(value)
    renderItem()
    input.value = "";
    saveItem()
}

function removeItem(idx) {
    items.splice(idx, 1)
    renderItem()
    saveItem()
}

document.addEventListener("DOMContentLoaded", loadItems)
