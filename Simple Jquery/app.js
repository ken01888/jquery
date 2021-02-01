$(document).ready(function () {
    /*alert Button*/
    let btn = $('#btnSubmit')
    btn.css("margin","10px")
    btn.click(function () {
    alert("This Button Has Been Clicked")
    })

    let form = $("form input:submit")

    /* Adding Functionality to Input field
    let div = $("<div></div>")
    form.click(function () {
        $("body").append(div).append('<h2 class="blue">' + value + '</h2>')
        $(".blue").mouseover(function () {
        $('.blue').css({ "color": "blue", 
                         "border": "solid 1px", 
                         "border-radius": "10px" })})   
    })*/

    //creating list items
    let ol = $("<ol></ol>")
    $("body").append(ol)
     
    $(form).click(function(){
        let list = $("<li></li>")
        ol.append(list)
        let value = $(':text').val();
        list.append(value)
        $(list).click(function(){
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            $(list).css("color","#"+ randomColor)
            }) 
        $(list).dblclick(function(){
            list.remove()
        })
    })
    $(":text").click(function () {
        form.removeAttr('disabled')
    })












})





