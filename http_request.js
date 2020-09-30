const request = new XMLHttpRequest();

request.addEventListener('readystatechange',()=>{
    // console.log(request,request.readyState)
    if(request.readyState == 4 && request.status == 200){
        console.log(request.responseText)
    } else{
        request
        console.log('could not fetch the data')
    }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/'); // 2 arguments type of string and endpoint.
request.send(); // send request to server whatever was used in open
