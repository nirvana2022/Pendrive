#include <WiFi.h>
#include <WebServer.h>
#include <SD.h>

// Reemplaza con tus credenciales de red
const char* ssid = "Soporte-Update";
const char* password = "S0P0RT32026*";

// Crear un servidor web en el puerto 80
WebServer server(80);

void setup() {
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

  // Inicializar la tarjeta microSD
  if (!SD.begin(SS)) {
    Serial.println("Error al inicializar la tarjeta microSD");
    return;
  }

  // Configurar rutas en el servidor web
  server.on("/", HTTP_GET, handleRoot);
  server.on("/script.js", HTTP_GET, handleScript);
  server.on("/styles.css", HTTP_GET, handleStyles);
  server.on("/img/*", HTTP_GET, handleImage);

  // Iniciar el servidor web
  server.begin();
  Serial.println("Servidor HTTP iniciado");
}

void loop() {
  // Manejar las solicitudes de los clientes
  server.handleClient();
}

void handleRoot() {
  // Abrir y enviar el archivo HTML almacenado en la tarjeta microSD
  File file = SD.open("/index.html");
  if (file) {
    while (file.available()) {
      server.streamFile(file, "text/html");
    }
    file.close();
  }
}

void handleScript() {
  // Abrir y enviar el archivo JavaScript almacenado en la tarjeta microSD
  File file = SD.open("/script.js");
  if (file) {
    while (file.available()) {
      server.streamFile(file, "text/javascript");
    }
    file.close();
  }
}

void handleStyles() {
  // Abrir y enviar el archivo CSS almacenado en la tarjeta microSD
  File file = SD.open("/styles.css");
  if (file) {
    while (file.available()) {
      server.streamFile(file, "text/css");
    }
    file.close();
  }
}

void handleImage() {
  String path = server.uri();
  String imagePath = "/img" + path;
  File file = SD.open(imagePath);
  if (file) {
      server.streamFile(file, "image/png"); // Cambia el tipo MIME según el formato de tu imagen
      file.close();
  }
}

