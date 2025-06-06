"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = void 0;
require("dotenv/config");
const joi = require("joi");
const envSchema = joi
    .object({
    PORT: joi.number().required(),
    DATABASE_URL: joi.string().required(),
    JWT_SECRET: joi.string().required(),
    JWT_REFRESH_SECRET: joi.string().required(),
    GEMINI_API_KEY: joi.string().required(),
    RENIEC_TOKEN: joi.string().required(),
    CLOUDINARY_NAME: joi.string().required(),
    CLOUDINARY_API_KEY: joi.string().required(),
    CLOUDINARY_API_SECRET: joi.string().required(),
})
    .unknown(true);
const { error, value } = envSchema.validate(process.env);
if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}
const envVariables = {
    PORT: Number(value.PORT),
    DATABASE_URL: value.DATABASE_URL,
    JWT_SECRET: value.JWT_SECRET,
    JWT_REFRESH_SECRET: value.REFRESH_JWT_SECRET,
    GEMINI_API_KEY: value.GEMINI_API_KEY,
    RENIEC_TOKEN: value.RENIEC_TOKEN,
    CLOUDINARY_NAME: value.CLOUDINARY_NAME,
    CLOUDINARY_API_KEY: value.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: value.CLOUDINARY_API_SECRET,
};
exports.envs = {
    port: envVariables.PORT,
    databaseUrl: envVariables.DATABASE_URL,
    jwtSecret: envVariables.JWT_SECRET,
    refreshJwtSecret: envVariables.JWT_REFRESH_SECRET,
    geminiApiKey: envVariables.GEMINI_API_KEY,
    reniecToken: envVariables.RENIEC_TOKEN,
    cloudinaryName: envVariables.CLOUDINARY_NAME,
    cloudinaryApiKey: envVariables.CLOUDINARY_API_KEY,
    cloudinaryApiSecret: envVariables.CLOUDINARY_API_SECRET,
};
//# sourceMappingURL=envs.js.map