$(document).ready(function(){
    //Step 1 Appending Button to the body
   let button = $('<button></button>').html('Click For 1st Alert')
   $('body').prepend(button)
   $(button).click(function(){
       alert("Good Morning")
   })

   //Step 2
   $('#btn2').click(function(){
       let val = $('h4').html()
       alert(val)
   })

   //Step 3
   $("#div").mouseover(function(){
       $("#div").css('background-color','green')
   })

   $("#div").mouseout(function(){
    $("#div").css('background-color','white')
})

//Step 4
$('p').click(function(){
var randomColor = Math.floor(Math.random() * 16777215).toString(16);
$('p').css('color','#'+randomColor)

})

//Step 5
let button2 = $('<button></button>').text('Click To Get My Name');
$('body').prepend(button2)

let span = $('<span>Kenneth Cunningham</span>');

button2.click(function(){
    $('#name').append(span)
})

//Step 6
let arrFriend = ['Zedrik', 'Jonecia', 'George',
        'Justin', 'Randall', 'Jordan',
        'Olga', "Jodifer", 'Chris', 'Kentez']
 let a = 0
 let b = arrFriend.length
 
 $('#btnUl').click(function(){
     if (a < b){
    let items = $('<li></li>')
    items.text(arrFriend[a]);a++
     $('.list').append(items)
 }})

})