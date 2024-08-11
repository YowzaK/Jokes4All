const express = require('express');
const {postJoke, getAllJokes,getTypes, getOneJoke, getOneJokeFromType} = require('../controllers/jokeController');

router = express.Router();

/**
 @swagger
  * paths:
  *   /add:
  *    post:
  *       summary: Add a new joke to the database
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
  *           description: Joke added successfully
  *           content:
  *             application/json:
  *               schema:
  *                 type: object
  *                 properties:
  *                   success:
  *                     type: boolean
  *                     description: Indicates whether the joke was added successfully
  *                   data:
  *                     type: array
  *                     items:
  *                       type: object
  *                       properties:
  *                         fieldCount:
  *                           type: integer
  *                           description: Number of columns in the result set
  *                         affectedRows:
  *                           type: integer
  *                           description: Number of rows affected by the query
  *                         insertId:
  *                           type: integer
  *                           description: ID of the inserted joke
  *                         info:
  *                           type: string
  *                           description: Additional information about the query
  *                         serverStatus:
  *                           type: integer
  *                           description: Status code of the MySQL server
  *                         warningStatus:
  *                           type: integer
  *                           description: Number of warnings generated by the query
  *         '404':
  *           description: Internal server error
  *       tags:
  *         - jokes
 */
router.post('/add', postJoke);

/**
 @swagger
  * paths:
  *   /getAll:
  *    get:
  *       summary: Get a list of all jokes
  *       description: Returns a list of jokes
  *       responses:
  *         200:
  *           description: OK
  *           schema:
  *             type: object
  *             properties:
  *               data:
  *                 type: array
  *                 items:
  *                   type: object
  *                   properties:
  *                     id:
  *                       type: integer
  *                     type:
  *                       type: integer
  *                     joke:
  *                       type: string
  *         '404':
  *           description: Not found 
  *       tags:
  *         - jokes
 */
router.get('/getAll', getAllJokes);

/**
 @swagger
  * paths:
  *   /getOne:
  *    get:
  *       summary: Retrieve a single random joke from the database
  *       responses:
  *         '200':
  *           description: Joke retrieved successfully
  *           content:
  *             application/json:
  *               schema:
  *                 type: object
  *                 properties:
  *                   data:
  *                     type: array
  *                     items:
  *                       type: object
  *                       properties:
  *                         id:
  *                           type: integer
  *                           description: ID of the joke
  *                         type:
  *                           type: integer
  *                           description: Type of the joke
  *                         joke:
  *                           type: string
  *                           description: The joke itself
  *         '404':
  *           description: No jokes can be found
  *       tags:
  *         - jokes
 */
router.get('/getOne', getOneJoke);

/**
 @swagger
  * paths:
  *   /oneFromTypes/{type}:
  *    get:
  *       summary: Retrieve a random single joke sorted by type
  *       parameters:
  *         - name: type
  *           in: path
  *           description: type of the joke to retrieve
  *           required: true
  *       responses:
  *         '200':
  *           description: Joke retrieved successfully
  *           content:
  *             application/json:
  *               schema:
  *                 type: object
  *                 properties:
  *                   data:
  *                     type: array
  *                     items:
  *                       type: object
  *                       properties:
  *                         id:
  *                           type: integer
  *                           description: ID of the joke
  *                         type:
  *                           type: integer
  *                           description: Type of the joke
  *                         joke:
  *                           type: string
  *                           description: The joke itself
  *         '404':
  *           description: Jokes cannot be found
  *       tags:
  *         - jokes
 */
router.get('/OneFromTypes/:id', getOneJokeFromType);

/**
 @swagger
  * paths:
  *   /getTypes:
  *    get:
  *       summary: Get all joke types
  *       responses:
  *         '200':
  *           description: Joke types retrieved successfully
  *           content:
  *             application/json:
  *               schema:
  *                 type: object
  *                 properties:
  *                   data:
  *                     type: array
  *                     items:
  *                       type: object
  *                       properties:
  *                         id:
  *                           type: integer
  *                           description: ID of the joke type
  *                         types:
  *                           type: string
  *                           description: Name of the joke type
  *         '404':
  *           description: Types cannot be found
  *       tags:
  *         - jokes
 */
router.get('/getTypes', getTypes);

module.exports = router;