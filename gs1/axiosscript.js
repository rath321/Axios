document.getElementById("btn").addEventListener("click", makerequest);
/*
function makerequest()
{
    console.log("button ")
    config={
        method="get",
        url:'data.txt'
    }
    const promiseObj=axios(config);
    promiseObj.then((res)=>{
        console.log(res);

    })
}


function makerequest()
{
    console.log("button ")
    config={
        method:"get",
        url:'data.txt'
    }
    axios(config).then((res)=>{
        console.log(res)
        console.log(res.data)
    })
}

function makerequest()
{
    console.log("button ")
   axios.get('data.txt').then((res)=>{
       console.log(res)
       console.log(res.data);
   })
}
function makerequest()
{
    console.log("button ")
    config={
        method:"get",
       
    }
   axios.get('data.txt', config).then((res)=>{
       console.log(res)
       console.log(res.data)
   })
} 
function makerequest()
{
    console.log("button ")
   
   axios.get('data.txt').then((res)=>{
       console.log(res)
       console.log(res.data)
   }).catch((error)=>console.log(error)).then(()=>{
       console.log("clean")
   })
} 

function makerequest()
{
    console.log("button ")
   
   axios.get('data.txt').then((res)=>{
       console.log(res)
       console.log(res.data)
       document.getElementById("divdata").innerText=res.data
   }).catch((error)=>console.log(error))
   }
*/
//Async and Await
async function makerequest(){
    console.log("clicked")
    config={
        method:'get',
        url: 'data.txt'
    }
    const res=await axios(config)
    console.log(res)
    console.log(res.data)
}
