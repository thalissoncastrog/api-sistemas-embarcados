import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000 || process.env.PORT;

app.listen( PORT, () => {
    console.log(`Servidor escutando em http://localhost:${PORT}`);
});