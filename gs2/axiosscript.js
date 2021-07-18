document.getElementById("btn").addEventListener("click", makerequest);
//Promise single data
function makerequest()
{
    console.log("Button clicked")
    axios('https://jsonplaceholder.typicode.com/posts/1').then((res)=>{
        console.log(res)
        console.log(res.data)
    }).catch((error)=>{
        
        console.log(error)
    
    })
}