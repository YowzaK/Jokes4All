const express = require("express");
const {
  deleteJoke,
  getJoke,
  addModeratedJoke,
  authenticateLogin,
  authenticateToken,
} = require("../controllers/moderatorController");

Router = express.Router();


/**
 * @swagger
 * /delete/{id}:
 *     delete:
 *       summary: Delete a joke
 *       parameters:
 *         - name: id
 *           in: path
 *           description: ID of the joke to delete
 *           required: true
 *           schema:
 *             type: string
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         '200':
 *           description: Joke Deleted
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   success:
 *                     type: boolean
 *                     example: true
 *                   data:
 *                     type: string
 *                     example: Joke Deleted
 *         '401':
 *           description: Unauthorized request, missing or invalid token *
 *       tags:
 *         - moderator
 */
Router.delete("/delete/:id", authenticateToken, deleteJoke);

/**
 * @swagger
 * /getJoke:
 *   get:
 *     summary: Get a joke
 *     description: Returns a joke from the database
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: A joke object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "6422ac4f985e2ecfe87443c3"
 *                       type:
 *                         type: number
 *                         example: 1
 *                       joke:
 *                         type: string
 *                         example: "Insert Joke here"
 *                       __v:
 *                         type: number
 *                         example: 0
 *       '404':
 *         description: Cannot find a joke
 *     tags:
 *       - moderator  
 */
Router.get("/getJoke", authenticateToken, getJoke);



/**
 * @swagger
 * /addNewJoke:
 *     post:
 *       summary: Add a new joke
 *       security:
 *         - bearerAuth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "63f3aa48523acfb6f29eb244"
 *                 type:
 *                   type: integer
 *                   example: 3
 *                 joke:
 *                   type: string
 *                   example: "My dad used to sing little ditties. This was my favorite: There was a young lady named Mabel. She danced on the dining room table. Her face grew red, When the gentleman said ... “Look at the legs on that table!” "
 *               required:
 *                 - _id
 *                 - type
 *                 - joke
 *       responses:
 *         '200':
 *           description: Joke added successfully
 *         '404':
 *           description: Joke cannot be found    
 *       tags:
 *         - moderator
 */
Router.post("/addNewJoke", authenticateToken, addModeratedJoke);

/**
 @swagger
  * paths:
  *   /login:
  *     post:
  *       summary: Log in as a moderator
  *       requestBody:
  *         description: JSON object containing moderator credentials
  *         required: true
  *         content:
  *           application/json:
  *             schema:
  *               type: object
  *               properties:
  *                 username:
  *                   type: string
  *                   example: moderator
  *                 password:
  *                   type: string
  *                   example: p@ssw0rd
  *       responses:
  *         '200':
  *           description: OK
  *           content:
  *             application/json:
  *               schema:
  *                 type: object
  *                 properties:
  *                   accessToken:
  *                     type: string
  *                     description: JSON Web Token (JWT) used for authentication
  *                     example:
  *         '400':
  *            description: incorrect credentials
  *       tags:
  *         - moderator
 */
Router.post("/login", authenticateLogin);

module.exports = Router;
