// Comentarios en javascrip en linea
/* Comentarios en parrafos*/
//  OTROS TAMAÑOS DE FOTO TRAIDAS DE LA API
//   <img src="${data.results['0'].picture.medium}" width="200px" class="img-fluid rounded-circle">
//   <img src="${data.results['0'].picture.thumbnail}" width="200px" class="img-fluid rounded-circle">

const URL ='https://randomuser.me/api/';
fetch(URL)
.then(response => response.json() )
.then(data => {

    let elemFoto = document.getElementById('info-img-nombre')
    let elemDatos = document.getElementById('info-datos')
    console.log(data.results['0'])
    elemFoto.innerHTML = `        
        <img src="${data.results['0'].picture.large}" class="perfil-foto" alt="foto de perfil">
        <p class="perfil-nombre"> ${data.results['0'].name.first}, ${data.results['0'].name.last}</p>    
    `
    elemDatos.innerHTML = `        
        <p>Edad: <span class="perfil-datos">${data.results['0'].dob.age}</span> años</p>
        <p>E-mail: <span class="perfil-datos">${data.results['0'].email}</span> </p>
        <p>Teléfono: <span class="perfil-datos">${data.results['0'].phone}</span> </p>    
        <p>País: <span class="perfil-datos">${data.results['0'].location.country}</span> </p>
        <p>Ciudad: <span class="perfil-datos">${data.results['0'].location.city}</span> </p>    
    `
})
.catch(err=>console.log(err))