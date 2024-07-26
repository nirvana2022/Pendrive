document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    
    const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre_usuario: nombre, apellido_usuario: apellido, email_usuario: email, password: password })
    });
    
    const data = await response.json();
    
    if (response.ok) {
        document.getElementById('registerMessage').textContent = 'Registro exitoso!';
        document.getElementById('registerMessage').style.color = 'green';
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('registerEmail').value = '';
        document.getElementById('registerPassword').value = '';
    } else {
        document.getElementById('registerMessage').textContent = data.error || 'Registro fallido!';
        document.getElementById('registerMessage').style.color = 'red';
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('registerEmail').value = '';
        document.getElementById('registerPassword').value = '';
    }
});