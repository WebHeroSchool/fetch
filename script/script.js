let userName = window.location.search.substring(10);
let gitApi = 'https://api.github.com/users/';
let gitProfileLink = gitApi + userName;

fetch(gitProfileLink)
    .then(response => response.json())
    .then(data => profile(data))
    .catch(error => console.log('Информация о пользователе не доступна'));

function profile(data) {
	 let avatar = data.avatar_url;
	 let name = data.name;
	 let description = data.bio;
	 let profileLink = data.html_url;
     // console.log(data);   

     let avatarElement = document.createElement('img');
     if (avatar != null) {
     	avatarElement.setAttribute('src', avatar);
 	 } else {
 	 	avatarElement.setAttribute('src', 'img/not_found.png');
 	 }
 	 document.body.appendChild(avatarElement);

 	 let nameElement;
     if (name != null && profileLink != null) {
     	nameElement = document.createElement('a');
     	nameElement.setAttribute('href', profileLink);
     	nameElement.innerHTML = name;	
     } else if (name != null && profileLink === null) {
     	nameElement = document.createElement('h1');
     	nameElement.innerHTML = name;
     } else {
     	nameElement = document.createElement('p');
     	nameElement.innerHTML = 'Информация об имени пользователя не доступна';
     }
     document.body.appendChild(nameElement);

     let descriptionElement = document.createElement('p');
     if (description != null) {
     	descriptionElement.innerHTML = description;
     } else {
     	descriptionElement.innerHTML = 'Информация о пользователе не доступна';
     }
     document.body.appendChild(descriptionElement);
    }


//аватарку, имя, описание профиля и ссылку на его страницу.