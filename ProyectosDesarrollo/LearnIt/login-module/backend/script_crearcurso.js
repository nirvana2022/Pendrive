document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const nombre_curso = document.getElementById('nombrecurso').value;
    const especialidad_curso = document.getElementById('especialidadcurso').value;
    const descripcion_curso = document.getElementById('descripcioncurso').value;
    const nivel_curso = document.getElementById('nivelcurso').value;

    try {
        const response = await fetch('http://localhost:3000/crearcurso', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                nombre_curso: nombre_curso, 
                especialidad_curso: especialidad_curso, 
                descripcion_curso: descripcion_curso, 
                nivel_curso: nivel_curso
            })
        });

        const data = await response.json();

        if (response.ok) {
            document.getElementById('registerMessage').textContent = 'Curso creado de forma satisfactoria...';
            document.getElementById('registerMessage').style.color = 'green';
            document.getElementById('registerForm').reset();
            console.log('Curso creado de forma satisfactoria...')
        } else {
            document.getElementById('registerMessage').textContent = data.error || 'Error al crear el curso';
            document.getElementById('registerMessage').style.color = 'red';
        }
    } catch (error) {
        document.getElementById('registerMessage').textContent = 'Error al conectar con el servidor';
        document.getElementById('registerMessage').style.color = 'red';
    }
});