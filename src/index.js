const http = require('http');
const sendEnvelope = require('./docuSign/sendEnvelope');
const { document1 } = require('./docuSign/makeEnvelope');
const { accessToken, basePath } = require('./config/appsettings.json');

const hostname = '127.0.0.1';
const port = 4000;

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const signerEmail = 'stevenbdl30@gmail.com';
  const signerName = 'Steven Beltran';
  const ccEmail = 'luis.louis@bairesdev.com';
  const ccName = 'Luis Louis';
  const envelopeArgs = { signerEmail, signerName, ccEmail, ccName, status: 'sent' };

  sendEnvelope({
    envelopeArgs,
    accountId: 'd05d0acc-e8ce-481a-945e-37dfb46864ae',
    basePath: 'https://demo.docusign.net/restapi',
    oAuthBasePath: basePath,
    accessToken: accessToken
  }, );
  res.send(document1(envelopeArgs));
});

app.listen(port, () => {
  console.log(`Server listening on http://${hostname}:${port}/`);
});