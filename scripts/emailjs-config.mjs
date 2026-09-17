import fs from 'node:fs';
import path from 'node:path';
import { parseEnv } from 'node:util';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export function readEmailConfig() {
  let values = {};
  for (const name of ['.env', '.env.local']) {
    const file = path.join(root, name);
    if (fs.existsSync(file)) values = { ...values, ...parseEnv(fs.readFileSync(file, 'utf8')) };
  }
  const get = key => String(process.env[key] ?? values[key] ?? '').trim();
  return { publicKey: get('VITE_EMAILJS_PUBLIC_KEY'), serviceId: get('VITE_EMAILJS_SERVICE_ID'), templateId: get('VITE_EMAILJS_TEMPLATE_ID') };
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const config = readEmailConfig();
  if (!Object.values(config).every(Boolean)) throw new Error('Completa las tres variables VITE_EMAILJS en .env o en el entorno de despliegue.');
  fs.writeFileSync(path.join(root, 'netlify-site/emailjs-config.js'), `window.EMAILJS_CONFIG = ${JSON.stringify(config)};\n`);
  console.log('Configuración pública de EmailJS preparada.');
}
