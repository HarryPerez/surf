const fs = require('fs').promises;

const AWS = require('aws-sdk');

const retreiveSecrets = () => {
  // configure AWS SDK
  const client = new AWS.SecretsManager({
    region: 'us-east-1',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  });

  const SecretId = process.env.AWS_SECRETS_VAULT;
  return new Promise((resolve, reject) => {
    // retrieving secrets from secrets manager
    client.getSecretValue({ SecretId }, (err, data) => {
      if (err) {
        reject(err);
      } else {
        // parsing the fetched data into JSON
        const secretsJSON = JSON.parse(data.SecretString);

        // creating a string to store write to .env file
        // .env file shall look like this :
        // SECRET_1 = sample_secret_1
        // SECRET_2 = sample_secret_2
        let secretsString = '';
        Object.keys(secretsJSON).forEach(key => {
          secretsString += `${key}=${secretsJSON[key]}\n`;
        });
        resolve(secretsString);
      }
    });
  });
};

const fetchSecrets = async () => {
  try {
    const response = await retreiveSecrets();
    await fs.writeFile('./.env.master', response);
    return response;
  } catch (e) {
    return e;
  }
};

fetchSecrets();
