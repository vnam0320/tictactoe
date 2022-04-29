var items = document.querySelectorAll('.item');
var valueItems = [-1,-2,-3,-4,-5,-6,-7,-8,-9];

var GetStatut = function() {
    if(valueItems[0] == valueItems[1] && valueItems[1] == valueItems[2])
        return 1;      
    else if(valueItems[3] == valueItems[4] && valueItems[4] == valueItems[5])
        return 2;
    else if(valueItems[6] == valueItems[7] && valueItems[7] == valueItems[8])
        return 3;
    else if(valueItems[0] == valueItems[3] && valueItems[3] == valueItems[6])
        return 4;
    else if(valueItems[1] == valueItems[4] && valueItems[4] == valueItems[7])
        return 5;
    else if(valueItems[2] == valueItems[5] && valueItems[5] == valueItems[8])
        return 6;
    else if(valueItems[0] == valueItems[4] && valueItems[4] == valueItems[8])
        return 7;
    else if(valueItems[2] == valueItems[4] && valueItems[4] == valueItems[6])
        return 8;
    else
        return -1;
}
var GameOver = function(where) {
    if(where == 1)
    {
        items[0].style.background = "var(--color-red)";
        items[0].classList.add('item--win');
        items[1].style.background = "var(--color-blue)";
        items[1].classList.add('item--win');
        items[2].style.background = "var(--color-yellow)";
        items[2].classList.add('item--win');
    }
    else if(where == 2)
    {
        items[3].style.background = "var(--color-blue)";
        items[3].classList.add('item--win');
        items[4].style.background = "var(--color-purple)";
        items[4].classList.add('item--win');
        items[5].style.background = "var(--color-blue)";
        items[5].classList.add('item--win');
    }
    else if(where == 3)
    {
        items[6].style.background = "var(--color-yellow)";
        items[6].classList.add('item--win');

        items[7].style.background = "var(--color-blue)";
        items[7].classList.add('item--win');

        items[8].style.background = "var(--color-red)";
        items[8].classList.add('item--win');
    }
    else if(where == 4)
    {
        items[0].style.background = "var(--color-red)";
        items[0].classList.add('item--win');

        items[3].style.background = "var(--color-blue)";
        items[3].classList.add('item--win');

        items[6].style.background = "var(--color-yellow)";
        items[6].classList.add('item--win');
    }
    else if(where == 5)
    {
        items[1].style.background = "var(--color-blue)";
        items[1].classList.add('item--win');

        items[4].style.background = "var(--color-purple)";
        items[4].classList.add('item--win');
        
        items[7].style.background = "var(--color-blue)";
        items[7].classList.add('item--win');
    }
    else if(where == 6)
    {
        items[2].style.background = "var(--color-yellow)";
        items[2].classList.add('item--win');

        items[5].style.background = "var(--color-blue)";
        items[5].classList.add('item--win');

        items[8].style.background = "var(--color-red)";
        items[8].classList.add('item--win');
    }
    else if(where == 7)
    {
        items[0].style.background = "var(--color-red)";
        items[0].classList.add('item--win');

        items[4].style.background = "var(--color-purple)";
        items[4].classList.add('item--win');

        items[8].style.background = "var(--color-red)";
        items[8].classList.add('item--win');
    }
    else
    {
        items[2].style.background = "var(--color-yellow)";
        items[2].classList.add('item--win');

        items[4].style.background = "var(--color-purple)";
        items[4].classList.add('item--win');

        items[6].style.background = "var(--color-yellow)";
        items[6].classList.add('item--win');
    }
    BlockAll();
}
var BlockAll = function() {
    for (let i = 0; i < items.length; i++) {
        items[i].disabled = true;        
    }
}
var isDraw = function() {
    for (let i = 0; i < valueItems.length; i++) {
        if(valueItems[i] < 0)
            return false;
    }
    items[4].classList.add('item--win');
    return true;
}

var counter = 1;
for (let i = 0; i < items.length; i++) {
    items[i].onclick = function() {
        if(!items[i].disabled)
        {
            var rem = document.createElement('i');
            if(counter == 1)
            {
                rem.className = 'fa-solid fa-x';
                valueItems[i] = counter;
                if(GetStatut() != -1)
                {
                    alert("first player win");
                    GameOver(GetStatut());
                }
                else{
                    if(isDraw())
                    {
                        alert("Draw!!");
                    }
                }
                counter = 0;
            }
            else{
                rem.className = 'fa-solid fa-o';
                valueItems[i] = counter;
                if(GetStatut() != -1)
                {
                    alert("second player win");
                    GameOver(GetStatut());
                }
                else{
                    if(isDraw())
                    {
                        alert("Draw!!");
                    }
                }
                counter = 1;
            }

            items[i].firstChild.appendChild(rem);
            items[i].disabled = true;
        }
    }
}

var btnStart = document.querySelector('.btn-start');
btnStart.onclick = function() {
   window.location.reload();
}
