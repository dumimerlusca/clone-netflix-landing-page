

const list = document.querySelector('.items')
const content0 = document.querySelector('#content0')
let list_items = document.querySelectorAll('.items > li')
console.log(list_items)
let content_list = document.querySelectorAll('.items > div')
console.log(content_list)


    //Add event listenr on the ul element
list.addEventListener('click', contentBehaviour)


    // This function dictates the behavior of the li elements
function contentBehaviour(e) {
    if (e.target.tagName == 'LI') {
        if (e.target.nextElementSibling.style.display == '') {
            e.target.nextElementSibling.style.display = 'none';
        }
        
        if (e.target.nextElementSibling.style.display == 'none') {
            displayContent(e.target);
            changeIconToMinus(e.target)
        } else {
            hideContent(e.target);
            changeIconToPlus(e.target)
        }
    } else if (e.target.className == 'fas fa-plus' || e.target.className == 'fas fa-minus') {
        if (e.target.parentElement.nextElementSibling.style.display == '') {
            e.target.parentElement.nextElementSibling.style.display = 'none';
        }

        if (e.target.parentElement.nextElementSibling.style.display == 'none') {
            displayContent(e.target.parentElement);
            changeIconToMinus(e.target.parentElement);
        } else {
            hideContent(e.target.parentElement);
            changeIconToPlus(e.target.parentElement);
        }
    } else if (e.target.className == 'fas fa-times') {
        hideContent(e.target.parentElement.previousElementSibling)
    }
}
    // Diplay the Content
function displayContent(element) {
    element.nextElementSibling.style.display = 'block';
}
    // Hide the content
function hideContent(element) {
    element.nextElementSibling.style.display = 'none';
}
    // Change the + icon to a - icon
function changeIconToMinus(element) {
    element.firstElementChild.className = 'fas fa-minus';
}
    //Change the - icon to a + icon
function changeIconToPlus(element) {
    element.firstElementChild.className = 'fas fa-plus';
}


    //Test the form

const form = document.querySelectorAll('form')
for (let i = 0; i < form.length; i++){
    form[i].addEventListener('submit', function(e) {
        
    
        e.preventDefault();
    })
    
}




