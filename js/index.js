import { song } from "./song.js";

const user = document.querySelector('#userField');
const password = document.querySelector('#passwordField');
const buttonLogin = document.querySelector('.loginButton');

buttonLogin.addEventListener('click', acessSystem);

function acessSystem(){

  if(user.value.length >= 6 && password.value.length >= 8){
    alert('Acesso liberado!');
    location.reload();

  }else if(user.value.length < 6){
    alert('Usuário invalido, favor verificar.');

  }else if(password.value.length < 8){
    alert('Senha inválida, favor verificar.');

  }else{
    alert('kebra..');

  }

}

window.onload = () => {
  Particles.init({
    selector: '.background',
    maxParticles: 100,
    sizeVariations: 2,
    speed: 0.6,
    color: '#c8a2c8',
    minDistance: 90,
    connectParticles: true

  });
  song();
};