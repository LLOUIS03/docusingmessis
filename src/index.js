const http = require('http');
const sendEnvelope = require('./docuSign/sendEnvelope');
const { document1 } = require('./docuSign/makeEnvelope');

const hostname = '127.0.0.1';
const port = 4000;

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const accessToken = 'eyJ0eXAiOiJNVCIsImFsZyI6IlJTMjU2Iiwia2lkIjoiNjgxODVmZjEtNGU1MS00Y2U5LWFmMWMtNjg5ODEyMjAzMzE3In0.AQoAAAABAAUABwAAJVaKiEjaSAgAAGV5mMtI2kgCAEXiSCyytq5PqXpjjGnnHrUVAAEAAAAYAAIAAAAFAAAAHQAAAA0AJAAAADdjNzAyMDFjLWE4ZWItNDRlNy05ZDBkLWZlYWYxYjJhODM3NSIAJAAAADdjNzAyMDFjLWE4ZWItNDRlNy05ZDBkLWZlYWYxYjJhODM3NTAAgHIVGYZI2kg3APgoqklCngJOtz9DKsXIyAk.f2KsRWEDe50NHSsQcX_viyjgAn7p-qDVWiYuJwTgeukFQPQodiIejb-aeYSfS8WpBESMdoX3h73YY3b-bQBi-_ETOTxKONkm_6SeEAFor2hW_qwGXDcMSWMt3MENmtPtuXgUCnFID6WrbaPAm8xNn5ElXDVHTG1JFfN46b3pFFdVSqvD4m-8hv4qV0l20XquM_2HXyoODa_PeraY7Dvk8w61G4epWKIc7_QPjkXh26LLvOTsywVWESnO73daLfLSVTmmansV_lD6E0X5o0B64GcPRp8mgyI1eL4xjbrEzh7ItuAUBWauypnS4QEuF75dXj_xo-4GVOEnf8aBn6ND_w';
  // const signerEmail = 'luis.louis@bairesdev.com';
  // const signerName = 'Luis Louis';
  // const ccEmail = 'stevenbdl30@gmail.com';
  // const ccName = 'Steven Beltran';

  const signerEmail = 'stevenbdl30@gmail.com';
  const signerName = 'Steven Beltran';
  const ccEmail = 'luis.louis@bairesdev.com';
  const ccName = 'Luis Louis';
  const envelopeArgs = { signerEmail, signerName, ccEmail, ccName, status: 'sent' };
  sendEnvelope({ 
    envelopeArgs,
    accountId: 'd05d0acc-e8ce-481a-945e-37dfb46864ae',
    basePath: 'https://demo.docusign.net/restapi',
    accessToken: accessToken
  });
  res.send(document1(envelopeArgs));
  // res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server listening on http://${hostname}:${port}/`);
});