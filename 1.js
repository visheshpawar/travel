function up(x,y)
{
    document.getElementById(x).style.transform="translateY(-200%)";
    document.getElementById(y).style.transform="scale(1.1)";
    document.getElementById(y).style.opacity="0.4";
}
function down(x,y)
{
    document.getElementById(x).style.transform="translateY(0%)";
    document.getElementById(y).style.transform="scale(1)";
    document.getElementById(y).style.opacity="1";
}
