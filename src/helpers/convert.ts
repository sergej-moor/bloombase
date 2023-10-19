import type { PlantCard } from '../app';

function convertResToPlantCards(dataPlants: any[]) {
	const plants = dataPlants.map((plant) => {
		const plantObj: PlantCard = {
			id: plant.id,
			latin: plant.latin,
			name: plant.common.split(',')[0],
			category: plant.category,

			use: plant.use.split(','),
			cover_img: plant.cover_img,
			light_level: plant.light_level,
			watering_frequency: plant.watering_frequency,
			pet_friendly: plant.pet_friendly,
			experience: 0,
			liked: plant.likes.length != 0
		};
		return plantObj;
	});

	return plants;
}

export { convertResToPlantCards };
