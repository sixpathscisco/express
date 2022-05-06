const form = document.getElementById('myform')
const button = document.getElementById('save')

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
});

button.onclick = () => {
    const order = {};

    const inputs = Array.from(form.getElementsByTagName('input'));

    inputs.forEach((field) => {
        const detail = field.getAttribute('name');
        order[detail] = field.value;
    });

    console.log(order);

    let body;
    try{
        body = JSON.stringify(order);
    }
    catch (err) {
        console.log('could not stringify: ', err);
    }

    //fetch configuration options 
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body,
    };

    fetch('http://localhost:3000/order', config)
    .then((response) => response.json())
    .catch((err) => {
        console.log('could not fetch: ', err);
    })
}