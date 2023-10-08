/** @type {import('./$types').Actions} */

import { STATIC_FORMS_KEY } from '$env/static/private';
export const actions = {
	send: async ({ request }) => {
		// TODO log the user in
		const form = await request.formData();

		const body = {
			accessKey: STATIC_FORMS_KEY,
			name: form.get('name'),
			subject: form.get('subject'),
			email: form.get('email'),
			telephone: form.get('telephone'),
			message: form.get('message'),
			honeypot: form.get('honeypot')
		};
	
		const res = await fetch('https://api.staticforms.xyz/submit', {
			method: 'POST',
			body: JSON.stringify(body),
			headers: { 'Content-Type': 'application/json' }
		});
		const json = await res.json();


		if (json.success) {
			return { success: true };
		} else {
			return { error: json.message };
		}
	}
};
