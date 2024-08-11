const express = require("express");
const {
  postJoke,
  getJokes,
  getTypes,
  deleteJoke,
  getOneJoke,
} = require("../controllers/jokeController");

router = express.Router();

/**
 @swagger
 * paths:
 *   /add:
 *    post:
  *       summary: Add a new joke
  *       requestBody:
  *         required: true
  *         content:
  *           application/json:
  *             schema:
  *               type: object
  *               properties:
  *                 type:
  *                   type: integer
  *                   description: Type of the joke
  *                 joke:
  *                   type: string
  *                   description: The joke itself
  *               required:
  *                 - type
  *                 - joke
  *       responses:
  *         '200':
  *           description: OK
  *           content:
  *             application/json:
  *               schema:
  *                 type: object
  *                 properties:
  *                   success:
  *                     type: boolean
  *                     description: Indicates if the operation was successful
  *                   data:
  *                     type: object
  *                     properties:
  *                       type:
  *                         type: integer
  *                         description: Type of the joke
  *                       joke:
  *                         type: string
  *                         description: The joke itself
  *                       _id:
  *                         type: string
  *                         description: The unique identifier of the joke
  *                       __v:
  *                         type: integer
  *                         description: Version number of the joke document
  *               example:
  *                 success: true
  *                 data:
  *                   type: 1
  *                   joke: "Insert Joke here"
  *                   _id: "6422ac4f985e2ecfe87443c3"
  *                   __v: 0
 *         '409':
 *           description: Internal server error
 *       tags:
 *         - jokes
 */

router.post("/add", postJoke);

/**
 * @swagger
 * /getAll:
 *   get:
 *       summary: "Get all jokes"
 *       produces:
 *         - "application/json"
 *       responses:
 *         "200":
 *           description: "Successful response"
 *           schema:
 *             type: "object"
 *             properties:
 *               success:
 *                 type: "boolean"
 *                 description: "Whether the request was successful"
 *               data:
 *                 type: "array"
 *                 description: "List of jokes"
 *                 items:
 *                   type: "object"
 *                   properties:
 *                     _id:
 *                       type: "string"
 *                       description: "The joke ID"
 *                     type:
 *                       type: "integer"
 *                       description: "The type of joke"
 *                     joke:
 *                       type: "string"
 *                       description: "The joke text"
 *                     __v:
 *                       type: "integer"
 *                       description: "The joke schema version"
 *         '409':
 *           description: No data found
 *       tags:
 *         - jokes
 */
router.get("/getAll", getJokes);


/**
 @swagger
 * paths:
 *   /getOneJoke:
 *    get:
  *       summary: "Get one joke from database"
  *       produces:
  *         - "application/json"
  *       responses:
  *         200:
  *           description: "OK"
  *           schema:
  *             type: "object"
  *             properties:
  *               success:
  *                 type: "boolean"
  *               data:
  *                 type: "array"
  *                 items:
  *                   type: "object"
  *                   properties:
  *                     _id:
  *                       type: "string"
  *                     type:
  *                       type: "number"
  *                     joke:
  *                       type: "string"
  *                     __v:
  *                       type: "number"
 *         '409':
 *           description: Internal server error
 *       tags:
 *         - jokes
 */
router.get("/getOneJoke", getOneJoke);



/**
 * @swagger
 * /getTypes:
 *   get:
 *       summary: "Get the list of all types"
 *       produces:
 *         - "application/json"
 *       responses:
 *         200:
 *           description: "successful operation"
 *           schema:
 *             type: "array"
 *             items:
 *               type: "string"
 *             example: ["computing", "animal", "Dad Jokes"]
 *         '409':
 *           description: No data found
 *       tags:
 *         - jokes
 */
router.get("/getTypes", getTypes);

/**
 * @swagger
 * /deleteJoke/{jokeId}:
 *   delete:
 *     summary: Deletes a joke
 *     parameters:
 *       - name: jokeId
 *         in: path
 *         description: ID of the joke to be deleted
 *         required: true    
 *     responses:
 *       200:
 *         description: Joke deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the joke was deleted successfully
 *                   example: true
 *                 data:
 *                   type: string
 *                   description: Message indicating the status of the deletion
 *                   example: Joke Deleted
 *       404:
 *         description: Joke not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the deletion failed
 *                   example: false
 *                 message:
 *                   type: string
 *                   description: Error message indicating the reason for failure
 *                   example: Joke not found
 *     tags:
 *       - jokes
 */
router.delete("/deleteJoke/:jokeId", deleteJoke);

module.exports = router;
