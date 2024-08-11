const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "ModerateJokes MicroService",
      version: "1.0",
      description:
        "ModerateJokes microservice makes use of the SubmitJokes and DeliverJokes API's to manage and moderate jokes in the databases",
      contact: {
        name: "Yehan kapurubandara",
        url: "https://github.com/YowzaK",
        email: "yowzayehan@yahoo.com",
      },
    },
    servers: [
      {
        url: "https://localhost:3002/moderator",
        url: "https://20.241.175.227:3002/moderator"
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./routes/moderatorRoutes.js"],
};

module.exports = { options };
