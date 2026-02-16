const imgDiv = document.getElementById('imgDiv');
const textDiv = document.getElementById('textDiv');

textDiv.addEventListener('mouseenter', () => {
    textDiv.style.flex = '1.5';  
    imgDiv.style.flex = '0.5';  
});

textDiv.addEventListener('mouseleave', () => {
    textDiv.style.flex = '1';     
    imgDiv.style.flex = '0 0 60%'; 
});

imgDiv.addEventListener('mouseenter', () => {
    imgDiv.style.flex = '1.5';    
    textDiv.style.flex = '0.5';   
});

imgDiv.addEventListener('mouseleave', () => {
    imgDiv.style.flex = '0 0 60%'; 
    textDiv.style.flex = '1';    
});


const links = document.querySelectorAll('#navBar .navLinks li a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const headerText = this.getAttribute('data-header');
        const paragraphText = this.getAttribute('data-paragraph');

        textDiv.innerHTML = `<h1>${headerText}</h1><p>${paragraphText}</p>`;
    });
});
