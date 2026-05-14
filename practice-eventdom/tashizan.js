function tashizan(){
    let lx =Number(document.querySelector('input[name ="left"]').value);
    let rx =Number(document.querySelector('input[name ="right"]').value);
    let f =lx+rx;
    let p =document.querySelector('span#answer');
    p.textContent =f;
}
let b = document.querySelector('button#calc');
b.addEventListener('click',tashizan);