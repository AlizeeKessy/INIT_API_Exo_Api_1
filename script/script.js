fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(res => res.map(user => user.username))
.then(userNames => console.log(userNames));