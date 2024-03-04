const touches=[...document.querySelectorAll('.bouton')];

const listeKeycode=touches.map(touche=>touche.dataset.set);
const ecran= document.querySelector('.ecran');


document.addEventListener('keydown',(e)=>{
   
    const valeur= e.keyCode.toString();
   
    calculer(valeur);

})

document.addEventListener('click', (e)=>{

   const valeur=e.target.dataset.set;
   calculer(valeur);
   
})

const calculer= (valeur)=>{
    if(listeKeycode.includes(valeur)){
        
        switch(valeur){
            
            case '8':
                ecran.textContent="";
                
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent= calcul;
                break;
            default:
                // recuperons l'index du keycode
                const indexKeycode=listeKeycode.indexOf(valeur);
                const touche=touches[indexKeycode];
                
                ecran.textContent+=touche.innerHTML;

        }
    }
}

window.addEventListener('error',(e)=>{
    alert('il existe une erreur à ce que vous avez saisi :'+e.error.message)
})
const butons=document.querySelectorAll('.bouton');

butons.forEach((element)=>{
    console.log(element);
    element.addEventListener('click',(e)=>{
        element.classList.toggle('cool');
    })
})