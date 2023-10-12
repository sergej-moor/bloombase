// src/routes/+layout.server.ts
import fs from 'fs';
import { supabaseClient } from '$lib/supabaseClient';
export const load = async ({ locals: { getSession } }) => {
	let uploading = false;

	const uploadPlant = async () => {
		uploading = true;

		const files = await fs.promises.readdir(
			'C:/Users/serge/Documents/SideProjects/bloombase/src/tmp2'
		);

		for (const file of files) {
			//console.log(file);
			const filepath = 'C:/Users/serge/Documents/SideProjects/bloombase/src/tmp2/' + file;
			const parts = file.split('.');
			const fileExtension = parts[parts.length - 1];
			const contenttype = 'image/' + fileExtension;

			fs.readFile(filepath, async (err, datas) => {
				if (err) {
					console.error('Error reading file:', err);
				} else {
					// 'data' is a Buffer containing the image file content
					// You can now use 'data' as needed, e.g., save it to a different file or process it
					//console.log('File content as a Buffer:', data);
					await supabaseClient.storage
						.from('plants')
						.upload(file, datas, { contentType: 'image/jpg' });

					/* const { data } = await supabaseClient.storage.from('plants').getPublicUrl(file);

					const public_url = data.publicUrl;
					const regex = new RegExp('(\\d+).', 'm');
					console.log(public_url);
					let id = -1;
					const ev = file.match(regex);
					if (ev) id = parseInt(ev[0]);
					console.log('id', id); */

					const { data, error } = await supabaseClient
						.from('houseplants')
						.update({ pet_friendly: false })
						.eq('id', 1)
						.select();
					console.log(error);
					console.log(data);
				}
			});

			/* 
			const { data } = await supabaseClient.storage.from('plants').getPublicUrl(file);
			console.log(data);
			const public_url = data.publicUrl;
			const regex = new RegExp('(\\d+).', 'm');

			let id = -1;
			const ev = file.match(regex);
			if (ev) id = parseInt(ev[0]);

			await supabaseClient.from('houseplants').update({ cover_img: public_url }).eq('id', id); */
			/* 
				if (error) {
					throw error;
				} */

			//url = filePath;
		}
		uploading = false;
	};

	/* if (!uploading) {
		await uploadPlant();
	} */

	return {
		session: await getSession()
	};
};
