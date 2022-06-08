const docusign = require('docusign-esign');
const { makeEnvelope } = require('./makeEnvelope');

async function sendEnvelope(args) {
  // Data for this method
  // args.basePath
  // args.accessToken
  // args.accountId

  let dsApiClient = new docusign.ApiClient();
  dsApiClient.setBasePath(args.basePath);
  dsApiClient.addDefaultHeader("Authorization", "Bearer " + args.accessToken);
  let envelopesApi = new docusign.EnvelopesApi(dsApiClient),
    results = null;

  // Step 1. Make the envelope request body
  let envelope = makeEnvelope(args.envelopeArgs);
  console.log('envelope', envelope);
  // Step 2. call Envelopes::create API method
  // Exceptions will be caught by the calling function
  // results = await envelopesApi.createEnvelope(args.accountId, {
  //   envelopeDefinition: envelope,
  // });

  envelopesApi.createEnvelope(args.accountId, {
    envelopeDefinition: envelope,
  }).then((value) => {
    console.log('value', value);
  }).catch((err) => {
    console.log('ERR:', err);
  })
  // let envelopeId = results.envelopeId;
  // console.log('results', results);
  // console.log(`Envelope was created. EnvelopeId ${envelopeId}`);
  // return { envelopeId: envelopeId };
}


module.exports = sendEnvelope;