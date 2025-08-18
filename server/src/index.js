//--------BOILER PLATE--------
// Importing our Node modules
import express from "express"; // The framework that lets us easily build a web server
import pg from "pg"; // pg stands for PostgreSQL, for talking to the database
import config from "./config.js"; // we need access to our database connection credentials

// connect to our PostgreSQL database, or db for short
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,// credentials to access the database — keep this private!
  ssl: true, // we will use SSL encryption when connecting to the database
});

const app = express(); // Creating an instance of the express module

app.use(express.json()); // This server will receive and respond in JSON format

const port = 3000; // Declaring which port to listen to to receive requests

// Turning on our server to listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
//-------BOILER ENDS-----
//-----END POINTS---------
app.get("/get-all-suggestions", async (req, res) => {
  try {
    const allSuggestions = await getAllSuggestionsInfo();
    res.json(allSuggestions);
  } catch (error) {
    console.log(error);
  }
});
app.post("/add-one-suggestion", async (req, res) => {
  try {
    const addedSuggestion = req.body;
    addOneSuggestion(addedSuggestion);
    res.send("The suggestion was successfully added!");
  } catch (error) {
    console.log(error);
  }
});

//-----END OF ENDPOINTS---

//-----HELPER FUNCTIONS-----
async function getAllSuggestionsInfo() {
  const result = await db.query("SELECT * FROM suggestions");
  console.log(result);
  return result.rows;
}
async function addOneSuggestion(addedSuggestion) {
  await db.query(
    "INSERT INTO suggestions (title, details, category) VALUES ($1, $2, $3);",
    [addedSuggestion.title, addedSuggestion.details, addedSuggestion.category]
  );
}
