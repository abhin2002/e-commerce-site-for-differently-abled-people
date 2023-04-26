const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database")

const cors = require('cors');
app.use(cors({origin:'https://e-commerce-site-for-visually-impaired-people.vercel.app/'}));

//config

dotenv.config({path:"config/config.env"});

//connecting to database

connectDatabase()

app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
  });