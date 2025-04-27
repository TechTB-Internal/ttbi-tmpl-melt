
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { dataUsers } from '../data_test/dataUsers.js';

export default passport.use(
    new LocalStrategy((username, password, done) => {
        const userMatch = dataUsers.find(user => user.username === username);
        if (!userMatch) {
            console.error(`No matching user.`);
            return done(null, false, { message: 'Invalid credentials' });
        }
        if (userMatch.password !== password) {
            console.error(`Incorrect password.`);
            return done(null, false, { message: 'Invalid credentials' });
        }
        console.log(`Login Successful`);
        return done(null, userMatch);
    })
)