const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "Curriculum API", version: "1.0.0" },
  },
  components: {
    securitySchemas: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "jwt",
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
  apis: ["routes/contactos-routes.js", "routes/usuarios-routes.js"],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  console.log("Documentacion disponible en http://localhost:5000/docs");
};

module.exports = { swaggerDocs };
