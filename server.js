import { createServer } from 'http';
import requests from './requests.js';

const app = createServer(function(req, res) {
  res.writeHead(200, 'Hello')
  res.end()
})

app.listen(4000, () => {
  console.log('hello from node')
} );


