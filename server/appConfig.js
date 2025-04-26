export const configSessionDev = {
    secret: 'lametestkey123',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // true if HTTPS
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 // 1 day cookie
    }
}

export const configSessionProd = {
    secret: '',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: true,
        maxAge: 24 * 60 * 60 * 1000
    }
}
