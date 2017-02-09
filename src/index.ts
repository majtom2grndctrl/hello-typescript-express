import * as express from "express"
import * as path from "path"

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Typescript!');
})

app.get('/:name', (req, res) => {
  const name: string = req.params.name;
  res.send('Hello ' + name + '!');
})

app.listen('8080');
console.log('\nApp is running. To view it, open a web browser to http://localhost:8080.\nTo be greeted by the app, visit http://localhost:8080/YourName.\n\nQuit app with ctrl+c.');
