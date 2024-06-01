#include "esp_camera.h"
#include <WiFi.h>
#include <WebServer.h>

// Reemplaza con tus credenciales de red
const char* ssid = "Soporte-Update";
const char* password = "S0P0RT32026*";

// Pines de la cámara (ajusta estos pines según tu módulo de cámara)
#define PWDN_GPIO_NUM    -1
#define RESET_GPIO_NUM   -1
#define XCLK_GPIO_NUM    21
#define SIOD_GPIO_NUM    26
#define SIOC_GPIO_NUM    27
#define Y9_GPIO_NUM      35
#define Y8_GPIO_NUM      34
#define Y7_GPIO_NUM      39
#define Y6_GPIO_NUM      36
#define Y5_GPIO_NUM      19
#define Y4_GPIO_NUM      18
#define Y3_GPIO_NUM      5
#define Y2_GPIO_NUM      4
#define VSYNC_GPIO_NUM   25
#define HREF_GPIO_NUM    23
#define PCLK_GPIO_NUM    22

// Definir el pin del LED
const int ledPin2 = 2;

// Crear un servidor web en el puerto 80
WebServer server(80);

void startCameraServer();

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

  // Configurar la cámara
  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.pixel_format = PIXFORMAT_JPEG;

  if(psramFound()){
    config.frame_size = FRAMESIZE_VGA;
    config.jpeg_quality = 10;
    config.fb_count = 2;
  } else {
    config.frame_size = FRAMESIZE_CIF;
    config.jpeg_quality = 12;
    config.fb_count = 1;
  }
  
  // Iniciar la cámara
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Error al iniciar la cámara: 0x%x", err);
    return;
  }

  // Iniciar el servidor de la cámara
  startCameraServer();

  // Configurar rutas en el servidor web con autenticación básica
  server.on("/", handleRoot);
  server.on("/on", []() {
    if (!server.authenticate("didierajimenez", "Alexcun92*")) {
      return server.requestAuthentication();
    }
    handleOn();
  });
  server.on("/off", []() {
    if (!server.authenticate("didierajimenez", "Alexcun92*")) {
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
  html += "<h1>Control del LED y Cámara</h1>";
  html += "<p><a href=\"/on\"><button class=\"on\">Encender LED</button></a></p>";
  html += "<p><a href=\"/off\"><button class=\"off\">Apagar LED</button></a></p>";
  html += "<img src=\"/stream\">";
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

void startCameraServer(){
  // Función para iniciar el servidor de la cámara
  // Aquí va el código para iniciar el servidor de la cámara (ver más abajo)
}


