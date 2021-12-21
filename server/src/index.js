const express = require( "express" );
const app = express();
var cors = require('cors');
const port = 8080;
const teamsRouter = require('./routes/teams');
const usersRouter = require('./routes/users');
app.use(cors());

app.use('/teams', teamsRouter);
app.use('/users', usersRouter);

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );