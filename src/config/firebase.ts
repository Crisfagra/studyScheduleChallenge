import admin, { ServiceAccount } from 'firebase-admin'
import serviceAccount from './serviceAccountKey.json' with { type: 'json' }

const serviceAccountTyped: ServiceAccount = {
  projectId: serviceAccount.project_id,
  privateKey: serviceAccount.private_key,
  clientEmail: serviceAccount.client_email,
}

if (!admin.apps || !admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccountTyped),
  })
}

export async function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) return res.status(401).json({ error: 'Unauthorized' })

  try {
    const decodedToken = await admin.auth().verifyIdToken(token)
    req.user = decodedToken
    next()
  } catch {
    res.status(401).json({ error: 'Invalid token' })
  }
}
