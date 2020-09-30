const getTodos = async () => {
    const response = await fetch('todos/persona.json');
    const data = await response.json();
    return data;
};
getTodos().then(data=>console.log(data))