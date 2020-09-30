const getSomething = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState == 4 && request.status == 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState == 4) {
                reject('error getting resource');
            }
        });

        request.open('GET', resource);
        request.send();
    });
};

getSomething('todos/anony.json').then(data =>{
    console.log('anony: ',data);
    return getSomething('todos/grey.json')
}).then((data) => {
    console.log('grey: ',data)
    return getSomething('todos/persona.json')
}).then(data =>{
    console.log('persona: ',data)
})
