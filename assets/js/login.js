
async function login() {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    let options={
        method:'GET'
    }

    const result =await fetch(`http://localhost:8081/users?email=${email}&password=${password}`,options)
    const response=await result.json()
    console.log(response)
    if (result.status === 200 && response.length>0) {
        localStorage.setItem("user-info", JSON.stringify(response[0]));
        window.location.href='index.html'
    } else {
        let warning = document.getElementById('warn')
        warning.textContent = 'email and password doesnot match'
    }
}