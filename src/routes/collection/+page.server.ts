import { supabaseClient } from '$lib/supabaseClient';
import { fail, redirect } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export const load = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();
	if (!session) {
		throw redirect(303, '/auth');
	}

	//fetch call or graphql client

	const likedPlants = await supabaseClient
		.from('likes')
		.select('houseplants(*)')
		.eq('user_id', session.user.id);

	const plantsData = likedPlants.data?.map((plant) => {
		plant.houseplants.likes = [1];
		return plant.houseplants;
	});

	/* const { data } = await supabaseClient
		.from('likes')
		.select(`*,houseplants(*)`)
		.eq('houseplants.id', 'likes.plant_id'); */
	/* 	const { data } = await supabaseClient
		.from('houseplants')
		.select('*,likes(*)')
		.eq('likes.user_id', session.user.id); */

	//console.log(data);
	/* data?.map((plant) => {
		plant.liked = false;
		
	}) */

	return {
		plants: plantsData ?? [],

		session
	};
};

/** @type {import('./$types').Actions} */

export const actions = {
	default: async (event) => {
		async function setUrl(url: string, id: number) {
			const { data, error } = await supabaseClient
				.from('houseplants')
				.update({ cover_img: url })
				.eq('id', id);
			
		}

		async function uploadImages() {
			uploadPlant();
		}

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
						await supabaseClient.storage
							.from('plants')
							.upload(file, datas, { contentType: contenttype });

						const publicUrl =
							'https://wlbswezwppbljuspzrsn.supabase.co/storage/v1/object/public/plants/' + file;

						const regex = new RegExp('(\\d+).', 'm');
						let id = -1;
						const ev = file.match(regex);
						if (ev) id = parseInt(ev[0]);

						setUrl(publicUrl, id);
					}
				});
			}
			uploading = false;
		};

		async function rename() {
			const moveFrom = 'C:/Users/serge/Documents/SideProjects/bloombase/src/tmp2';

			const files = await fs.promises.readdir(moveFrom);
			for (const file of files) {
				// Get the full paths
				const fromPath = path.join(moveFrom, file);
				//const toPath = path.join( moveTo, file );
				const regex = new RegExp('(\\d+)', 'm');

				const newFile = file.match(regex)[0] + '.' + file.split('.')[1];
				const toPath = path.join(moveFrom, newFile);
				// Stat the file to see if we have a file or dir
				const stat = await fs.promises.stat(fromPath);

				if (stat.isFile()) console.log("'%s' is a file.", fromPath);
				else if (stat.isDirectory()) console.log("'%s' is a directory.", fromPath);

				// Now move async
				await fs.promises.rename(fromPath, toPath);

				// Log because we're crazy
				console.log("Moved '%s'->'%s'", fromPath, toPath);
			} // End for...of
		}
		//uploadImages();

		//rename();
	}
};
