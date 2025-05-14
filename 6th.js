const http = require('http');
const qs = require('querystring');

http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' }); 
    res.end(`<form method="POST">
      <input name="name" placeholder="Your Name" />
                                 <input type = "number" name="age" placeholder="Your Age" />
                                 <input = "number" name="id" placeholder="Your ID" />
                                 <input type = "number" name = "number" placeholder = "Your Number" />
                                  <button>Submit</button>
                                  </form>`);
  } else if (req.method === 'POST') {
    let body = '';
    
    req.on('data', chunk => body += chunk);
    

    
    req.on('end', () => {
      const parsedData = qs.parse(body);
      res.writeHead(200, { 'Content-Type': 'text/html' }); 
      const output = `
      <h1>${parsedData.name || 'Guest'}</h1>
      <h1>${parsedData.age || 'Guest'}</h1>
      <h1>${parsedData.id || 'Guest'}</h1>
      <h1>${parsedData.number || 'Guest'}</h1>
`;
      res.end(output);

    });
  }
}).listen(3000, () => console.log('Server running on http://localhost:3000'));