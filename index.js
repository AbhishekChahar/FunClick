const btn = document.querySelector('button');

btn.addEventListener('mouseover', function() {
    const width = Math.floor(Math.random() * window.innerWidth);
    const height = Math.floor(Math.random() * window.innerHeight);
    const button = document.querySelector('button');
    button.style.top = `${height}px`;
    button.style.left = `${width}px`;
       
} )

btn.addEventListener('click', function() {
    const width = Math.floor(Math.random() * window.innerWidth);
    const height = Math.floor(Math.random() * window.innerHeight);
    document.body.style.backgroundColor = 'green';

    const button = document.querySelector('button');
    button.innerText = "Cool Champ!";

} )
