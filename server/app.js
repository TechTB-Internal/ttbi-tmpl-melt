import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dataUsers from './data_test/users.js'

// ESM replacement for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

passport.use(new LocalStrategy((username, password, done) => {
    const user = dataUsers.find(u => u.username === username);
    if (!user || user.password !== password) {
      return done(null, false, { message: 'Invalid credentials' });
    }
    return done(null, user);
  }));

const dirProjectRoot = path.join(__dirname, '..');
const siteRoot = path.join(dirProjectRoot, 'dist');

app.use(express.static(siteRoot));

app.get('/404', (req, res) => {
    res.status(404).send('Page Not Found');
});

app.use((req, res) => {
    const requestPath = req.path;
    if (path.extname(requestPath)) {
        return res.status(404).sendFile(path.join(siteRoot, '404.html'));
    }
    res.status(200).sendFile(path.join(siteRoot, 'index.html'));
});

app.listen(port);
