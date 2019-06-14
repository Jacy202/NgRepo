let name = prompt('what is your name',"Name")
let greeting = name.split(" ")
document.querySelector("#pick").innerHTML = `welcome ${greeting}`


let save = document.querySelector("#save")
let array =[]

let value1 = document.getDocumentByClass(".pname").value
let value2 = document.getDocumentByClass(".price").value
let value3 = document.getDocumentByClass(".dmethod").value

save.addEventListener("click",(e)=>{
const product = {
    title : value1,
    price : value2,
    delivery : value3,
}

array.push(product)
JSON.parse(localStorage.getItem(array))
localStorage.setItem('product',JSON.stringify(array))

// const card = document.createElement("div")
// card.className = "prodcard"
// 
})

document.querySelector("#button").addEventListener('click',(e)=>{
    alert ('goodbye')
    // window.location =
  })
  