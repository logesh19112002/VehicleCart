function co1(color){

    switch (color)
    {
    case 1:
    i = document.getElementById('img');
    i.style.cssText = 'background-image : url("https://cas.volvocars.com/image/dynamic/MY23_2217/234/exterior-v2/88/70700/RC2000/R188/TC05/2G03/_/JT02/GR03/T101/NP02/TM02/_/_/EV03/JB0C/T21B/LF01/_/VP07/FH01/_/_/_/_/_/default.jpg?market=in&client=gox-graph%7Cpdps&angle=4&w=1366&bg=descriptive-studio")'
    break;
    
    case 2:
    i = document.getElementById('img');
    i.style.cssText = 'background-image : url("https://cas.volvocars.com/image/dynamic/MY23_2217/234/exterior-v2/88/71700/RC2000/R188/TC05/2G03/_/JT02/GR03/T101/NP02/TM02/_/_/EV03/JB0C/T21B/LF01/_/VP07/FH01/_/_/_/_/_/default.jpg?market=in&client=gox-graph%7Cpdps&angle=4&w=1366&bg=descriptive-studio")'
    break;
    
    case 3:
    i = document.getElementById('img');
    i.style.cssText = 'background-image : url("https://cas.volvocars.com/image/dynamic/MY23_2217/234/exterior-v2/88/72300/RC2000/R188/TC05/2G03/_/JT02/GR03/T101/NP02/TM02/_/_/EV03/JB0C/T21B/LF01/_/VP07/FH01/_/_/_/_/_/default.jpg?market=in&client=gox-graph%7Cpdps&angle=4&w=1366&bg=descriptive-studio")'
    break;

    default:
        i.style.cssText = 'background-image : url("https://cas.volvocars.com/image/dynamic/MY23_2217/234/exterior-v2/88/70700/RC2000/R188/TC05/2G03/_/JT02/GR03/T101/NP02/TM02/_/_/EV03/JB0C/T21B/LF01/_/VP07/FH01/_/_/_/_/_/default.jpg?market=in&client=gox-graph%7Cpdps&angle=5&bg=descriptive-studio&h=600")'
        break;
}
}
function cart(){
    c = document.getElementsByTagName('input')[0];
    c.value="Added successfully"
}


