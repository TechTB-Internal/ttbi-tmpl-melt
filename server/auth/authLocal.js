
import { Strategy as LocalStrategy } from 'passport-local';

export function localStrategy(dataUsers) {
    try {
        new LocalStrategy((inputUsername, InputPassword, done) => {
            const userMatch = dataUsers.find(user => user.username === inputUsername);
            if (!userMatch) {
                console.warn(`No matching user.`);
                return done(null, false, { message: 'Invalid credentials' });
            }
            if (userMatch.password !== InputPassword) {
                console.warn(`Incorrect password.`);
                return done(null, false, { message: 'Invalid credentials' });
            }
            return done(null, userMatch);
        });
    } catch (er) {
        console.error(er);
        return;
    }
}
