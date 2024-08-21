document.getElementById('telefone').addEventListener('input', function(e) {
    let input = e.target.value;

    input = input.replace(/\D/g, '');

    if (input.length > 0) {
        input = '(' + input;
    }
    if (input.length > 3) {
        input = input.slice(0, 3) + ') ' + input.slice(3);
    }
    if (input.length > 10) {
        input = input.slice(0, 10) + '-' + input.slice(10, 15);
    }
    
    if (input.length > 15) {
        input = input.slice(0, 15);
    }

    e.target.value = input;
});

document.getElementById('meu-checkbox').addEventListener('click', function() {
    if (this.checked) {
        document.getElementById('telefone').style.display = 'block';
    } else {
        document.getElementById('telefone').style.display = 'none';
    }
});