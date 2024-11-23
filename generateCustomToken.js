import admin from 'firebase-admin';
import serviceAccount from './src/config/serviceAccountKey.json' assert { type: 'json' };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const userId = 'FKukQaWHvZNWFA04uC50OVMHCfK2';

admin.auth().createCustomToken(userId)
  .then((customToken) => {
    console.log('Custom Token:', customToken);
  })
  .catch((error) => {
    console.error('Error creating custom token:', error);
  });
