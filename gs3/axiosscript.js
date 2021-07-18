document.getElementById("btn").addEventListener("click", makerequest);
//Promise single data

/*
function makerequest()
{
    console.log("Button clicked")
    axios('https://jsonplaceholder.typicode.com/posts/1').then((res)=>{
        console.log(res)
        console.log("Data", res.data)
        console.log("ID:", res.data.id)
        console.log("Title:", res.data.title)

        console.log("Body:", res.data.body)
    }).catch((error)=>{
        
        console.log(error)
    
    })
}
function makerequest(){
    console.log("Button clicked")
    axios('https://jsonplaceholder.typicode.com/posts/').then((res)=>{
        console.log("Data:", res.data)
      let output=document.getElementById("allpost")
      res.data.forEach(element => {
          output.innerHTML+=`
          
          <div> ID: ${element.id}</div>
          <div> Title: ${element.title}</div>
          <div>BOdy: ${element.body}</div><hr>`
          
          
          
      });

    
    }).catch((error)=>{console.log(error)})
}*/
async function makerequest(){
    try{
        console.log("Button Clicked")
        let output=document.getElementById("allpost")
       const res=await axios('https://jsonplaceholder.typicode.com/posts')

  res.data.forEach(element => {
      
 output.innerHTML+=
   ` <div> ID: ${element.id}</div>
    <div> Title: ${element.title}</div>
    <div>BOdy: ${element.body}</div><hr>`
    
    
  
  });

    } catch(error){
console.log(error)

    }
}