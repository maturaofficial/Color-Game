//  ColorGame
 
 
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
        document.getElementById('result').innerHTML = '<h1 id="result" style="color:green">YOU WIN!</h1>';
        document.getElementById('wincolor').innerHTML = 'Result: '+'<span style="color:'+a+'">'+a+'</span>';
    }
    else{
        document.getElementById('result').innerHTML = '<h1 id="result" style="color:red">YOU LOSE!</h1>';
        document.getElementById('wincolor').innerHTML ='Result: '+'<span style="color:'+a+'">'+a+'</span>';
    }
    
})

box2.addEventListener("click", function(){
    var clickedColor = "blue";
    if(clickedColor===a)
    {
        document.getElementById('result').innerHTML = '<h1 id="result" style="color:green">YOU WIN!</h1>';
        document.getElementById('wincolor').innerHTML = 'Result: '+'<span style="color:'+a+'">'+a+'</span>';
    }
    else{
        document.getElementById('result').innerHTML = '<h1 id="result" style="color:red">YOU LOSE</h1>';
        document.getElementById('wincolor').innerHTML = 'Result: '+'<span style="color:'+a+'">'+a+'</span>';
    }
    
})

box3.addEventListener("click", function(){
    var clickedColor = "green";
    if(clickedColor===a)
    {
        document.getElementById('result').innerHTML = '<h1 id="result" style="color:green">YOU WIN!</h1>';
        document.getElementById('wincolor').innerHTML = 'Result: '+'<span style="color:'+a+'">'+a+'</span>';
    }
    else{
        document.getElementById('result').innerHTML = '<h1 id="result" style="color:red">YOU LOSE</h1>'
        document.getElementById('wincolor').innerHTML = 'Result: '+'<span style="color:'+a+'">'+a+'</span>';
    }
    
})

box4.addEventListener("click", function(){
    var clickedColor = "yellow";
    if(clickedColor===a)
    {
        document.getElementById('result').innerHTML = '<h1 id="result" style="color:green">YOU WIN!</h1>';
        document.getElementById('wincolor').innerHTML = 'Result: '+'<span style="color:'+a+'">'+a+'</span>';
    }
    else{
        document.getElementById('result').innerHTML = '<h1 id="result" style="color:red">YOU LOSE</h1>'
        document.getElementById('wincolor').innerHTML = 'Result: '+'<span style="color:'+a+'">'+a+'</span>';
    }
    
    
})

box5.addEventListener("click", function(){
    var clickedColor = "pink";
    if(clickedColor===a)
    {
        document.getElementById('result').innerHTML = '<h1 id="result" style="color:green">YOU WIN!</h1>';
        document.getElementById('wincolor').innerHTML = 'Result: '+'<span style="color:'+a+'">'+a+'</span>';
    }
    else{
        document.getElementById('result').innerHTML = '<h1 id="result" style="color:red">YOU LOSE</h1>'
        document.getElementById('wincolor').innerHTML = 'Result: '+'<span style="color:'+a+'">'+a+'</span>';
    }
    
})


box6.addEventListener("click", function(){
    var clickedColor = "white";
    if(clickedColor===a)
    {
        document.getElementById('result').innerHTML = '<h1 id="result" style="color:green">YOU WIN!</h1>';
        document.getElementById('wincolor').innerHTML = 'Result: '+'<span style="color:'+a+'">'+a+'</span>';
        
    }
    else{
        document.getElementById('result').innerHTML = '<h1 id="result" style="color:red">YOU LOSE</h1>'
        document.getElementById('wincolor').innerHTML = 'Result: '+'<span style="color:'+a+'">'+a+'</span>';
    }
    
}) 
   
}

function resetGame(){
    window.location.reload();   
    
}
