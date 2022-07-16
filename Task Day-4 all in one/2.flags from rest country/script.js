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
    console.log(data)
    for(let i=0;i<data.length;i++){
        let div = document.createElement("div")
        div.innerHTML = 
        `<div class="card" style="width: 300px;border: 3px solid blue;margin:10px;border-radius:10px;"id=>
        <div class="card-head" style="text-align:center">
            <p>${data[i].name}</p>
        </div>
        
        <div class="card-body" >
        <ul>
                <li>Countries name:<span id="special"><strong>${data[i].name}</strong></span></li>
                <li>Region:<span id=""><strong>${data[i].alpha2Code,data[i].region}</strong></span></li>
                <li>Sub Region:<span id=""><strong>${data[i].subregion}</strong></span></li>
                <li>Population:<span id=""><strong>${data[i].population}</strong></span></li>
        </ul>
        </div>
        </div>`
        card.append(div)
}
})
.catch((err)=>{
    console.log(err)
})    
