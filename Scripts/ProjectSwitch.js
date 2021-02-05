var bestContent;
var gamesContent;
var otherContent;

var bestButton;
var gamesButton;
var otherButton;

var normalColor = '#8F8F8F';
var checkedColor = '#92097B';

document.addEventListener('DOMContentLoaded', () => 
{
    InitializeElements();
    Best();
});

function InitializeElements()
{
    bestContent = document.getElementById('best');
    gamesContent = document.getElementById('games');
    otherContent = document.getElementById('other');

    bestButton = document.getElementById('bestButt');
    gamesButton = document.getElementById('gamesButt');
    otherButton = document.getElementById('otherButt');
}

function Best()
{
    bestContent.style.display = 'block';
    gamesContent.style.display = 'none';
    otherContent.style.display = 'none';

    bestButton.style.borderColor = checkedColor; 
    gamesButton.style.borderColor = normalColor;
    otherButton.style.borderColor = normalColor;
}

function Games()
{
    bestContent.style.display = 'none';
    gamesContent.style.display = 'block';
    otherContent.style.display = 'none';

    bestButton.style.borderColor = normalColor; 
    gamesButton.style.borderColor = checkedColor;
    otherButton.style.borderColor = normalColor;
}

function Other()
{
    bestContent.style.display = 'none';
    gamesContent.style.display = 'none';
    otherContent.style.display = 'block';

    bestButton.style.borderColor = normalColor; 
    gamesButton.style.borderColor = normalColor;
    otherButton.style.borderColor = checkedColor;
}