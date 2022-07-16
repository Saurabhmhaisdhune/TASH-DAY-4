let card = document.getElementById("card")
console.log(card)

let p = new Promise((resolve,reject)=>{
    let request = new XMLHttpRequest()
    request.open("GET","https://restcountries.com/v2/all",true)
    request.send()
    request.onload = function(){
        let data = JSON.parse(this.response)
        resolve(data)
    }
})

p.then((data)=>{
    for(let i=0;i<data.length;i++){
        let div = document.createElement("div")
        div.innerHTML = 
        `<div class="card" style="width: 300px;border: 3px solid blue;margin:10px;border-radius:10px;"id=>
        <img src="${data[i].flag}"/>
        </div>`
        card.append(div)
       console.log(data[i].flag);
}
})
.catch((err)=>{
    console.log(err)
})    