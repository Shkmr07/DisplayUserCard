function createCard(item){

    let div = document.createElement('div')
    let name = document.createElement('p')
    let username = document.createElement('p')
    let email = document.createElement('p')
    let button = document.createElement('button')

    button.textContent = 'Delete'
    div.className = 'list'
    name.textContent = `Name : ${item.name}`
    username.textContent = `Username : ${item.username}`
    email.textContent = `Email : ${item.email}`

    div.append(name,username,email,button)

    button.addEventListener('click',()=>{
        localStorage.removeItem(`userID : ${item.id}`)
        div.remove()
    })

    return div

}


function getUsers(items){

    let cart = document.getElementById('cart')

    for(let idx = 0; idx < items.length; idx++){
        
        let key = items.key(idx)
        let getItem = localStorage.getItem(key)

        try{
            getItem  = JSON.parse(getItem)
        }
        catch(err){
            throw new Error('fetch failed' + err)
        }

        cart.appendChild(createCard(getItem))

    }
}

getUsers(localStorage)