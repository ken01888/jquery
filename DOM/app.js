document.addEventListener("DOMContentLoaded", function () {
    let btn1 = document.createElement('button')
    let btnText = document.createTextNode("Step1")
    btn1.appendChild(btnText)
    document.body.appendChild(btn1)
    btn1.addEventListener('click', function () {
        alert("Happy B'Day to Me!")
    })

    /* let btn2 = document.createElement('button')
     let btn2_Text = document.createTextNode('Step2')
     btn2.appendChild(btn2_Text)
     
     document.body.appendChild(btn2)*/




    /*btn2.addEventListener('click',function(){
        let para = document.createElement("p")
        let text_2=document.createTextNode("Life is but a box of chocolates, you never know what you gonna get")
        para.appendChild(text_2)
        document.body.appendChild(para)
        
    
    })*/
    let x = document.getElementById('btn2');
    x.addEventListener('click', function () {
        let para = document.getElementById('new');
        alert(para.innerHTML)
    })

    let y = document.getElementById('color')
    y.addEventListener('mouseover', function () {
        y.style.background = 'blue'
    })

    y.addEventListener('mouseout', function () {
        y.style.background = 'white'
    })

    let red = document.getElementById('red')

    red.addEventListener('click', function () {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        red.style.color = '#' + randomColor;
    })

    let j = document.getElementById('name1')
    let btnName = document.getElementById('name2')

    j.addEventListener('click', function () {
        let span = document.createElement('span')
        let my_name = document.createTextNode("Kenneth Cunningham ")
        span.appendChild(my_name)
        btnName.appendChild(span)
    })



    let btnFriend = document.getElementById('btnFriend')

    let ulFriend = document.getElementById('friends')




    let arrFriend = ['Zedrik', 'Jonecia', 'George',
        'Justin', 'Randall', 'Jordan',
        'Olga', "Jodifer", 'Chris', 'Kentez']
    let a = 0
    let b = arrFriend.length

    btnFriend.addEventListener('click', function () {

        if (a < b) {
            let li = document.createElement('li')
            let text = document.createTextNode(arrFriend[a]); a++
            li.appendChild(text)
            ulFriend.appendChild(li)
        }


    })


})










