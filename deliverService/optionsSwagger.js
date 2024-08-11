const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "DeliverJokes MicroService",
            version: "1.0",
            description:
                "Deliver jokes Microservice uses mySQL to store the filtered jokes along with its types and displays these jokes and types",
            contact: {
                name: "Yehan kapurubandara",
                url: "https://github.com/YowzaK",
                email: "yowzayehan@yahoo.com",
            },
        },
        servers: [
            {
                url: "https://localhost:3001/jokes"

            }
        ],
    },
    apis: ["./routes/jokeRoutes.js"]
};

module.exports  = {options}