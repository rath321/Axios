document.getElementById("btn").addEventListener("click", makerequest);

/*
function makerequest(){
    console.log("Button clicked")
    const config={
        method: 'POST', 
        url: 'https://reqres.in/api/users',
        headers: {

            'Content-Type': 'application/json'

        }, data:` {"name": "Sonam", "job": "Web Dev"}`
    }
    axios(config).then((res)=>{
        console.log(res.data)
    }).catch((error)=>{
        console.log(error)
    })
}

function makerequest(){
    console.log("Button Clicked")
    const config={
        method:'POST',//optional
        headers: {
           'Content-Type': 'application/json'
        },
    }
    axios.post('https://reqres.in/api/users', '{"name":"Sonam", "job":"Web Dev"}',config).then((res) => {
console.log(res.data)

    }).catch((err) => {
        console.log(error)
    });
}*/
async function makerequest(){
    try {
        console.log("Button Clicked")
        const config={
            method: 'POST',
            url: 'https://reqres.in/api/users', 
            headers:{
                'Content-Type': 'application/json'
            },
            data:'{"name":"Sonam", "Job":"Web Dev"}'
        }
        const res=await axios(config)
        console.log(res.data)
    }catch (error){
        console.log(error)
    
    }
}