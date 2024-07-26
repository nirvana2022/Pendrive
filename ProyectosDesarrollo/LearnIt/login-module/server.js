const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 
const cors = require('cors'); /* Permitir cors dentro de app */
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors()); /* Hacer uso de cors dentro de la app*/

// Conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'RAlexcun92*',
    database: 'db_learnit'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

// Puerto del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Ruta de registro
app.post('/register', async (req, res) => {
    const { nombre_usuario, apellido_usuario, email_usuario, password, rol_usuario } = req.body;

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO usuarios (nombre_usuario, apellido_usuario, email_usuario, password, rol_usuario) VALUES (?, ?, ?, ?, ?)';

    db.query(query, [nombre_usuario, apellido_usuario, email_usuario, hashedPassword, rol_usuario], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Usuario registrado con éxito' });
    });
});

// Ruta de login
app.post('/login', (req, res) => {
    const { email_usuario, password } = req.body;

    const query = 'SELECT * FROM usuarios WHERE email_usuario = ?';

    db.query(query, [email_usuario], async (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const user = results[0];

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const token = jwt.sign({ id: user.id_usuario, rol: user.rol_usuario }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token });
    });
});

// Middleware para verificar el token JWT
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token inválido' });
        }

        req.user = user;
        next();
    });
};

// Ruta para crear curso
app.post('/crearcurso', async (req, res) => {
    const { nombre_curso, especialidad_curso, descripcion_curso, nivel_curso } = req.body;

    
    const query = 'INSERT INTO cursos (nombre_curso, especialidad_curso, descripcion, nivel) VALUES (?, ?, ?, ?)';

    db.query(query, [nombre_curso, especialidad_curso, descripcion_curso, nivel_curso], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Curso Creado' });
    });
});

// Mostrar cursos disponibles
app.get('/cursos', (req, res) => {
    const query = 'SELECT * FROM cursos';

    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
});

// Inscribirse a un curso
app.post('/inscribirse'), authenticateToken, (req, res) => {
    const { curso_id } = req.body;
    const usuario_id = req.user.id;

    const query = 'INSERT INTO inscripcion (curso_inscrito, usuario_id) VALUES (?,?)'

    db.query(query, [curso_id, usuario_id], (err, result) =>{
        if (err) {
            return res.status(500).json({ error: err.message});
        }
        res.status(201).json({ message: 'Inscripción realizada con exito'});
    });
}

// Ruta protegida de ejemplo
app.get('/protected', authenticateToken, (req, res) => {
    res.status(200).json({ message: 'Acceso permitido', user: req.user });
});
