//setting the array of colors that it will go through
let colorchange = ['#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1'];
let colorindex = 1;

//establising current time
function time(){
    let currentday = new Date();
    let currenthour = currentday.getHours();
    let currentminute = currentday.getMinutes();
    let currentsecond = currentday.getSeconds();
    let currenttime = `${currenthour}:${currentminute}:${currentsecond}`;
    document.getElementById("time").innerHTML= `${currenttime}`;
}

//establishing clock feature
setInterval(function(){
    document.querySelector("body").style.backgroundColor = `${colorchange[colorindex]}`; //establishing the starting color
    colorindex++; //incrementing every second the index of the color array
    //making conditional statement for the array to loop back to first index once it's gone through 
    if (colorindex >= colorchange.length){
        colorindex = 0;
    }
    time(); //calling this function to get the current time every second
},1000);