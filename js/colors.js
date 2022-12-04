const cbtn = document.getElementById('cbtn');
const body = document.getElementById('body')
const colors = [ 'white', 'red', 'white', 'black', 'red'];
let index = 0;
let coloor = () => {
    body.style.backgroundColor = colors[index];
    index = index >= colors.length - 1 ? 0 : index + 1;
}

let rak = () => setInterval(coloor, 1)






  

  

