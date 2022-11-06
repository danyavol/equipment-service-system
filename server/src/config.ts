export const config = {
    DB_HOST: getEnv('DB_HOST'),
    DB_NAME: getEnv('DB_NAME'),
    DB_USER: getEnv('DB_USER'),
    DB_PASSWORD: getEnv('DB_PASSWORD'),
    
    DB_PORT: parseInt(getEnv('DB_PORT')),
    SERVER_PORT: parseInt(getEnv('SERVER_PORT')),
    CLIENT_PORT: parseInt(getEnv('CLIENT_PORT')),

    PRIVATE_KEY: getEnv('PRIVATE_KEY'),
};

function getEnv(envVariable: string) {
    const value = process.env[envVariable];

    if (value === undefined)
        throw new Error(`Necessary environment variable was not provided - ${envVariable}`);
    
    return value;
}