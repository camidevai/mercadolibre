# Configurar el formulario

Completa `.env` en la raíz del repositorio:

```dotenv
VITE_EMAILJS_PUBLIC_KEY=
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
```

Usa la clave pública de EmailJS, no una clave privada. `.env` está excluido de Git; `.env.example` contiene únicamente los nombres de las variables. Estas tres variables configuran un formulario de navegador y sus valores públicos se incluyen en la página compilada.

## Plantilla de EmailJS

Configura el destinatario en tu plantilla de EmailJS y Reply-To como `{{user_email}}`. Los parámetros enviados son:

`user_name`, `user_email`, `phone`, `company`, `services`, `budget`, `message`.

Agrega tu dominio y el origen local a los orígenes permitidos de EmailJS, si utilizas esa restricción.

## Vista local y publicación

- En la vista local de esta tarea, guarda `.env` y recarga la página. No hace falta reiniciar el servidor.
- En el servidor de desarrollo de Vite, reinicia después de modificar `.env`.
- Netlify ejecuta `node scripts/emailjs-config.mjs` antes de publicar. Configura las tres variables en Netlify; no subas `.env`. La compilación se detiene si falta alguna.
- `npm run config:contact` genera el archivo público de configuración para una publicación estática manual. El archivo generado está excluido de Git.

El formulario valida email, campos obligatorios y un mensaje de al menos 50 caracteres. Conserva los datos si falla el envío y los limpia únicamente después de una respuesta exitosa de EmailJS.

Implementación basada en la [API oficial de EmailJS](https://www.emailjs.com/docs/rest-api/send/), compartida por la página estática y el componente React.
