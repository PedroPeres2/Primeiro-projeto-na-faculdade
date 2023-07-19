var btn = document.querySelector('#show-or-hide')
var sumir = document.querySelector('.sumir')

btn.addEventListener('click', function() {

    if(sumir.style.display === 'block'){
        sumir.style.display = 'none'; 
    }else{
        sumir.style.display = 'block';
    }

});