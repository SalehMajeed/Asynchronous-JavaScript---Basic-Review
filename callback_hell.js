const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        // console.log(request,request.readyState)
        if (request.readyState == 4 && request.status == 200) {
            const data = JSON.parse(request.responseText)
            callback(undefined, data);
        } else if (request.readyState == 4) {
            callback('could not fetch data', undefined);
        }
    });

    request.open('GET', resource); // 2 arguments type of string and endpoint.
    request.send(); // send request to server whatever was used in open
};

getTodos('todos/anony.json', (err, data) => {
    console.log(data)
    getTodos('todos/grey.json', (err, data) => {
        console.log(data);
        getTodos('todos/persona.json', (err, data) => {
            console.log(data);
        });
    });
});
