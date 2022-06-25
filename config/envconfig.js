import * as dotenv from 'dotenv';

dotenv.config();
const ENV_NAME = process.env.ENV_NAME;

function getBaseUrl() {
    console.log("Loaded environment: " + ENV_NAME)

    if (ENV_NAME == "prod")
        return "https://stable.m2acloud.com/ui/auth";

    return "https://" + ENV_NAME + ".m2acloud.com/ui/auth"
};

function getUiUserVariables() {
    return JSON.parse(process.env.UI_USER_VARIABLES)
};

export { getBaseUrl, getUiUserVariables }