document.addEventListener('DOMContentLoaded', function() {
    
    const imgProfile = document.getElementById('img-profile');
    const nomeProfile = document.getElementById('name-profile');
    const userProfile = document.getElementById('user-profile');
    const repositorio = document.getElementById('repositorio');
    const seguidores = document.getElementById('seguidores');
    const seguindo = document.getElementById('seguindo');
    const linkProfile = document.getElementById('btn-link');

/* 
    testando as const
    console.log(imgProfile, nomeProfile, userProfile, repositorio, seguindo, seguidores, linkProfile);
 */

    fetch('https://api.github.com/users/JoaoVictorAngelo')
    .then(function(res) {
        return res.json();
    })
    .then(function(json){
        imgProfile.src = json.avatar_url;
        nomeProfile.innerHTML = json.name;
        userProfile.innerText = json.login;
        repositorio.innerText = json.public_repos;
        seguidores.innerText = json.followers;
        seguindo.innerText = json.following;
        linkProfile.href = json.html_url;
    })
    .catch(function(erro) {
        alert("Um erro inesperado aconteceu no carregamento, tente novamente mais tarde.");
    })
})