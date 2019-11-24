const app = require("./app");

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on 3000`);
});

//npm start, open your browser and run localhost:port
