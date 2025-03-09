const express = require('express');
const cors = require('cors');
const { DID, prepareCredentialPayload } = require('@terminal3/vc_core');
const { createEcdsaCredential, verifyEcdsaVc } = require('@terminal3/ecdsa_vc');
const app = express();

app.use(cors());
app.use(express.json());

const issuerPrivateKey = '0x123123123123...';  // Dummy private key from docs
const issuerDid = new DID('key', issuerPrivateKey);

// Use provided dummy user DID (ethr method)
const userDid = new DID('ethr', '0x1234567890123456789012345678901234567890');

// Endpoint to issue credential with provided data
app.post('/issue', async (req, res) => {
    const { kyc, date_of_birth, nationality } = req.body;
  
    // Using provided dummy DID hex from example:
    const userDidHex = '0x1234567890123456789012345678901234567890';
  
    // Simulated credential issuance (no SDK complexity yet):
    const credential = {
      id: userDidHex,
      credentialSubject: {
        kyc,
        date_of_birth,
        nationality
      },
      issuedAt: new Date().toISOString()
    };
  
    res.json({ credential });
  });
// Endpoint for selective disclosure verification
app.post('/verify', (req, res) => {
  const { credential } = req.body;

  // Simulated selective disclosure:
  const isAdult = new Date().getFullYear() - new Date(credential.credentialSubject.date_of_birth).getFullYear() >= 18;

  const selectiveDisclosureResult = {
    kyc: credential.credentialSubject.kyc,
    isAdult: isAdult ? "true" : "false",
    // Not disclosing exact date_of_birth
  };

  res.json({
    selectiveDisclosure: selectiveDisclosureResult(credential, isAdult),
    verified: true,
    message: "Credential selectively verified"
  });
});

// Endpoint to revoke a credential
app.post('/revoke', (req, res) => {
  const { credentialId } = req.body;
  res.json({ revoked: true, credentialId, message: "Credential revoked" });
});

// Helper function for selective disclosure logic
function selectiveDisclosureResult(credential, isAdult) {
  return {
    kyc: credential.credentialSubject.kyc,
    over18: isAdult ? "Yes" : "No"
  };
}

app.use(express.json());
app.use(cors());
app.listen(3000, () => console.log('Backend listening on port 3000'));
