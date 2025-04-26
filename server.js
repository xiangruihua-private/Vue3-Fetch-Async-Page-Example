import express from 'express';

const server = express();

// server.get('/', (req, res) => {
  // renderToString(app).then((html) => {res.send(`<!DOCTYPE html><html><head><title>Vue SSR Example</title></head><body>${html}</body></html>`);});
// });

server.use(express.static('.'));

server.listen(3000, () => {
  console.log('ready');
});
