const text = '01011001 01100001 01100101 01101100 00100000 01000111 01101111 01101100 01100100 01100001';
const speed = 150;
let i = 0;

function typewriter() {
    if (i < text.length) {
        document.getElementById('binary').innerHTML += text.charAt(i);
        i++;
        setTimeout(typewriter, speed);
    }
}

typewriter();