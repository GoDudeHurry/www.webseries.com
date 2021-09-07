document.getElementsByClassName('name')
document.getElementsByClassName('watched')
document.getElementsByClassName('active')
document.getElementsByTagName('a')
function reload()
{
    alert('Do you want to reload this page.');
}
function watched()
{
    alert('Open text file in new tab?');
}
function home()
{
    alert('Do you really wish to reload the current page?');
}
function stream()
{
    alert('Do you wish to continue\n(This action leads to external window)\n!!!OPEN WITH CAUTION!!!')
}
function IMDB()
{
    document.getElementsByclassName('imdb').style.display=block;
}
function Foot(){
    document.getElementById('footer1').style.display="none";
}