fetch('todos/anony.json').then((response) => {
    console.log(response)
    response.json().then(data=>console.log(data)) 
}).catch(err =>{
    console.log(err)
})