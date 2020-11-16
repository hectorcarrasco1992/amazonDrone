const addStory = ()=>{
    let myDiv = document.getElementById("news")
    let myImage = document.getElementById("img-input").value
    let myHeading = document.getElementById("heading-input").value
    let mySub = document.getElementById("sub-input").value
    let myInfo = document.getElementById("info-input").value
    let myBtn = document.getElementById("del")
    
    let newDiv = document.createElement("div")
        newDiv.className = "news-info" 
    let bigDiv = document.createElement("div")
        bigDiv.className="news-card"
    
    console.log(myDiv);
    let newImage = document.createElement("img")
        newImage.src = myImage
        newImage.className="news-img"
    
    let newHeading = document.createElement("h1")
        newHeading.innerText = myHeading

    let newSub = document.createElement("h2")
        newSub.innerText = mySub

    let newInfo = document.createElement("p")
        newInfo.innerText = myInfo

    let arr = [newImage,newHeading,newSub,newInfo,myBtn]
    for(let i of arr){
        newDiv.appendChild(i)
    }

    bigDiv.appendChild(newDiv)

    myDiv.appendChild(bigDiv)

    

}

let delStory = (elem) =>{
    let parent = elem.parentElement.parentElement
    let grandParent = parent.parentElement
    grandParent.removeChild(parent)

}