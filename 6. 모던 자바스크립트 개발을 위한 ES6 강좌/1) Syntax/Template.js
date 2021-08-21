const data = [
    {
        name : 'coffee-bean',
        order : true,
        items : ['americano', 'milk', 'green-tea']
    },
    {
        name : 'starbucks',
        order : false,
    }
]

const template = `<div>welcome ${data[0].name} !!</div>`;
console.log(template);