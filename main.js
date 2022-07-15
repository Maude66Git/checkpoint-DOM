
/*Voici mon code pour l'incrémentation et la décremntation*/
let btnPlusAll = document.querySelectorAll('.btn-act-plus');
let btnMoinsAll = document.querySelectorAll('.btn-act-moins');

btnPlusAll.forEach((btn) => {btn.addEventListener('click', increaseQuantity)});
btnMoinsAll.forEach((btn) => {btn.addEventListener('click', decreaseQuantity)});

totaux()

function increaseQuantity(){
    this.previousElementSibling.value = parseInt(this.previousElementSibling.value) +1;
    totaux();
}

function decreaseQuantity(){
    if(this.nextElementSibling.value >0){
    this.nextElementSibling.value = parseInt(this.nextElementSibling.value) -1;
    totaux();
    }
}



/*Supprimer un produit*/ 
let suppr = document.querySelectorAll('.remove');

for(let i=0; i <suppr.length; i++){
    suppr[i].addEventListener('click', function(){
        suppr[i].parentNode.remove()
        totaux()
    })
}


/*faire le total du panier*/

function totaux(){
    console.log('calcul des totaux')
    let item = document.querySelectorAll('.Cart-Item');
    let sum = 0
   
    for (let i = 0; i < item.length; i++){
        
        const price = item[i].querySelector('.price').innerHTML
        const qty = item[i].querySelector('.qty').value

        sum += price * qty
        
    }
    document.querySelector('.totalamount').innerHTML = sum + ' €'
    
}


/*Ouvir l'image coeur en cliquant */

function changeImage(){
    let image = document.getElementById('heart-ic-size');
    //if l'image est un coeur vide alors au click mettre un coeur plein
    if (image.src.match('coeur-vide2')){
        image.src = "images/coeur-plein2.jpg";
        
    }

    else {
        image.src = "images/coeur-vide2.jpg";
}
}



/*let imgHeart = document.getElementById('heart-ic-size');

for (let i=0; i< imgHeart.length; i++){
    imgHeart[i].addEventListener('click', changeImage);
}

function changeImage(){
    //if l'image est un coeur vide alors au click mettre un coeur plein
    if (imgHeart[i].src == "images/coeur-vide2.jpg"){
        document.getElementById('heart-ic-size').src="images/coeur-plein2.jpg";
        
    }

    else {
        document.getElementById('heart-ic-size').src="images/coeur-vide2.jpg"
}
}*/

function changeImages(){
    let image = document.getElementById('heart-ic-sizes');
    //if l'image est un coeur vide alors au click mettre un coeur plein
    if (image.src.match('coeur-vide2')){
        image.src = "images/coeur-plein2.jpg";
        
    }

    else {
        image.src = "images/coeur-vide2.jpg";
}
}






