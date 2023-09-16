document.addEventListener('keydown',function(event){
    if(event.key.toLocaleLowerCase()=='r'){
        document.body.style.backgroundColor='red'
    }
})

document.addEventListener('keydown',function(event){
    if(event.key.toLocaleLowerCase()=='g'){
        document.body.style.backgroundColor='green'
    }
})

document.addEventListener('keydown',function(event){
    if(event.key.toLocaleLowerCase()=='b'){
        document.body.style.backgroundColor='blue'
    }
})
let box = document.querySelector('.box')

// var element1 = document.getElementById('box').offsetTop
// var element2 = document.getElementById('box').offsetLeft


document.addEventListener('keydown',function(event){
    if(event.key.toLocaleLowerCase()=='s'){
        box.style.top=box.offsetTop+1 + 'px';
    }
})

document.addEventListener('keydown',function(event){
    if(event.key.toLocaleLowerCase()=='w'){
        box.style.top=box.offsetTop-1 + 'px';
    }
})

document.addEventListener('keydown',function(event){
    if(event.key.toLocaleLowerCase()=='a'){
        box.style.left=box.offsetLeft-1 + 'px';
    }
})

document.addEventListener('keydown',function(event){
    if(event.key.toLocaleLowerCase()=='d'){
        box.style.left=box.offsetLeft+1 + 'px';
    }
})




