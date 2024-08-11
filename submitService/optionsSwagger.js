const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "SubmitJokes MicroService",
            version: "1.0",
            description:
                "Submit Jokes MicroService uses MongoDb atlas to manage the unfiltered jokes sent in from users manages them and allows the moderator to edit and delete jokes.",
            contact: {
                name: "Yehan kapurubandara",
                url: "https://github.com/YowzaK",
                email: "yowzayehan@yahoo.com",
            },
        },
        servers: [
            {
                url: "https://localhost:3000/jokes"

            }
        ],
    },
    apis: ["./Routes/jokeRoutes.js"]
};

module.exports  = {options}