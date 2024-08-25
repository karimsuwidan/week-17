// let myreq=new XMLHttpRequest();
// myreq.open("GET","articles.json");
// myreq.send();
// console.log(myreq);
// myreq.onreadystatechange=function(){
//     if(this.readyState===4 && this.status===200 ){
//         console.log(this.responseText)
//         setTimeout(() => {
//             console.log("data loaded")
//         }, 0);
//     }
// }
// ... ... .. .. .. . .  . . . . . . ..
// ... ... .. .. .. . .  . . . . . . ..
// let myreq=new XMLHttpRequest();
// myreq.open("GET","articles.json");
// myreq.send();
// console.log(myreq);
// myreq.onreadystatechange=function(){
//     if(this.readyState===4 && this.status===200 ){
//         let maindata=JSON.parse(this.responseText)

//         for(i=0; i < maindata.length; i++){
//             maindata[i].category="all"
//         }
//         console.log(maindata)
//         let updateddata=JSON.stringify(maindata)
//         console.log(updateddata)
//     }
// }
// ... ... .. .. .. . .  . . . . . . ..
// ... ... .. .. .. . .  . . . . . . ..
let myreq=new XMLHttpRequest();
myreq.open("GET","articles.json");
myreq.send();
myreq.onreadystatechange = function(){
    if(this.readyState===4 && this.status===200 ){
        let maindata=JSON.parse(this.responseText)
        let div=document.createElement("div")
        div.id="data"

        for(i=0; i < maindata.length; i++){
            let title=document.createElement("h2")
            let titletext=document.createTextNode(maindata[i].title)
            title.appendChild(titletext)

            let body=document.createElement("p")
            let bodytext=document.createTextNode(maindata[i].title)
            body.appendChild(bodytext)

            let author=document.createElement("p")
            let authortext=document.createTextNode(`author :${maindata[i].author}`)
            author.appendChild(authortext)

            let category=document.createElement("p")
            let categorytext=document.createTextNode(`category :${maindata[i].category}`)
            category.appendChild(categorytext)

            let data=document.createElement("div")
            data.appendChild(title)
            data.appendChild(body)
            data.appendChild(author)
            data.appendChild(category)
            div.appendChild(data)
            document.body.appendChild(div)

    }

}

}