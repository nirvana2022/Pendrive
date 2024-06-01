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
  server.on("/", handleRoot);
  server.on("/on", []() {
    if (!server.authenticate("admin", "password")) {
      return server.requestAuthentication();
    }
    handleOn();
  });
  server.on("/off", []() {
    if (!server.authenticate("admin", "password")) {
      return server.requestAuthentication();
    }
    handleOff();
  });

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
  String html = "<html><head><style>";
  html += "body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }";
  html += "button { padding: 15px 25px; font-size: 24px; margin: 10px; cursor: pointer; }";
  html += "button.on { background-color: #4CAF50; color: white; }";
  html += "button.off { background-color: #f44336; color: white; }";
  html += "</style></head><body>";
  html += "<h1>Control del LED</h1>";
  html += "<p><a href=\"/on\"><button class=\"on\">Encender LED</button></a></p>";
  html += "<p><a href=\"/off\"><button class=\"off\">Apagar LED</button></a></p>";
  html += "</body></html>";
  server.send(200, "text/html", html);
}

// Manejar la solicitud de encender el LED
void handleOn() {
  digitalWrite(ledPin2, HIGH);
  server.send(200, "text/html", "<html><body><h1>LED Encendido</h1><p><a href=\"/\"><button>Volver</button></a></p></body></html>");
}

// Manejar la solicitud de apagar el LED
void handleOff() {
  digitalWrite(ledPin2, LOW);
  server.send(200, "text/html", "<html><body><h1>LED Apagado</h1><p><a href=\"/\"><button>Volver</button></a></p></body></html>");
}
