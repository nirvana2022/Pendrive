#include <WiFi.h>
#include <WebServer.h>

// Reemplaza con tus credenciales de red
const char* ssid = "Soporte-Update";
const char* password = "S0P0RT32026*";

// Definir el pin del LED
const int ledPin2 = 2;

// Crear un servidor web en el puerto 80
WebServer server(80);

void setup() {
  // Configurar el pin del LED como salida
  pinMode(ledPin2, OUTPUT);

  // Iniciar la conexión Wi-Fi
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  
  // Esperar a que se conecte al Wi-Fi
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Conectando a WiFi...");
  }
  
  // Imprimir la dirección IP asignada
  Serial.println("Conectado a WiFi");
  Serial.println(WiFi.localIP());

  // Configurar rutas en el servidor web con autenticación básica
  server.on("/", HTTP_GET, handleRoot);
  server.on("/on", HTTP_GET, handleOn);
  server.on("/off", HTTP_GET, handleOff);

  // Iniciar el servidor web
  server.begin();
  Serial.println("Servidor HTTP iniciado");
}

void loop() {
  // Manejar las solicitudes de los clientes
  server.handleClient();
}

// Manejar la solicitud raíz
void handleRoot() {
  String html = "<!DOCTYPE html><html><head><title>ESP32 Web Server</title><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'></head><body style='background: #ad5389; background: -webkit-linear-gradient(to right, #3c1053, #ad5389); background: linear-gradient(to right, #3c1053, #ad5389);'><nav class='navbar navbar-dark bg-dark'><span class='navbar-brand mb-0 h1'>Control del LED</span></nav><div class='container text-center'><a href='/on' class='btn btn-success btn-lg mt-3'>Encender LED</a><br><a href='/off' class='btn btn-danger btn-lg mt-3'>Apagar LED</a></div></body></html>";
  server.send(200, "text/html", html);
}

// Manejar la solicitud de encender el LED
void handleOn() {
  digitalWrite(ledPin2, HIGH);
  server.send(200, "text/html", "<!DOCTYPE html><html><head><title>ESP32 Web Server</title><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'></head><body style='background: #ad5389; background: -webkit-linear-gradient(to right, #3c1053, #ad5389); background: linear-gradient(to right, #3c1053, #ad5389);'><nav class='navbar navbar-dark bg-dark'><span class='navbar-brand mb-0 h1'>Control del LED</span></nav><div class='container text-center'><h1 class='mt-5'>LED Encendido</h1><a href='/' class='btn btn-primary btn-lg mt-3'>Volver</a></div></body></html>");
}

// Manejar la solicitud de apagar el LED
void handleOff() {
  digitalWrite(ledPin2, LOW);
  server.send(200, "text/html", "<!DOCTYPE html><html><head><title>ESP32 Web Server</title><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'></head><body style='background: #ad5389; background: -webkit-linear-gradient(to right, #3c1053, #ad5389); background: linear-gradient(to right, #3c1053, #ad5389);'><nav class='navbar navbar-dark bg-dark'><span class='navbar-brand mb-0 h1'>Control del LED</span></nav><div class='container text-center'><h1 class='mt-5'>LED Apagado</h1><a href='/' class='btn btn-primary btn-lg mt-3'>Volver</a></div></body></html>");
}