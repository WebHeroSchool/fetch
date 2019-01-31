// let userName = window.location.search.substring(10);
// let gitApi = 'https://api.github.com/users/';
// let gitProfileLink = gitApi + userName;

fetch('https://api.github.com/users/laleniko')
    .then(response => response.json())
    .then(data => profile(data))
    .catch(error => console.log('Информация о пользователе не доступна'));

function profile(data) {
     console.log(data);   
    }