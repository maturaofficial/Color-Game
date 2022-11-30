 window.onload =function colorGame(){
   
    function randomColor(){
    let colors = ['red', 'blue', 'green', 'yellow', 'pink','white'];
    let SelectedColor = colors[Math.floor(Math.random() * colors.length)];
    return SelectedColor;
    }
    
   let a = randomColor()
   let box1 = document.querySelector('.box1')
   let box2 = document.querySelector('.box2')
   let box3 = document.querySelector('.box3')
   let box4 = document.querySelector('.box4')
   let box5 = document.querySelector('.box5')
   let box6 = document.querySelector('.box6')


box1.addEventListener("click", function(){
    var clickedColor = "red";
    if(clickedColor===a)
    {
        document.getElementById('result').innerHTML = '<h1 id="result pb-3">YOU WIN</h1>'
    }
    else{
        document.getElementById('result').innerHTML = '<h1 id="result pb-3">YOU LOSE</h1>'
    }
    
})

box2.addEventListener("click", function(){
    var clickedColor = "blue";
    if(clickedColor===a)
    {
        document.getElementById('result').innerHTML = '<h1 id="result pt-4">YOU WIN</h1>'
    }
    else{
        document.getElementById('result').innerHTML = '<h1 id="result pt-4">YOU LOSE</h1>'
    }
    
})

box3.addEventListener("click", function(){
    var clickedColor = "green";
    if(clickedColor===a)
    {
        document.getElementById('result').innerHTML = '<h1 id="result pt-4">YOU WIN</h1>'
    }
    else{
        document.getElementById('result').innerHTML = '<h1 id="result pt-4">YOU LOSE</h1>'
    }
    
})

box4.addEventListener("click", function(){
    var clickedColor = "yellow";
    if(clickedColor===a)
    {
        document.getElementById('result').innerHTML = '<h1 id="result pt-4">YOU WIN</h1>'
    }
    else{
        document.getElementById('result').innerHTML = '<h1 id="result pt-4">YOU LOSE</h1>'
    }
    
})

box5.addEventListener("click", function(){
    var clickedColor = "pink";
    if(clickedColor===a)
    {
        document.getElementById('result').innerHTML = '<h1 id="result pt-4">YOU WIN</h1>'
    }
    else{
        document.getElementById('result').innerHTML = '<h1 id="result pt-4">YOU LOSE</h1>'
    }
    
})


box6.addEventListener("click", function(){
    var clickedColor = "white";
    if(clickedColor===a)
    {
        document.getElementById('result').innerHTML = '<h1 id="result pt-4>YOU WIN</h1>'
    }
    else{
        document.getElementById('result').innerHTML = '<h1 id="result pt-4">YOU LOSE</h1>'
    }
    
})
    
   
}
