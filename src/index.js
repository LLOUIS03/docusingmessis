const http = require('http');
const sendEnvelope = require('./docuSign/sendEnvelope');
const { document1 } = require('./docuSign/makeEnvelope');
const { accessToken, basePath, accountId, signerEmail, signerName, ccEmail, ccName } = require('./config/appsettings.json');

const hostname = '127.0.0.1';
const port = 4000;

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const envelopeArgs = { signerEmail, signerName, ccEmail, ccName, status: 'sent' };

  sendEnvelope({
    envelopeArgs,
    accountId: accountId,
    basePath: 'https://demo.docusign.net/restapi',
    oAuthBasePath: basePath,
    accessToken: accessToken
  }, );
  res.send(document1(envelopeArgs));
});

app.listen(port, () => {
  console.log(`Server listening on http://${hostname}:${port}/`);
});