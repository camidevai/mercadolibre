export async function sendContact(config, fields, request = fetch) {
  if (!config || !config.publicKey || !config.serviceId || !config.templateId) throw new Error('unconfigured');
  const response = await request('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ service_id: config.serviceId, template_id: config.templateId, user_id: config.publicKey, template_params: fields }),
    signal: AbortSignal.timeout(20000),
  });
  if (!response.ok) throw new Error('send-failed');
}
export function mountContact(root, config) {
  const form = root.querySelector('form');
  const service = new URLSearchParams(window.location.search).get('servicio');
  const choices = { videos: 'Creación de videos para marcas', asesoria: 'Asesoría en inteligencia artificial', automatizacion: 'Automatización de procesos', capacitacion: 'Capacitación o charla', colaboracion: 'Colaboración con marca' };
  if (choices[service]) {
    form.elements.namedItem('services').value = choices[service];
    form.elements.namedItem('budget').value = 'Por definir';
  }
  const button = form.querySelector('button[type="submit"]');
  const status = root.querySelector('[role="status"]');
  const message = form.elements.namedItem('message');
  const count = root.querySelector('[data-count]');
  const ready = !!(config?.publicKey && config?.serviceId && config?.templateId);
  button.disabled = !ready;
  let sending = false;
  const update = () => { count.textContent = `${message.value.trim().length} / 50 caracteres mínimos`; message.setCustomValidity(message.value.trim().length < 50 ? 'Escribe al menos 50 caracteres sobre tu proyecto.' : ''); };
  update();
  if (!ready) { status.textContent = 'El formulario estará disponible pronto. Estamos preparando el canal de contacto.'; button.disabled = true; }
  const submit = async event => {
    event.preventDefault();
    if (sending || !ready) return;
    update();
    for (const name of ['user_name', 'phone', 'company']) {
      const input = form.elements.namedItem(name);
      input.setCustomValidity(input.value.trim() ? '' : 'Completa este campo.');
    }
    if (!form.reportValidity()) return;
    const fields = Object.fromEntries(Array.from(new FormData(form), ([key, value]) => [key, String(value).trim()]));
    sending = true; button.disabled = true; button.textContent = 'Enviando…'; status.textContent = '';
    form.setAttribute('aria-busy', 'true');
    try {
      await sendContact(config, fields);
      status.textContent = '¡Mensaje enviado! Camidevai se pondrá en contacto contigo.';
      status.dataset.state = 'success'; form.reset(); update();
    } catch {
      status.textContent = 'No pudimos enviar el mensaje. Tus datos siguen aquí; vuelve a intentarlo.';
      status.dataset.state = 'error';
    } finally {
      sending = false; button.disabled = false; button.textContent = 'Enviar mi proyecto ↗'; form.removeAttribute('aria-busy');
    }
  };
  const input = event => { if (event.target !== message && event.target.setCustomValidity) event.target.setCustomValidity(''); update(); };
  form.addEventListener('submit', submit); form.addEventListener('input', input);
  return () => { form.removeEventListener('submit', submit); form.removeEventListener('input', input); };
}
