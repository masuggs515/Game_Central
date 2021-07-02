const express = require('express');
const cors = require('cors');

const gameRoutes = require('./routes/gameRoutes')
const platformRoutes = require('./routes/platformRoutes')
const genreRoutes = require('./routes/genreRoutes');
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const { NotFoundError } = require('./expressError');
const morgan = require('morgan');
const { authenticateJWT } = require('./middleware/auth');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(authenticateJWT);

app.use("/games", gameRoutes);
app.use("/platforms", platformRoutes);
app.use("/genres", genreRoutes);
app.use("/auth", authRoutes);
app.use("/users", userRoutes);


 /*  

/:user
/:user/edit
/login
/register


 */

app.use(function (req, res, next){
    return next(new NotFoundError);
});


app.use(function (err, req, res, next) {
    if (process.env.NODE_ENV !== "test") console.error(err.stack);
    const status = err.status || 500;
    const message = err.message;
  
    return res.status(status).json({
      error: { message, status },
    });
  });


module.exports = app;