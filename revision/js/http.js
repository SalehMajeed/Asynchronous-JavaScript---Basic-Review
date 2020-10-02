const http_request =
    new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');

let data = [];

http_request.addEventListener('readystatechange', ()=>{
    if (http_request.readyState == 4 && http_request.status == 200) {
        console.log(http_request);
        data = http_request.responseText
        console.log(data)
    }
})

http_request.open('GET',  'https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started', true);
http_request.send();

console.log('data: ',data) // empty because event doesn't happend at that time


// now look at this fetch done all the work in just 2 lines
// var data = fetch('https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started')
// data.then(val => console.log(val))