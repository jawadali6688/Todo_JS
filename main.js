const addBtn = document.getElementsByClassName("addBtn")[0]

const itemName = document.getElementById("itemName")

const tableRowOfTodo = document.getElementById("contentOfTodos")

let todoList = []

let localStorageItem = localStorage.getItem("Todos")


if (localStorageItem) {
    todoList = JSON.parse(localStorageItem)
}

addBtn.addEventListener("click", (event) => {
    event.preventDefault()
    const data = {
        name: itemName.value
    }
    todoList.push(data)
    saveInfo(todoList)
    showDisplay()
    itemName.value = ""
})


function saveInfo(dataList) {
    localStorage.setItem("Todos", JSON.stringify(dataList))
}


// Function to show todos 

function showDisplay() {
    let contentOfTodos = ""

    todoList.map((item, index) => {
        contentOfTodos += `<tr>
                        <td>${index + 1}</td>
                        <td>${item.name}</td>
                        <td class="actionn">
                            <button onClick="editInfo(${index})" class="editBtn">Edit</button>
                            <button onClick="deleteInfo(${index})" class="deleteBtn">Delete</button>
                        </td>
                    </tr>`
    })

    let noResult = `<tr>
                        <td colspan="3">No Data</td>
                    </tr>`

    todoList?.length < 1 ? tableRowOfTodo.innerHTML = noResult : tableRowOfTodo.innerHTML = contentOfTodos

}


function editInfo(index) {
    let editTodo = todoList[index]
    itemName.value = editTodo.name
    todoList.splice(index, 1)
    saveInfo(todoList)
    showDisplay()
}

function deleteInfo(index) {
    todoList.splice(index, 1)
    showDisplay()
    saveInfo(todoList)
}



showDisplay()