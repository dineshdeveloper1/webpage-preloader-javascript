console.log('JS working')

var webLoader = document.querySelector('.preloader')
var loaderInner = document.querySelector('.preloader_inner')
var page = document.querySelector('.page');

webLoader.classList.add('show')

var perCount = 0;

var loadingTime = setInterval(function(){

    perCount = perCount + 1;
    loaderInner.textContent = perCount + '%';

    if(perCount === 100){
        webLoader.classList.remove('show')
        clearInterval(loadingTime)
        page.classList.add('show')
    }

}, 20)