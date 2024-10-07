const express  = require('express');
const corridaRoutes = require("./routes/CorridaRoutes")

const app = express();
app.use(express.json());
app.use('/corridas', corridaRoutes);



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


module.exports = app;