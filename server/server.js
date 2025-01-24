//Servidor de express
const express = require("express");
const http = require("http");
const path = require("path");

class Server {
  constructor() {
    this.app = express();
    this.port = parseInt(process.env.PORT);
    // dbConnection();
    // Http server
    this.server = http.createServer(this.app);
  }

  middlewares() {
    // Desplegar el directorio público
    this.app.use(express.static(path.resolve(__dirname, "../public")));

    // Parseo del body
    this.app.use(express.json());
    /**
     * Habilita los endpoint:
     * APIEndpoints
     */
    this.app.use("/api/services", require("../router/services"));
    // Estado de servicios en linea
    
  }

  execute() {
    // Inicializar middlewares
    this.middlewares();
    // Inicializar server
    this.server.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto : ${this.port}`);
    });
  }
}

module.exports = Server;
