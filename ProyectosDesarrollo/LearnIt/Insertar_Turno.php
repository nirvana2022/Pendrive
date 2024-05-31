<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Recibe los datos del turno desde la solicitud POST
$data = json_decode(file_get_contents("php://input"));

// Conexión a la base de datos MySQL en XAMPP
$servername = "localhost";
$username = "tu_usuario";
$password = "tu_contraseña";
$dbname = "tu_base_de_datos";

// Crea la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Inserta el nuevo turno en la base de datos
$sql = "INSERT INTO turnos (fecha, estado) VALUES ('$data->fecha', '$data->estado')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(array("message" => "Turno creado exitosamente"));
} else {
    echo json_encode(array("error" => "Error al crear turno: " . $conn->error));
}

// Cierra la conexión
$conn->close();
?>
