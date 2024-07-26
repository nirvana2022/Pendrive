async function fetchCursos() {
    try {
        const response = await fetch('http://localhost:3000/cursos');
        const cursos = await response.json();
        
        const cursosContainer = document.getElementById('cursos-container');
        cursosContainer.innerHTML = '';

        cursos.forEach(curso => {
            const cursoDiv = document.createElement('div');
            cursoDiv.className = 'curso';
            cursoDiv.innerHTML = `
                <h3>${curso.nombre_curso}</h3>
                <p>Especialidad: ${curso.especialidad_curso}</p>
                <p>Descripción: ${curso.descripcion}</p>
                <p>Nivel: ${curso.nivel}</p>
                <button onclick="inscribirse(${curso.id_curso})">Inscribirse</button>
            `;
            cursosContainer.appendChild(cursoDiv);
        });
    } catch (error) {
        console.error('Error fetching cursos:', error);
    }
}

async function inscribirse(cursoId) {
    const token = localStorage.getItem('token');
    if (!token) {
        alert('Por favor, inicie sesión para inscribirse en un curso.');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/inscribirse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ curso_id: cursoId })
        });

        const data = await response.json();

        if (response.ok) {
            alert('Inscripción realizada con éxito');
        } else {
            alert(data.error || 'Error al inscribirse en el curso');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error al conectar con el servidor');
    }
}

document.addEventListener('DOMContentLoaded', fetchCursos);