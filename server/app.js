import express from 'express';
import session from 'express-session';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import path from 'path';
import { fileURLToPath } from 'url';
import dataUsers from './data_test/dataUsers.js'

// ESM replacement for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;
const dirProjectRoot = path.join(__dirname, '..');
const siteRoot = path.join(dirProjectRoot, 'dist');

passport.use(new LocalStrategy((username, password, done) => {
  const userMatch = dataUsers.find(u => u.username === username);
  if (!userMatch) {
    console.log(`No matching user.`)
    return done(null, false, { message: 'Invalid credentials' });
  }
  if (!userMatch || userMatch.password !== password) {
    return done(null, false, { message: 'Invalid credentials' });
  }
  return done(null, userMatch);
}));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  const user = dataUsers.find(u => u.id === id);
  done(null, user);
});
passport.use(new LocalStrategy((username, password, done) => {
    const user = dataUsers.find(u => u.username === username);
    if (!user || user.password !== password) {
      return done(null, false, { message: 'Invalid credentials' });
    }
    return done(null, user);
  }));


app.use(express.static(siteRoot));
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());


app.get('/404', (req, res) => {
    res.status(404).send('Page Not Found');
});

app.post('/auth/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
  })
);

app.use((req, res) => {
    const requestPath = req.path;
    if (path.extname(requestPath)) {
        return res.status(404).sendFile(path.join(siteRoot, '404.html'));
    }
    res.status(200).sendFile(path.join(siteRoot, 'index.html'));
});

app.listen(port);
