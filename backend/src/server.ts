import express from "express";
import cors from "cors";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", require("./routes/user"));

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
