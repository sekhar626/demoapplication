
let warn=document.getElementById('warn')

async function getStoredItems(){
    let options={
        method:'GET'
    }
    const dataFromLocal=await fetch('http://localhost:8081/users',options)
    
    const response=await dataFromLocal.json()
    console.log(response)
    return response
    // let parsedDataFromLocal=JSON.parse(dataFromLocal)
    // if(parsedDataFromLocal===null){
    //     return []
    // }else{
    //     return parsedDataFromLocal
    // }
}

async function submitFormData(formData){

    let options={
        method:'POST',
        headers: {
            "content-type": "application/json",
            Accept: "application/json"
        },
        body:JSON.stringify(formData)
    }
    let result=await fetch('http://localhost:8081/users',options)
    if (result.status===201){
        console.log(formData)
        localStorage.setItem("user-info", JSON.stringify(formData));
        window.location.href='index.html' 
    }
}

async function register(){
    const name=document.getElementById('name').value
    const email=document.getElementById('email').value
    const password=document.getElementById('password').value
    
    if(name==="" || email==="" || password===""){
        warn.textContent="enter all fields"
    }else{
        const localElements=await getStoredItems()
        console.log(localElements)
        const presentEmail=localElements.find(eachElement=>eachElement.email===email)
        if(presentEmail){
            console.log("present")
            warn.textContent="user already registered"
            window.location.href='login.html'
        }else{
            const formData={name,email,password}
            submitFormData(formData)
        }
    }
}