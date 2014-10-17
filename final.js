
var text = document.getElementById("get-text");
text.addEventListener("click", function(e)
{
    e.preventDefault();
    var textBox = document.getElementById("text-box-replace");
    textBox.innerHTML = "world";
});

var color = document.getElementById("get-color");
color.addEventListener("click", function(e)
{
    e.preventDefault();
    var textBox = document.getElementById("text-box-color");
    textBox.style.backgroundColor = "red";
    textBox.innerHTML= "I'm the color red!";

});

var melon = document.getElementById("get-melon");
melon.addEventListener("click", function(e)
{
    e.preventDefault();
    var melonPic = document.getElementById("melon-pic");
    melonPic.setAttribute("src",
        "http://mda.bigoven.com/pics/rs/256/melon-with-chile-salt-and-lime-2.jpg");
});

var beAwesome = document.getElementById("be-awesome");
beAwesome.addEventListener("click", function(e)
{
    e.preventDefault();

    var awesomeBox = document.getElementById("awesome-box");
    awesomeBox.classList.toggle("hidden");
    var value = 0;

    var interval = setInterval(function()
    {
        beAwesome.classList.toggle("hidden");

        // move across the screen from left to right
        if (value < 600)
        {
            value += 200;
        }
        else if (value == 600)
        {
            value = 0;
        }
        awesomeBox.className = "absolute";
        awesomeBox.style.left = value + "px";

        // awesomeBox.classList.toggle("move-right"); // bounce back and forth

    }, 1000);

    setTimeout(function()
    {
        clearInterval(interval);
    }, 9000);
});





