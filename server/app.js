import express from 'express';
import session from 'express-session';
import passport from 'passport';
import path from 'path';
import { fileURLToPath } from 'url';

import { configSessionDev, configSessionProd } from './appConfig.js';
import './strategies/strategyLocal.js';
import { dataUsers } from './data_test/dataUsers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;
const dirProjectRoot = path.join(__dirname, '..');
const siteRoot = path.join(dirProjectRoot, 'dist');

passport.serializeUser((user, done) => { 
  done(null, user.id)
});
passport.deserializeUser((id, done) => {
  const user = dataUsers.find(user => user.id === id);
  done(null, user);
});

app.use(express.static(siteRoot));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session(configSessionDev));
app.use(passport.initialize());
app.use(passport.session());

app.post('/auth/login', (req, res, next) => {
  passport.authenticate('local', (er, user, info) => {
    if (er) {
      return next(er);
    }
    if (!user) {
      console.warn(info.message );
      return res.status(401).json({ success: false, message: 'Login failed' });
    }
    req.logIn(user, (er) => {
      if (er) {
        return next(er);
      }
      console.log('Login successful');
      return res.json({ success: true, message: 'Login successful' });
    });
  })(req, res, next);
});

app.get('/auth/logout', (req, res) => {
  req.logout(err => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Logout failed' });
    }
    res.json({ success: true, message: 'Logged out successfully' });
  });
});

app.get('/auth/status', (req, res) => {
  if (req.isAuthenticated && req.isAuthenticated()) {
      return res.json({ authenticated: true, user: req.user });
  }
  res.json({ authenticated: false });
});

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

app.listen(port, () => {
  console.log(`\n\nServer is running.`)
});
