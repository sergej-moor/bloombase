// @ts-nocheck
let plants = [
	{
		id: 0,
		latin: 'Aeschynanthus lobianus',
		family: 'Gesneriaceae',
		common: ['Lipstick'],
		category: 'Hanging',
		origin: 'Java',
		climate: 'Tropical',
		tempmax: {
			celsius: 32,
			fahrenheit: 89.6
		},
		tempmin: {
			celsius: 14,
			fahrenheit: 57.2
		},
		ideallight: 'Bright light',
		toleratedlight: 'Direct sunlight',
		watering: 'Keep moist between watering. Can be a bit dry between watering',
		insects: ['Mealy bug', 'Aphid', 'Thrips'],
		diseases: 'N/A',
		use: ['Hanging', 'Flower', 'Tertiary']
	},
	{
		id: 1,
		latin: 'Adiantum raddianum',
		family: 'Polypodiaceae',
		common: ['Maindenhair', 'Delta maidenhair'],
		category: 'Fern',
		origin: 'Brazil',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 86
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: ['Mealy bug', 'Aphid', 'Snail'],
		diseases: 'Gray mold',
		use: ['Potted plant', 'Ground cover', 'Table top']
	},
	{
		id: 2,
		latin: 'Aechmea fatsiata',
		family: 'Bromeliaceae',
		common: ['Silver vase'],
		category: 'Bromeliad',
		origin: 'Brazil',
		climate: 'Tropical humid',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Water when soil is half dry. Change water in the vase regularly.',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Flower', 'Table top', 'Tertiary']
	},
	{
		id: 3,
		latin: 'Agave angustilolia Marginata',
		family: 'Amaryllidaceae',
		common: ['Variegated Carabbean Agave', 'Century plant'],
		category: 'Cactus And Succulent',
		origin: ' India',
		climate: 'Tropical',
		tempmax: {
			celsius: 35,
			fahrenheit: 95
		},
		tempmin: {
			celsius: 5,
			fahrenheit: 41
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Water only when the soil is dry. Must be dry between watering',
		insects: ['Scale', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Potted plant', 'Primary', 'Secondary']
	},
	{
		id: 4,
		latin: 'Aechmea ramosa',
		family: 'Bromeliaceae',
		common: ['Coral berry'],
		category: 'Bromeliad',
		origin: 'Brazil',
		climate: 'Subtropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Water when soil is half dry. Change water in the vase regularly.',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Flower', 'Table top', 'Primary']
	},
	{
		id: 5,
		latin: 'Aechmea fasciata',
		family: 'Bromeliaceae',
		common: ['Silver vase'],
		category: 'Bromeliad',
		origin: 'Hybrid',
		climate: 'Tropical humid',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Water when soil is half dry. Change water in the vase regularly.',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Flower', 'Table top', 'Tertiary']
	},
	{
		id: 6,
		latin: 'Agave filifera',
		family: 'Amaryllidaceae',
		common: ['Thread Agave', 'Century plant'],
		category: 'Cactus And Succulent',
		origin: 'Mexico',
		climate: 'Arid Tropical',
		tempmax: {
			celsius: 35,
			fahrenheit: 95
		},
		tempmin: {
			celsius: 5,
			fahrenheit: 41
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Water only when the soil is dry. Must be dry between watering',
		insects: ['Scale', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Potted plant', 'Primary', 'Secondary']
	},
	{
		id: 7,
		latin: 'Adiantum hispidulum',
		family: 'Polypodiaceae',
		common: ['Rosy Maidenhair', 'Autralian maidenhair'],
		category: 'Fern',
		origin: 'Australia & New Guinea',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: ['Mealy bug', 'Aphid', 'Snail'],
		diseases: 'Gray mold',
		use: ['Table top', 'Ground cover', 'Tertiary']
	},
	{
		id: 8,
		latin: 'Agave attenuata',
		family: 'Amaryllidaceae',
		common: ['Dragon tree Agave', 'Century plant'],
		category: 'Cactus And Succulent',
		origin: 'Mexico',
		climate: 'Arid Tropical',
		tempmax: {
			celsius: 35,
			fahrenheit: 95
		},
		tempmin: {
			celsius: 5,
			fahrenheit: 41
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Water only when the soil is dry. Must be dry between watering',
		insects: ['Scale', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Potted plant', 'Primary', 'Secondary']
	},
	{
		id: 9,
		latin: 'Aglaonema',
		family: 'Araceae',
		common: ['Chinese Evergreen', 'Amelia'],
		category: 'Aglaonema',
		origin: 'Hybrid',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Mealy bug', 'Scale'],
		diseases: ['Phytophtora', 'Crown rot'],
		use: ['Potted plant', 'Secondary', 'Tertiary']
	},
	{
		id: 10,
		latin: 'Aglaonema',
		family: 'Araceae',
		common: ['Chinese Evergreen', 'Painted Princess'],
		category: 'Aglaonema',
		origin: 'Hybrid',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Mealy bug', 'Scale'],
		diseases: ['Phytophtora', 'Crown rot'],
		use: ['Potted plant', 'Secondary', 'Tertiary']
	},
	{
		id: 11,
		latin: 'Aglaonema',
		family: 'Araceae',
		common: ['Chinese Evergreen', 'Queen of Siam'],
		category: 'Aglaonema',
		origin: 'Hybrid',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Mealy bug', 'Scale'],
		diseases: ['Phytophtora', 'Crown rot'],
		use: ['Potted plant', 'Secondary', 'Tertiary']
	},
	{
		id: 12,
		latin: 'Aglaonema',
		family: 'Araceae',
		common: ['Chinese Evergreen', 'Jewel of India'],
		category: 'Aglaonema',
		origin: 'Hybrid',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Mealy bug', 'Scale'],
		diseases: ['Phytophtora', 'Crown rot'],
		use: ['Table top', 'Ground cover', 'Tertiary']
	},
	{
		id: 13,
		latin: 'Aglaonema',
		family: 'Araceae',
		common: ['Chinese Evergreen', 'Patricia'],
		category: 'Aglaonema',
		origin: 'Hybrid',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Mealy bug', 'Scale'],
		diseases: ['Phytophtora', 'Crown rot'],
		use: ['Potted plant', 'Secondary', 'Tertiary']
	},
	{
		id: 14,
		latin: 'Aglaonema',
		family: 'Araceae',
		common: ['Chinese Evergreen', 'Green Lady'],
		category: 'Aglaonema',
		origin: 'Hybrid',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Mealy bug', 'Scale'],
		diseases: ['Phytophtora', 'Crown rot'],
		use: ['Potted plant', 'Secondary', 'Tertiary']
	},
	{
		id: 15,
		latin: 'Aglaonema',
		family: 'Araceae',
		common: ['Chinese Evergreen', 'Black Lance'],
		category: 'Aglaonema',
		origin: 'Hybrid',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Mealy bug', 'Scale'],
		diseases: ['Phytophtora', 'Crown rot'],
		use: ['Potted plant', 'Secondary', 'Tertiary']
	},
	{
		id: 16,
		latin: 'Aglaonema',
		family: 'Araceae',
		common: ['Chinese Evergreen', 'Silver Queen'],
		category: 'Aglaonema',
		origin: 'Hybrid',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Mealy bug', 'Scale'],
		diseases: ['Phytophtora', 'Crown rot'],
		use: ['Potted plant', 'Secondary', 'Tertiary']
	},
	{
		id: 17,
		latin: 'Aglaonema',
		family: 'Araceae',
		common: ['Chinese Evergreen', 'Rapsody in Green'],
		category: 'Aglaonema',
		origin: 'Hybrid',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Mealy bug', 'Scale'],
		diseases: ['Phytophtora', 'Crown rot'],
		use: ['Potted plant', 'Primary', 'Secondary']
	},
	{
		id: 18,
		latin: 'Aglaonema',
		family: 'Araceae',
		common: ['Chinese Evergreen', 'Manila Pride'],
		category: 'Aglaonema',
		origin: 'Hybrid',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Mealy bug', 'Scale'],
		diseases: ['Phytophtora', 'Crown rot'],
		use: ['Potted plant', 'Secondary', 'Tertiary']
	},
	{
		id: 19,
		latin: 'Agave verschaffeltii',
		family: 'Amaryllidaceae',
		common: ['Blue Agave', 'Century plant'],
		category: 'Cactus And Succulent',
		origin: 'Mexico',
		climate: 'Arid Tropical',
		tempmax: {
			celsius: 35,
			fahrenheit: 95
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Water only when the soil is dry. Must be dry between watering',
		insects: ['Scale', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Potted plant', 'Primary', 'Secondary']
	},
	{
		id: 20,
		latin: 'Aglaonema',
		family: 'Araceae',
		common: ['Chinese Evergreen', 'Emerald Beauty'],
		category: 'Aglaonema',
		origin: 'Hybrid',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Mealy bug', 'Scale'],
		diseases: ['Phytophtora', 'Crown rot'],
		use: ['Table top', 'Ground cover', 'Tertiary']
	},
	{
		id: 21,
		latin: 'Aglaonema',
		family: 'Araceae',
		common: ['Chinese Evergreen', 'Jubilee'],
		category: 'Aglaonema',
		origin: 'Hybrid',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Mealy bug', 'Scale'],
		diseases: ['Phytophtora', 'Crown rot'],
		use: ['Potted plant', 'Secondary', 'Tertiary']
	},
	{
		id: 22,
		latin: 'Agave striata',
		family: 'Amaryllidaceae',
		common: ['Lilliput Agave', 'Century plant', 'Nana'],
		category: 'Cactus And Succulent',
		origin: 'Mexico',
		climate: 'Arid Tropical',
		tempmax: {
			celsius: 35,
			fahrenheit: 95
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Water only when the soil is dry. Must be dry between watering',
		insects: ['Scale', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Potted plant', 'Primary', 'Secondary']
	},
	{
		id: 23,
		latin: 'Aglaonema',
		family: 'Araceae',
		common: ['Chinese Evergreen', 'Abidjan'],
		category: 'Aglaonema',
		origin: 'Hybrid',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Mealy bug', 'Scale'],
		diseases: ['Phytophtora', 'Crown rot'],
		use: ['Potted plant', 'Secondary', 'Tertiary']
	},
	{
		id: 24,
		latin: 'Aglaonema',
		family: 'Araceae',
		common: ['Chinese Evergreen', 'Maria Chirstina'],
		category: 'Aglaonema',
		origin: 'Hybrid',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Mealy bug', 'Scale'],
		diseases: ['Phytophtora', 'Crown rot'],
		use: ['Potted plant', 'Ground cover', 'Tertiary']
	},
	{
		id: 25,
		latin: 'Alocasia nebula Imperialis',
		family: 'Araceae',
		common: ['Elephant ear'],
		category: 'Other',
		origin: 'Cultivar',
		climate: 'Tropical humid',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 15,
			fahrenheit: 59
		},
		ideallight: 'Bright light',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Mealy bug'],
		diseases: ['Phytophtora', 'Crown rot'],
		use: ['Colors / Forms', 'Table top', 'Tertiary']
	},
	{
		id: 26,
		latin: 'Aglaonema',
		family: 'Araceae',
		common: ['Chinese Evergreen', 'Emerald Isle'],
		category: 'Aglaonema',
		origin: 'Hybrid',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Mealy bug', 'Scale'],
		diseases: ['Phytophtora', 'Crown rot'],
		use: ['Potted plant', 'Secondary', 'Tertiary']
	},
	{
		id: 27,
		latin: 'Aglaonema',
		family: 'Araceae',
		common: ['Chinese Evergreen', 'Mary Ann'],
		category: 'Aglaonema',
		origin: 'Hybrid',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Mealy bug', 'Scale'],
		diseases: ['Phytophtora', 'Crown rot'],
		use: ['Potted plant', 'Secondary', 'Tertiary']
	},
	{
		id: 28,
		latin: 'Allamanda nerifolia',
		family: 'Apocynaceae',
		common: ['Golden Trumpet'],
		category: 'Flower',
		origin: 'Brazil',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Mealy bug', 'Scale', 'Spider mite'],
		diseases: 'N/A',
		use: 'Flower'
	},
	{
		id: 29,
		latin: 'Aglaonema',
		family: 'Araceae',
		common: ['Chinese Evergreen', 'BJ Freeman'],
		category: 'Aglaonema',
		origin: 'Hybrid',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Mealy bug', 'Scale'],
		diseases: ['Phytophtora', 'Crown rot'],
		use: ['Potted plant', 'Primary', 'Secondary']
	},
	{
		id: 30,
		latin: 'Aglaonema',
		family: 'Araceae',
		common: ['Chinese Evergreen', 'Marguerita'],
		category: 'Aglaonema',
		origin: 'Hybrid',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Mealy bug', 'Scale'],
		diseases: ['Phytophtora', 'Crown rot'],
		use: ['Potted plant', 'Primary', 'Secondary']
	},
	{
		id: 31,
		latin: 'Aglaonema',
		family: 'Araceae',
		common: ['Chinese Evergreen', 'Emerald Star'],
		category: 'Aglaonema',
		origin: 'Hybrid',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Mealy bug', 'Scale'],
		diseases: ['Phytophtora', 'Crown rot'],
		use: ['Potted plant', 'Secondary', 'Secondary']
	},
	{
		id: 32,
		latin: 'Aglaonema',
		family: 'Araceae',
		common: ['Chinese Evergreen', 'Silver Bay'],
		category: 'Aglaonema',
		origin: 'Hybrid',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Mealy bug', 'Scale'],
		diseases: ['Phytophtora', 'Crown rot'],
		use: ['Potted plant', 'Secondary', 'Tertiary']
	},
	{
		id: 33,
		latin: 'Aspidistra elatior',
		family: 'Liliaceae',
		common: ['Cast iron plant'],
		category: 'Foliage plant',
		origin: 'China',
		climate: 'Subtropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 8,
			fahrenheit: 46.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Water when soil is half dry. Can be dry between watering.',
		insects: ['Spider mite', 'Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Ground cover', 'Potted plant']
	},
	{
		id: 34,
		latin: 'Anthurium superbum',
		family: 'Araceae',
		common: ['Bronze Anthurium'],
		category: 'Anthurium',
		origin: 'Ecuador',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Water when soil is half dry. Can be dry between watering.',
		insects: ['Spider mite', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Table top', 'Colors / Forms', 'Secondary']
	},
	{
		id: 35,
		latin: 'Caryota mitis',
		family: 'Palmae',
		common: ['Fish tail palm'],
		category: 'Palm',
		origin: ' India',
		climate: 'Tropical',
		tempmax: {
			celsius: 25,
			fahrenheit: 77
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: ['Spider mite', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Potted plant', 'Primary']
	},
	{
		id: 36,
		latin: 'Codiaeum petra',
		family: 'Euphorbiaceae',
		common: ['Croton'],
		category: 'Foliage plant',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 37,
		latin: 'Cereus peruvianus',
		family: 'Cactaceae',
		common: ['Tree Cereus'],
		category: 'Cactus And Succulent',
		origin: 'Brazil',
		climate: 'Arid Tropical',
		tempmax: {
			celsius: 35,
			fahrenheit: 95
		},
		tempmin: {
			celsius: 5,
			fahrenheit: 41
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Water only when dry or when soil is half dry.',
		insects: ['Scale', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Potted plant', 'Primary']
	},
	{
		id: 38,
		latin: 'Blechnum gibbum',
		family: 'Polypodiaceae',
		common: ['Miniature tree fern', 'Dwarf tree fern'],
		category: 'Fern',
		origin: 'New Calidonia',
		climate: 'Tropical humid',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: ['Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 39,
		latin: 'Chamaedorea elegans',
		family: 'Arecaceae',
		common: ['Bella palm', 'Neanthebella palm', 'Dwarf palm', 'Parlor palm'],
		category: 'Palm',
		origin: 'Mexico',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 5,
			fahrenheit: 41
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Potted plant', 'Tertiary']
	},
	{
		id: 40,
		latin: 'Calathea veitchiana',
		family: 'Marantaceae',
		common: ['Medallion Calathea'],
		category: 'Foliage plant',
		origin: 'Hybrid',
		climate: 'Tropical',
		tempmax: {
			celsius: 25,
			fahrenheit: 77
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Table top', 'Ground cover']
	},
	{
		id: 41,
		latin: 'Calathea pictura Argentea',
		family: 'Marantaceae',
		common: ['Silver Calathea'],
		category: 'Foliage plant',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 25,
			fahrenheit: 77
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Table top', 'Ground cover', 'Tertiary']
	},
	{
		id: 42,
		latin: 'Bougainvillea',
		family: 'Nyctaginaceae',
		common: ['Bougainvillia', 'Paper flower'],
		category: 'Flower',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 32,
			fahrenheit: 89.6
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Aphid', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Potted plant', 'Colors / Forms', 'Primary']
	},
	{
		id: 43,
		latin: ' Chamaedorea seifrizii',
		family: 'Arecaceae',
		common: ['Bamboo palm', 'Reed Palm'],
		category: 'Palm',
		origin: 'Mexico',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 44,
		latin: ' Alocasia X amazonica',
		family: 'Araceae',
		common: ['Elephant ear'],
		category: 'Other',
		origin: 'Hybrid',
		climate: 'Tropical humid',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 15,
			fahrenheit: 59
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Mealy bug'],
		diseases: ['Phytophtora', 'Crown rot'],
		use: ['Colors / Forms', 'Table top', 'Tertiary']
	},
	{
		id: 45,
		latin: 'Anthurium X',
		family: 'Araceae',
		common: ['Tailflower', 'Wax flower'],
		category: 'Anthurium',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 22,
			fahrenheit: 71.6
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Water when soil is half dry. Can be dry between watering.',
		insects: ['Spider mite', 'Mealy bug', 'Aphid'],
		diseases: ['Erwinia', 'Crown rot'],
		use: ['Flower', 'Table top', 'Tertiary']
	},
	{
		id: 46,
		latin: 'Anthurium hookeri',
		family: 'Araceae',
		common: ['Bird nest Anthurium', 'Cabbage Anthurium'],
		category: 'Anthurium',
		origin: 'Guyana',
		climate: 'Tropical humid',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Water when soil is half dry. Can be dry between watering.',
		insects: ['Mealy bug', 'Snail', 'Aphid'],
		diseases: ['Erwinia', 'Crown rot'],
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 47,
		latin: 'Cissus rhombifolia',
		family: 'Vitaceae',
		common: ['Grape Ivy', 'Ellen Danica'],
		category: 'Hanging',
		origin: 'Cultivar',
		climate: 'Subtropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Can dry between watering',
		insects: 'Mealy bug',
		diseases: ['Downy mildiou', 'Powdery'],
		use: ['Hanging', 'Ground cover']
	},
	{
		id: 48,
		latin: 'Cereus peruvianus Monstrosus',
		family: 'Cactaceae',
		common: ['Monster cactus'],
		category: 'Cactus And Succulent',
		origin: 'Brazil',
		climate: 'Arid Tropical',
		tempmax: {
			celsius: 35,
			fahrenheit: 95
		},
		tempmin: {
			celsius: 5,
			fahrenheit: 41
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Water only when dry or when soil is half dry.',
		insects: ['Scale', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Potted plant', 'Primary']
	},
	{
		id: 49,
		latin: 'Chamaedorea erumpens',
		family: 'Arecaceae',
		common: ['Bamboo palm'],
		category: 'Palm',
		origin: 'Honduras',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 50,
		latin: 'Calathea stromata',
		family: 'Marantaceae',
		common: ['Stromante'],
		category: 'Foliage plant',
		origin: 'Brazil',
		climate: 'Tropical',
		tempmax: {
			celsius: 25,
			fahrenheit: 77
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Table top', 'Ground cover']
	},
	{
		id: 51,
		latin: 'Codiaeum',
		family: 'Euphorbiaceae',
		common: ['Croton'],
		category: 'Foliage plant',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Secondary', 'Tertiary']
	},
	{
		id: 52,
		latin: 'Calathea rufibarba',
		family: 'Marantaceae',
		common: ['Velvet Calathea'],
		category: 'Foliage plant',
		origin: 'Brazil',
		climate: 'Tropical',
		tempmax: {
			celsius: 25,
			fahrenheit: 77
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Table top', 'Ground cover']
	},
	{
		id: 53,
		latin: 'Alocasias X Amazonica var',
		family: 'Araceae',
		common: ['Elephant ear'],
		category: 'Other',
		origin: 'Hybrid',
		climate: 'Tropical humid',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 15,
			fahrenheit: 59
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Mealy bug'],
		diseases: ['Phytophtora', 'Crown rot'],
		use: ['Colors / Forms', 'Table top', 'Tertiary']
	},
	{
		id: 54,
		latin: 'Crassula argentea',
		family: 'Crasssulaceae',
		common: ['Jade Plant'],
		category: 'Cactus And Succulent',
		origin: 'South Africa',
		climate: 'Subtropical arid',
		tempmax: {
			celsius: 35,
			fahrenheit: 95
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 55
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Water only when the soil is dry. Must be dry between watering',
		insects: 'Mealy bug',
		diseases: 'N/A',
		use: ['Potted plant', 'Primary']
	},
	{
		id: 55,
		latin: 'Alocasias X Amazonica',
		family: 'Araceae',
		common: ['Elephant ear'],
		category: 'Other',
		origin: 'Hybrid',
		climate: 'Tropical humid',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 15,
			fahrenheit: 59
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Mealy bug'],
		diseases: ['Phytophtora', 'Crown rot'],
		use: ['Colors / Forms', 'Potted plant', 'Primary']
	},
	{
		id: 56,
		latin: 'Cissus rhombifolia',
		family: 'Vitaceae',
		common: ['Grape Ivy'],
		category: 'Hanging',
		origin: 'Central America & South America',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Can dry between watering',
		insects: 'Mealy bug',
		diseases: ['Downy mildiou', 'Powdery'],
		use: ['Hanging', 'Ground cover']
	},
	{
		id: 57,
		latin: 'Anthurium schlechtendalii',
		family: 'Araceae',
		common: ['Bird nest Anthurium', 'Cabbage Anthurium'],
		category: 'Anthurium',
		origin: 'Costa rica',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Water when soil is half dry. Can be dry between watering.',
		insects: ['Spider mite', 'Mealy bug', 'Aphid'],
		diseases: 'N/A',
		use: ['Potted plant', 'Colors / Forms', 'Primary']
	},
	{
		id: 58,
		latin: 'Chamaedorea metallica',
		family: 'Arecaceae',
		common: ['Miniature fishtail', 'Steel palm'],
		category: 'Palm',
		origin: 'Mexico',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: 'Mealy bug',
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 59,
		latin: 'Aspidistra elatior Minor',
		family: 'Liliaceae',
		common: ['Cast iron plant', 'Aspidistra Milky Way'],
		category: 'Foliage plant',
		origin: 'Japan',
		climate: 'Subtropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 8,
			fahrenheit: 46.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Water when soil is half dry. Can be dry between watering.',
		insects: ['Spider mite', 'Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Ground cover', 'Potted plant']
	},
	{
		id: 60,
		latin: 'Calathea ornata Rosea lineata',
		family: 'Marantaceae',
		common: ['Stiped calathea'],
		category: 'Foliage plant',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 25,
			fahrenheit: 77
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Table top', 'Ground cover', 'Tertiary']
	},
	{
		id: 61,
		latin: 'Asplenium nidus',
		family: 'Aspleniaceae',
		common: ['Birdnest fern'],
		category: 'Fern',
		origin: 'Asia',
		climate: 'Tropical humid',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 15,
			fahrenheit: 59
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: 'Mealy bug',
		diseases: 'N/A',
		use: ['Potted plant', 'Primary']
	},
	{
		id: 62,
		latin: 'Anthurium hookeri',
		family: 'Araceae',
		common: ['Bird nest Anthurium', 'Cabbage Anthurium'],
		category: 'Anthurium',
		origin: 'Guyana',
		climate: 'Tropical humid',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Water when soil is half dry. Can be dry between watering.',
		insects: ['Mealy bug', 'Snail', 'Aphid'],
		diseases: ['Erwinia', 'Crown rot'],
		use: ['Potted plant', 'Primary']
	},
	{
		id: 63,
		latin: 'Chlorophytum comosum',
		family: 'Liliaceae',
		common: ['Spider plant'],
		category: 'Hanging',
		origin: 'Central Africa',
		climate: 'Tropical to subtropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 5,
			fahrenheit: 41
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Hanging', 'Ground cover']
	},
	{
		id: 64,
		latin: 'Didymochlaena truncatula',
		family: 'Dryopteridaceae',
		common: ['Tree Maindenhair fern'],
		category: 'Fern',
		origin: 'South America',
		climate: 'Tropical humid',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 5,
			fahrenheit: 41
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: ['Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Potted plant', 'Tertiary']
	},
	{
		id: 65,
		latin: 'Dieffenbachia',
		family: 'Araceae',
		common: ['Dumcane', 'Tropic Mary Ann'],
		category: 'Dieffenbachia',
		origin: 'Hybrid',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Can dry between watering',
		insects: ['Spider mite', 'Mealy bug'],
		diseases: ['Fusarium', 'Erwinia'],
		use: ['Table top', 'Potted plant']
	},
	{
		id: 66,
		latin: 'Dieffenbachia',
		family: 'Araceae',
		common: ['Dumcane', 'Star Bright'],
		category: 'Dieffenbachia',
		origin: 'Hybrid',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Can dry between watering',
		insects: ['Spider mite', 'Mealy bug'],
		diseases: ['Fusarium', 'Erwinia'],
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 67,
		latin: 'Dracaena marginata',
		family: 'Liliaceae',
		common: ['Madagascar dragon tree', 'Tricolor'],
		category: 'Dracaena',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Can dry between watering',
		insects: ['Mealy bug', 'Scale', 'Spider mite'],
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 68,
		latin: 'Dracaena fragrans Massangeana',
		family: 'Liliaceae',
		common: ['Cornstalk plant'],
		category: 'Dracaena',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Can dry between watering',
		insects: ['Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Potted plant', 'Primary']
	},
	{
		id: 69,
		latin: 'Dracaena deremensis',
		family: 'Liliaceae',
		common: ['Janet Craig'],
		category: 'Dracaena',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Can dry between watering',
		insects: ['Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 70,
		latin: 'Cryptanthus Rose Eliane',
		family: 'Bromeliaceae',
		common: [],
		category: 'Bromeliad',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Direct sunlight',
		watering: 'Can be dry between watering. Water when soil is half dry.',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Table top', 'Primary']
	},
	{
		id: 71,
		latin: 'Dracaena reflexa',
		family: 'Liliaceae',
		common: ['Yellow Malaysian Dracaena', 'Song of India'],
		category: 'Dracaena',
		origin: ' India',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: 'Mealy bug',
		diseases: 'N/A',
		use: ['Potted plant', 'Primary']
	},
	{
		id: 72,
		latin: 'Dieffenbachia maculata',
		family: 'Araceae',
		common: ['Dumcane', 'Carina'],
		category: 'Dieffenbachia',
		origin: 'Hybrid',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Can dry between watering',
		insects: ['Spider mite', 'Mealy bug'],
		diseases: ['Fusarium', 'Erwinia'],
		use: ['Table top', 'Potted plant']
	},
	{
		id: 73,
		latin: 'Dracaena reflexa',
		family: 'Liliaceae',
		common: ['Malaysian Dracaena', 'Song of Jamaica'],
		category: 'Dracaena',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: 'Mealy bug',
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 74,
		latin: 'Cycas revoluta',
		family: 'Cycadaceae',
		common: ['Sago palm', 'King sago'],
		category: 'Palm',
		origin: 'Japan',
		climate: 'Subtropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 8,
			fahrenheit: 46.4
		},
		ideallight: 'Prefers bright, indirect sunlight.',
		toleratedlight: '/',
		watering: 'Water when soil is half dry. Can be dry between watering.',
		insects: ['Scale', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Potted plant', 'Primary']
	},
	{
		id: 75,
		latin: 'Crassula argentea',
		family: 'Crasssulaceae',
		common: ['Jade Plant'],
		category: 'Cactus And Succulent',
		origin: 'South Africa',
		climate: 'Subtropical arid',
		tempmax: {
			celsius: 35,
			fahrenheit: 95
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 55
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Water only when the soil is dry. Must be dry between watering',
		insects: 'Mealy bug',
		diseases: 'N/A',
		use: ['Potted plant', 'Primary']
	},
	{
		id: 76,
		latin: 'Ctenanthe lubbersiana',
		family: 'Marantaceae',
		common: ['Phrynium'],
		category: 'Foliage plant',
		origin: 'Brazil',
		climate: 'Tropical',
		tempmax: {
			celsius: 25,
			fahrenheit: 77
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: ['Spider mite', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 77,
		latin: 'Dracaena reflexa',
		family: 'Liliaceae',
		common: ['Malaysian Dracaena'],
		category: 'Dracaena',
		origin: 'Madagascar',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: 'Mealy bug',
		diseases: 'N/A',
		use: ['Table top', 'Tertiary']
	},
	{
		id: 78,
		latin: 'Dracaena deremensis',
		family: 'Liliaceae',
		common: ['Striped Dracaena', 'Gold Star'],
		category: 'Dracaena',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Can dry between watering',
		insects: ['Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 79,
		latin: 'Cyrtomium falcatum',
		family: 'Dryopteridaceae',
		common: ['Holly-fern'],
		category: 'Fern',
		origin: 'Asia',
		climate: 'Subtropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 5,
			fahrenheit: 41
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Scale', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Potted plant', 'Ground cover']
	},
	{
		id: 80,
		latin: 'Dracaena deremensis',
		family: 'Liliaceae',
		common: ['Dwarf bouquet', 'Calypso Queen', 'Janet Craig Compacta'],
		category: 'Dracaena',
		origin: 'Africa',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Can dry between watering',
		insects: ['Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 81,
		latin: 'Davallia trichomannoides',
		family: 'Davalliaceae',
		common: ['Rabbits foot', 'Squirrels foot'],
		category: 'Fern',
		origin: 'Canaries',
		climate: 'Tropical',
		tempmax: {
			celsius: 25,
			fahrenheit: 77
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Water when soil is half dry. Can be dry between watering.',
		insects: ['Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Hanging', 'Potted plant']
	},
	{
		id: 82,
		latin: 'Dracaena deremensis',
		family: 'Liliaceae',
		common: ['Lisa Dracaena', 'Lisa'],
		category: 'Dracaena',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Can dry between watering',
		insects: ['Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Potted plant', 'Primary']
	},
	{
		id: 83,
		latin: 'Dracaena marginata',
		family: 'Liliaceae',
		common: ['Madagascar dragon tree'],
		category: 'Dracaena',
		origin: 'Madagascar',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Can dry between watering',
		insects: ['Mealy bug', 'Scale', 'Spider mite'],
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 84,
		latin: 'Dracaena deremensis',
		family: 'Liliaceae',
		common: ['Striped Dracaena', 'Warneckei'],
		category: 'Dracaena',
		origin: 'Africa',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Can dry between watering',
		insects: ['Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 85,
		latin: 'Dracaena deremensis',
		family: 'Liliaceae',
		common: ['Striped Dracaena', 'Lemon Lime'],
		category: 'Dracaena',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Can dry between watering',
		insects: ['Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Table top', 'Tertiary']
	},
	{
		id: 86,
		latin: 'Dieffenbachia maculata',
		family: 'Araceae',
		common: ['Dumcane', 'Camille'],
		category: 'Dieffenbachia',
		origin: 'Hybrid',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Can dry between watering',
		insects: ['Spider mite', 'Mealy bug'],
		diseases: ['Fusarium', 'Erwinia'],
		use: ['Table top', 'Potted plant']
	},
	{
		id: 87,
		latin: 'Dieffenbachia amoena',
		family: 'Araceae',
		common: ['Dumcane', 'Tropic Snow'],
		category: 'Dieffenbachia',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Can dry between watering',
		insects: ['Spider mite', 'Mealy bug'],
		diseases: ['Fusarium', 'Erwinia'],
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 88,
		latin: 'Ficus elastica',
		family: 'Moraceae',
		common: ['Rubber plant', 'Tineke'],
		category: 'Ficus',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Can dry between watering',
		insects: ['Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Table top', 'Tertiary']
	},
	{
		id: 89,
		latin: 'Dypsis lutescens',
		family: 'Arecaceae',
		common: ['Areca palm', 'Butterfly palm'],
		category: 'Palm',
		origin: 'Madagascar',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: ['Spider mite', 'Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 90,
		latin: 'Epiphyllum',
		family: 'Cactaceae',
		common: ['Orchid cactus'],
		category: 'Cactus And Succulent',
		origin: 'Hybrid',
		climate: 'Tropical',
		tempmax: {
			celsius: 32,
			fahrenheit: 89.6
		},
		tempmin: {
			celsius: 5,
			fahrenheit: 41
		},
		ideallight: 'Bright light',
		toleratedlight: 'Direct sunlight',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: 'Mealy bug',
		diseases: 'N/A',
		use: ['Hanging', 'Secondary']
	},
	{
		id: 91,
		latin: 'Echinocactus grusonii',
		family: 'Cactaceae',
		common: ['Golden Barrel'],
		category: 'Cactus And Succulent',
		origin: 'Central Mexico',
		climate: 'Arid Tropical',
		tempmax: {
			celsius: 40,
			fahrenheit: 104
		},
		tempmin: {
			celsius: 5,
			fahrenheit: 41
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: '/',
		watering: 'Water only when dry. Must be dry between watering',
		insects: ['Mealy bug', 'Scale', 'Spider mite'],
		diseases: 'N/A',
		use: ['Potted plant', 'Primary']
	},
	{
		id: 92,
		latin: 'Euphorbia milii',
		family: 'Euphorbiaceae',
		common: ['Christ thorn', 'Crown of thorns'],
		category: 'Cactus And Succulent',
		origin: 'Madagascar',
		climate: 'Arid Tropical',
		tempmax: {
			celsius: 35,
			fahrenheit: 95
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Water only when the soil is dry. Must be dry between watering',
		insects: ['Mealy bug', 'White fly'],
		diseases: ['Downy mildiou', 'Gray mold'],
		use: ['Table top', 'Tertiary']
	},
	{
		id: 93,
		latin: 'Epipremnum aureum',
		family: 'Araceae',
		common: ['White Pothos', 'Marble Queen'],
		category: 'Hanging',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: 'Mealy bug',
		diseases: ['Pythium'],
		use: ['Hanging', 'Tertiary']
	},
	{
		id: 94,
		latin: 'Guzmania',
		family: 'Bromeliaceae',
		common: ['Guzmania', 'Guzmania Sunnytime'],
		category: 'Bromeliad',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Water when soil is half dry. Change water in the vase regularly.',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Table top', 'Tertiary']
	},
	{
		id: 95,
		latin: 'Ficus maclellandii',
		family: 'Moraceae',
		common: ['Willow fig tree', 'Amstel King'],
		category: 'Ficus',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: ['Spider mite', 'Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Potted plant', 'Primary']
	},
	{
		id: 96,
		latin: 'Guzmania',
		family: 'Bromeliaceae',
		common: ['Guzmania', 'Guzmania Empire'],
		category: 'Bromeliad',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Water when soil is half dry. Change water in the vase regularly.',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Table top', 'Tertiary']
	},
	{
		id: 97,
		latin: 'Ficus benjamina',
		family: 'Moraceae',
		common: ['Weeping fig'],
		category: 'Ficus',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: ['Spider mite', 'Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 98,
		latin: 'Fatsia japonica',
		family: 'Araliaceae',
		common: ['Japanese Aralia'],
		category: 'Aralia',
		origin: 'Japan',
		climate: 'Subtropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 8,
			fahrenheit: 46.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Direct sunlight',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Table top', 'Potted plant']
	},
	{
		id: 99,
		latin: 'Euphorbia ammack',
		family: 'Euphorbiaceae',
		common: ['Variegated Euphorbia'],
		category: 'Cactus And Succulent',
		origin: 'Africa',
		climate: 'Arid Tropical',
		tempmax: {
			celsius: 35,
			fahrenheit: 95
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Must be dry between watering. Water only when dry.',
		insects: ['Mealy bug', 'White fly'],
		diseases: 'Downy mildiou',
		use: ['Potted plant', 'Primary']
	},
	{
		id: 100,
		latin: 'Ficus pumila',
		family: 'Moraceae',
		common: ['Creeping fig', 'Curl'],
		category: 'Ficus',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: ['Spider mite', 'Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Hanging', 'Ground cover']
	},
	{
		id: 101,
		latin: 'Guzmania',
		family: 'Bromeliaceae',
		common: ['Guzmania', 'Claret'],
		category: 'Bromeliad',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Water when soil is half dry. Change water in the vase regularly.',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Table top', 'Tertiary']
	},
	{
		id: 102,
		latin: 'Ficus elastica',
		family: 'Moraceae',
		common: ['Rubber plant', 'Robusta'],
		category: 'Ficus',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Can dry between watering',
		insects: ['Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 103,
		latin: 'Hedera canariensis',
		family: 'Araliaceae',
		common: ['Algerian ivy', 'Montgomery ivy'],
		category: 'Hanging',
		origin: 'Canaries',
		climate: 'Subtropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 5,
			fahrenheit: 41
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Hanging', 'Ground cover']
	},
	{
		id: 104,
		latin: 'Epipremnum aureum',
		family: 'Araceae',
		common: ['Golden Pothos'],
		category: 'Hanging',
		origin: 'South Pacific',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: 'Mealy bug',
		diseases: ['Pythium'],
		use: ['Hanging', 'Tertiary']
	},
	{
		id: 105,
		latin: 'Ficus lyrata',
		family: 'Moraceae',
		common: ['Fidleleaf fig'],
		category: 'Ficus',
		origin: 'Ouest Africa',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 106,
		latin: 'Euphorbia ingens',
		family: 'Euphorbiaceae',
		common: ['Giant Candelabra tree'],
		category: 'Cactus And Succulent',
		origin: 'South Africa',
		climate: 'Arid Tropical',
		tempmax: {
			celsius: 35,
			fahrenheit: 95
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Water only when the soil is dry. Must be dry between watering',
		insects: 'Mealy bug',
		diseases: 'Downy mildiou',
		use: ['Potted plant', 'Primary']
	},
	{
		id: 107,
		latin: 'Ficus benjamina',
		family: 'Moraceae',
		common: ['Weeping fig', 'Monique'],
		category: 'Ficus',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: ['Spider mite', 'Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 108,
		latin: 'Guzmania',
		family: 'Bromeliaceae',
		common: ['Guzmania', 'Mariposa'],
		category: 'Bromeliad',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Water when soil is half dry. Change water in the vase regularly.',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Table top', 'Tertiary']
	},
	{
		id: 109,
		latin: 'Ficus maclellandii Alii',
		family: 'Moraceae',
		common: ['Willow Ficus'],
		category: 'Ficus',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: ['Spider mite', 'Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Potted plant', 'Primary']
	},
	{
		id: 110,
		latin: 'Guzmania',
		family: 'Bromeliaceae',
		common: ['Guzmania', 'Marjan'],
		category: 'Bromeliad',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Water when soil is half dry. Change water in the vase regularly.',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Table top', 'Tertiary']
	},
	{
		id: 111,
		latin: 'Ficus benjamina',
		family: 'Moraceae',
		common: ['Weeping fig', 'Midnight'],
		category: 'Ficus',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: ['Spider mite', 'Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 112,
		latin: 'Guzmania',
		family: 'Bromeliaceae',
		common: ['Guzmania', 'Rana'],
		category: 'Bromeliad',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Water when soil is half dry. Change water in the vase regularly.',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Table top', 'Tertiary']
	},
	{
		id: 113,
		latin: 'Ficus elastica',
		family: 'Moraceae',
		common: ['Rubber plant', 'Burgandy'],
		category: 'Ficus',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Can dry between watering',
		insects: ['Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 114,
		latin: 'Euphorbia drupifera',
		family: 'Euphorbiaceae',
		common: [],
		category: 'Cactus And Succulent',
		origin: 'Guinea',
		climate: 'Arid Tropical',
		tempmax: {
			celsius: 35,
			fahrenheit: 95
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Water only when the soil is dry. Must be dry between watering',
		insects: 'Mealy bug',
		diseases: 'Downy mildiou',
		use: ['Potted plant', 'Primary']
	},
	{
		id: 115,
		latin: 'Hedera helix',
		family: 'Araliaceae',
		common: ['English ivy', 'Gold Baby'],
		category: 'Hanging',
		origin: 'Cultivar',
		climate: 'Subtropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 5,
			fahrenheit: 41
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Hanging', 'Ground cover']
	},
	{
		id: 116,
		latin: 'Maranta leuconeura erythroneura',
		family: 'Marantaceae',
		common: ['Herringbone', 'Pink praying plant'],
		category: 'Hanging',
		origin: 'Brazil',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: 'Mealy bug',
		diseases: 'N/A',
		use: ['Hanging', 'Table top']
	},
	{
		id: 117,
		latin: 'Hedera helix',
		family: 'Araliaceae',
		common: ['English ivy', 'Hermania'],
		category: 'Hanging',
		origin: 'Cultivar',
		climate: 'Subtropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 5,
			fahrenheit: 41
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Hanging', 'Ground cover']
	},
	{
		id: 118,
		latin: 'Monstera deliciosa',
		family: 'Araceae',
		common: ['Splitleaf Philodendron', 'Mexican Breadfruit'],
		category: 'Philodendron',
		origin: 'Central America',
		climate: 'Tropical',
		tempmax: {
			celsius: 32,
			fahrenheit: 89.6
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Water when soil is half dry. Can be dry between watering.',
		insects: 'Mealy bug',
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 119,
		latin: 'Mandevilla X',
		family: 'Apocynaceae',
		common: [],
		category: 'Flower',
		origin: 'Hybrid',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: ['Spider mite', 'Mealy bug', 'Aphid'],
		diseases: 'N/A',
		use: ['Flower', 'Potted plant']
	},
	{
		id: 120,
		latin: 'Peperomia obtusifolia',
		family: 'Piperaceae',
		common: ['Baby rubber plant', 'Pepper face'],
		category: 'Other',
		origin: 'Venezuela',
		climate: 'Tropical',
		tempmax: {
			celsius: 32,
			fahrenheit: 89.6
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: '/',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: 'Mealy bug',
		diseases: 'N/A',
		use: ['Table top', 'Ground cover', 'Tertiary']
	},
	{
		id: 121,
		latin: 'Ophiopogon japonicus',
		family: 'Liliaceae',
		common: ['Snakes beard'],
		category: 'Grass',
		origin: 'Japan',
		climate: 'Subtropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 5,
			fahrenheit: 41
		},
		ideallight: 'Bright light',
		toleratedlight: 'Direct sunlight',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Scale'],
		diseases: 'N/A',
		use: ['Ground cover', 'Tertiary']
	},
	{
		id: 122,
		latin: 'Hedychium coronarium',
		family: 'Zingiberaceae',
		common: ['Butterfly Ginger', 'White Ginger'],
		category: 'Flower',
		origin: 'China',
		climate: 'Subtropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Flower', 'Secondary']
	},
	{
		id: 123,
		latin: 'Hedera helix variegata',
		family: 'Araliaceae',
		common: ['English ivy', 'Variegated English ivy'],
		category: 'Hanging',
		origin: 'Cultivar',
		climate: 'Subtropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 5,
			fahrenheit: 41
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Hanging', 'Ground cover']
	},
	{
		id: 124,
		latin: 'Pellaea falcata',
		family: 'Sinopteridaceae',
		common: [],
		category: 'Fern',
		origin: 'Australia & New Guinea',
		climate: 'Tropical',
		tempmax: {
			celsius: 25,
			fahrenheit: 77
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: 'Mealy bug',
		diseases: 'N/A',
		use: ['Table top', 'Ground cover', 'Tertiary']
	},
	{
		id: 125,
		latin: 'Hedera helix',
		family: 'Araliaceae',
		common: ['English ivy', 'Garland'],
		category: 'Hanging',
		origin: 'Cultivar',
		climate: 'Subtropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 5,
			fahrenheit: 41
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Hanging', 'Ground cover']
	},
	{
		id: 126,
		latin: 'Hoya carnosa Exotica',
		family: 'Asclepiadaceae',
		common: ['Wax plant'],
		category: 'Hanging',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Water when soil is half dry. Can be dry between watering.',
		insects: ['Mealy bug', 'Thrips'],
		diseases: 'N/A',
		use: ['Hanging', 'Table top']
	},
	{
		id: 127,
		latin: 'Nerium oleander',
		family: 'Apocynaceae',
		common: ['Oleander', 'Rose bay'],
		category: 'Flower',
		origin: 'Mediterranean',
		climate: 'Subtropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 5,
			fahrenheit: 41
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: '/',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: ['Scale', 'Aphid', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 128,
		latin: 'Pachypodium geayi',
		family: 'Apocynaceae',
		common: ['Madagascar Palm'],
		category: 'Cactus And Succulent',
		origin: 'Madagascar',
		climate: 'Arid Tropical',
		tempmax: {
			celsius: 35,
			fahrenheit: 95
		},
		tempmin: {
			celsius: 8,
			fahrenheit: 46.4
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Water only when the soil is dry. Must be dry between watering',
		insects: 'Mealy bug',
		diseases: 'N/A',
		use: ['Potted plant', 'Primary']
	},
	{
		id: 129,
		latin: 'Licuala spinosa',
		family: 'Arecaceae',
		common: ['Spiny licuala palm'],
		category: 'Palm',
		origin: 'Malaysia',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 15,
			fahrenheit: 59
		},
		ideallight: 'Bright light',
		toleratedlight: 'Direct sunlight',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 130,
		latin: 'Philodendron',
		family: 'Araceae',
		common: ['Red Philodendron', 'Imperial Red'],
		category: 'Philodendron',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: 'Mealy bug',
		diseases: 'Erwinia',
		use: ['Table top', 'Secondary']
	},
	{
		id: 131,
		latin: 'Neoregelia Flandria',
		family: 'Bromeliaceae',
		common: [],
		category: 'Bromeliad',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Change water regularly in the vase. Water when soil is half dry.',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Table top', 'Colors / Forms']
	},
	{
		id: 132,
		latin: 'Liriope muscari Variegata',
		family: 'Liliaceae',
		common: ['Variegated lily turf'],
		category: 'Foliage plant',
		origin: 'Japan',
		climate: 'Subtropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 8,
			fahrenheit: 46.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Direct sunlight',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Scale'],
		diseases: 'N/A',
		use: ['Ground cover', 'Table top']
	},
	{
		id: 133,
		latin: 'Philodendron micans',
		family: 'Araceae',
		common: ['Velvet leaf vine'],
		category: 'Philodendron',
		origin: 'Dominica',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: 'Mealy bug',
		diseases: 'Erwinia',
		use: ['Hanging', 'Secondary']
	},
	{
		id: 134,
		latin: 'Maranta leuconeura kerchoveana',
		family: 'Marantaceae',
		common: ['Green prayer plant', 'Herringbone'],
		category: 'Hanging',
		origin: 'Brazil',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: 'Mealy bug',
		diseases: 'N/A',
		use: ['Hanging', 'Table top']
	},
	{
		id: 135,
		latin: 'Neoregelia Victoria Pink',
		family: 'Bromeliaceae',
		common: [],
		category: 'Bromeliad',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Change water regularly in the vase. Water when soil is half dry.',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Table top', 'Colors / Forms']
	},
	{
		id: 136,
		latin: 'Nolina recurvata',
		family: 'Agavaceae',
		common: ['Elephant foot', 'Pony tail'],
		category: 'Foliage plant',
		origin: 'Mexico',
		climate: 'Arid Tropical',
		tempmax: {
			celsius: 32,
			fahrenheit: 89.6
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Water when soil is half dry. Can be dry between watering.',
		insects: ['Scale', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Primary', 'Potted plant']
	},
	{
		id: 137,
		latin: 'Philodendron',
		family: 'Araceae',
		common: ['Lime philodendron', 'Moonlight'],
		category: 'Philodendron',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: 'Mealy bug',
		diseases: 'Erwinia',
		use: ['Table top', 'Secondary']
	},
	{
		id: 138,
		latin: 'Phalaenopsis X',
		family: 'Orchidaceae',
		common: [],
		category: 'Flower',
		origin: 'Hybrid',
		climate: 'Tropical humid',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Water when soil is half dry. Can be dry between watering.',
		insects: ['Thrips', 'Aphid'],
		diseases: 'N/A',
		use: ['Table top', 'Secondary']
	},
	{
		id: 139,
		latin: 'Hyophorbe verschaffeltii',
		family: 'Arecaceae',
		common: ['Spindle palm'],
		category: 'Palm',
		origin: 'Rodrigue Island',
		climate: 'Tropical',
		tempmax: {
			celsius: 35,
			fahrenheit: 95
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Potted plant', 'Primary']
	},
	{
		id: 140,
		latin: 'Hedera helix',
		family: 'Araliaceae',
		common: ['English ivy'],
		category: 'Topiairy',
		origin: 'Cultivar',
		climate: 'Subtropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 5,
			fahrenheit: 41
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Hanging', 'Ground cover']
	},
	{
		id: 141,
		latin: 'Nolina guatemalensis',
		family: 'Agavaceae',
		common: ['Elephant foot', 'Pony tail'],
		category: 'Foliage plant',
		origin: 'Mexico',
		climate: 'Arid Tropical',
		tempmax: {
			celsius: 32,
			fahrenheit: 89.6
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Water when soil is half dry. Can be dry between watering.',
		insects: ['Scale', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Primary', 'Potted plant']
	},
	{
		id: 142,
		latin: 'Medinilla magnifica',
		family: 'Melastomataceae',
		common: ['Rose grape'],
		category: 'Flower',
		origin: 'Philippines',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 15,
			fahrenheit: 59
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: 'Mealy bug',
		diseases: 'N/A',
		use: ['Potted plant', 'Flower']
	},
	{
		id: 143,
		latin: 'Hibiscus rosa sinensis',
		family: 'Malvaceae',
		common: ['Chinese hibiscus'],
		category: 'Flower',
		origin: 'Asia',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: ['Spider mite', 'Aphid', 'White fly'],
		diseases: 'N/A',
		use: ['Flower', 'Secondary']
	},
	{
		id: 144,
		latin: 'Nephrolepis exaltata var',
		family: 'Nephrolepidaceae',
		common: ['Boston fern', 'Sword fern'],
		category: 'Fern',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Hanging', 'Tertiary']
	},
	{
		id: 145,
		latin: 'Howea forsteriana',
		family: 'Arecaceae',
		common: ['Kentia palm', 'Paradise palm'],
		category: 'Palm',
		origin: 'South Pacific',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Potted plant', 'Primary']
	},
	{
		id: 146,
		latin: 'Philodendron',
		family: 'Araceae',
		common: ['Emerald Prince'],
		category: 'Philodendron',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: 'Mealy bug',
		diseases: 'Erwinia',
		use: ['Table top', 'Secondary']
	},
	{
		id: 147,
		latin: 'Homalomena',
		family: 'Araceae',
		common: ['Emerald Gem'],
		category: 'Foliage plant',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: 'Mealy bug',
		diseases: 'N/A',
		use: ['Table top', 'Tertiary']
	},
	{
		id: 148,
		latin: 'Peperomia clusiifolia',
		family: 'Piperaceae',
		common: ['Tricolor Peperomia'],
		category: 'Other',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 32,
			fahrenheit: 89.6
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: '/',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: 'Mealy bug',
		diseases: 'N/A',
		use: ['Table top', 'Ground cover', 'Tertiary']
	},
	{
		id: 149,
		latin: 'Pandorea jasminoides',
		family: 'Bignoniaceae',
		common: ['Bower plant', 'Bower of beauty'],
		category: 'Flower',
		origin: 'Australia',
		climate: 'Subtropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 8,
			fahrenheit: 46.4
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: 'Mealy bug',
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 150,
		latin: 'Neoregelia carolinae var.',
		family: 'Bromeliaceae',
		common: [],
		category: 'Bromeliad',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Change water regularly in the vase. Water when soil is half dry.',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Table top', 'Colors / Forms']
	},
	{
		id: 151,
		latin: 'Radermachera sinica',
		family: 'Bignoniaceae',
		common: ['China doll'],
		category: 'Other',
		origin: 'China',
		climate: 'Subtropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 8,
			fahrenheit: 46.4
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: 'Mealy bug',
		diseases: 'N/A',
		use: ['Table top', 'Tertiary']
	},
	{
		id: 152,
		latin: 'Pteris cretica Parkeri',
		family: 'Pteridaceae',
		common: ['Cretan brake'],
		category: 'Fern',
		origin: 'Cultivar',
		climate: 'Tropical humid',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: '/',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Table top', 'Tertiary']
	},
	{
		id: 153,
		latin: 'Polystichum tsus simense',
		family: 'Dryopteridaceae',
		common: ['Korean rock fern', 'Tsu sima holly fern'],
		category: 'Fern',
		origin: 'Korea',
		climate: 'Subtropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: -5,
			fahrenheit: 23
		},
		ideallight: 'Bright light',
		toleratedlight: '/',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Table top', 'Tertiary']
	},
	{
		id: 154,
		latin: 'Polystichum polyblepharum',
		family: 'Dryopteridaceae',
		common: ['Japanese tassel fern'],
		category: 'Fern',
		origin: 'Japan',
		climate: 'Subtropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: -5,
			fahrenheit: 23
		},
		ideallight: 'Bright light',
		toleratedlight: '/',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Table top', 'Tertiary']
	},
	{
		id: 155,
		latin: 'Ravenea rivularis',
		family: 'Arecaceae',
		common: ['Majesty palm'],
		category: 'Palm',
		origin: 'Madagascar',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 8,
			fahrenheit: 46.4
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: ['Spider mite', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 156,
		latin: 'Polyscias scutellaria',
		family: 'Araliaceae',
		common: ['Fabian Aralia', 'Red Aralia'],
		category: 'Aralia',
		origin: 'Asia',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Aphid', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Potted plant', 'Primary']
	},
	{
		id: 157,
		latin: 'Pteris cretica Albo lineata',
		family: 'Pteridaceae',
		common: ['Silver Ribbon Fern'],
		category: 'Fern',
		origin: 'Cultivar',
		climate: 'Tropical humid',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: '/',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Table top', 'Tertiary']
	},
	{
		id: 158,
		latin: 'Platycerium bifurcatum',
		family: 'Polypodiaceae',
		common: ['Staghorn fern'],
		category: 'Fern',
		origin: 'Australia',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 5,
			fahrenheit: 41
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Potted plant', 'Tertiary']
	},
	{
		id: 159,
		latin: 'Philodendron Xanadu',
		family: 'Araceae',
		common: [],
		category: 'Philodendron',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: 'Mealy bug',
		diseases: 'Erwinia',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 160,
		latin: 'Polyscias pinnatta',
		family: 'Araliaceae',
		common: ['Balfour aralia', 'Aralia Balfouriana', 'Lemon Lime'],
		category: 'Aralia',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Aphid', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Potted plant', 'Primary']
	},
	{
		id: 161,
		latin: 'Philodendron Tatei Congo',
		family: 'Araceae',
		common: [],
		category: 'Philodendron',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: 'Mealy bug',
		diseases: 'Erwinia',
		use: ['Table top', 'Secondary']
	},
	{
		id: 162,
		latin: 'Sansevieria trifasciata Laurentii',
		family: 'Liliaceae',
		common: ['Snake plant'],
		category: 'Sansevieria',
		origin: 'South Africa',
		climate: 'Tropical',
		tempmax: {
			celsius: 35,
			fahrenheit: 95
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Water when soil is half dry. Can be dry between watering.',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Potted plant', 'Tertiary']
	},
	{
		id: 163,
		latin: 'Philodendron pinnatifidum',
		family: 'Araceae',
		common: ['Fernleaf Philodendron'],
		category: 'Philodendron',
		origin: 'Venezuela',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: 'Mealy bug',
		diseases: 'Erwinia',
		use: ['Table top', 'Tertiary']
	},
	{
		id: 164,
		latin: 'Podocarpus gracilior',
		family: 'Podocarpaceae',
		common: ['African fern pine', 'Buddhist pine'],
		category: 'Foliage plant',
		origin: 'Central Africa',
		climate: 'Subtropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: ['Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Potted plant', 'Primary']
	},
	{
		id: 165,
		latin: 'Sansevieria trifasciata Hahnii',
		family: 'Liliaceae',
		common: ['Birdnest sansevieria', 'Snake plant'],
		category: 'Sansevieria',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 35,
			fahrenheit: 95
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Water when soil is half dry. Can be dry between watering.',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Table top', 'Tertiary']
	},
	{
		id: 166,
		latin: 'Sansevieria trifasciata',
		family: 'Liliaceae',
		common: ['Snake plant'],
		category: 'Sansevieria',
		origin: 'South Africa',
		climate: 'Subtropical',
		tempmax: {
			celsius: 35,
			fahrenheit: 95
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Water when soil is half dry. Can be dry between watering.',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Potted plant', 'Primary']
	},
	{
		id: 167,
		latin: 'Polyscias crispata',
		family: 'Araliaceae',
		common: ['Chicken gizard aralia'],
		category: 'Aralia',
		origin: 'Malaysia',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Aphid', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Potted plant', 'Primary']
	},
	{
		id: 168,
		latin: 'Phoenix roebellinii',
		family: 'Palmae',
		common: ['Pignee Date palm'],
		category: 'Palm',
		origin: 'Vietnam',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 8,
			fahrenheit: 46.4
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: '/',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: ['Spider mite', 'Scale'],
		diseases: 'N/A',
		use: ['Potted plant', 'Primary']
	},
	{
		id: 169,
		latin: 'Polyscias pinnata Marginata',
		family: 'Araliaceae',
		common: ['Variegated Balfour aralia', 'Aralia Balfouriana'],
		category: 'Aralia',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Aphid', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Potted plant', 'Primary']
	},
	{
		id: 170,
		latin: 'Polyscias fruticosa Elegans',
		family: 'Araliaceae',
		common: ['Ming Aralia', 'Parsley panax'],
		category: 'Aralia',
		origin: 'Malaysia',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Aphid', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Potted plant', 'Primary']
	},
	{
		id: 171,
		latin: 'Philodendron selloum',
		family: 'Araceae',
		common: ['Lacy tree philodendron'],
		category: 'Philodendron',
		origin: 'Brazil',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: 'Mealy bug',
		diseases: 'Erwinia',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 172,
		latin: 'Pteris ensiformis Evergemiensis',
		family: 'Pteridaceae',
		common: ['Silver Lace Fern'],
		category: 'Fern',
		origin: 'Asia',
		climate: 'Tropical humid',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: '/',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Table top', 'Tertiary']
	},
	{
		id: 173,
		latin: 'Rhapis excelsa',
		family: 'Arecaceae',
		common: ['Lady palm'],
		category: 'Palm',
		origin: 'China',
		climate: 'Subtropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 8,
			fahrenheit: 46.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 174,
		latin: 'Polyscias fruticosa',
		family: 'Araliaceae',
		common: ['Ming Aralia', 'Parsley panax'],
		category: 'Aralia',
		origin: 'Malaysia',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Aphid', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Potted plant', 'Primary']
	},
	{
		id: 175,
		latin: 'Philodendron scandens oxycardium',
		family: 'Araceae',
		common: ['Parlor ivy', 'Sweetheart plant', 'Heartleaf philodendron', 'Cordatum vine'],
		category: 'Philodendron',
		origin: 'Central America',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 18,
			fahrenheit: 64.4
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: 'Mealy bug',
		diseases: 'Erwinia',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 176,
		latin: 'Veitchia merrillii',
		family: 'Arecaceae',
		common: ['Adonidia', 'Christmas palm', 'Manila palm'],
		category: 'Palm',
		origin: 'Philippines',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 15,
			fahrenheit: 59
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: ['Spider mite', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 177,
		latin: 'Spathiphyllum Lynise',
		family: 'Araceae',
		common: ['Peace lily'],
		category: 'Spathiphyllum',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 15,
			fahrenheit: 59
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: ['Mealy bug', 'Thrips'],
		diseases: 'Phytophtora',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 178,
		latin: 'Spathiphyllum Ceres',
		family: 'Araceae',
		common: ['Peace lily'],
		category: 'Spathiphyllum',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 15,
			fahrenheit: 59
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: ['Mealy bug', 'Thrips'],
		diseases: 'Phytophtora',
		use: ['Table top', 'Tertiary']
	},
	{
		id: 179,
		latin: 'Vriesea splendens',
		family: 'Bromeliaceae',
		common: [],
		category: 'Bromeliad',
		origin: 'Venezuela',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 15,
			fahrenheit: 59
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Change water regularly in the vase. Water when soil is half dry.',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Table top', 'Tertiary']
	},
	{
		id: 180,
		latin: 'Trichilia dregei',
		family: 'Miliaceae',
		common: ['Cape mahogany', 'Christmas bells'],
		category: 'Other',
		origin: 'Zimbabwe',
		climate: 'Tropical humid',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: 'Mealy bug',
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 181,
		latin: 'Vriesea Ginger',
		family: 'Bromeliaceae',
		common: [],
		category: 'Bromeliad',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 15,
			fahrenheit: 59
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Change water regularly in the vase. Water when soil is half dry.',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Table top', 'Tertiary']
	},
	{
		id: 182,
		latin: 'Vriesea Charlotte',
		family: 'Bromeliaceae',
		common: [],
		category: 'Bromeliad',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 15,
			fahrenheit: 59
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Change water regularly in the vase. Water when soil is half dry.',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Table top', 'Tertiary']
	},
	{
		id: 183,
		latin: 'Syngonium podophyllum',
		family: 'Araceae',
		common: ['African evergreen', 'Arrowhead vine', 'Goosefoot plant', 'White Lightning'],
		category: 'Hanging',
		origin: 'Cultivar',
		climate: 'Tropical humid',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Mealy bug'],
		diseases: ['Crown rot', 'Erwinia'],
		use: ['Hanging', 'Tertiary']
	},
	{
		id: 184,
		latin: 'Syagrus schizophylla',
		family: 'Arecaceae',
		common: ['Parrot palm'],
		category: 'Palm',
		origin: 'Brazil',
		climate: 'Tropical humid',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Potted plant', 'Primary']
	},
	{
		id: 185,
		latin: 'Tillandsia cyanea',
		family: 'Bromeliaceae',
		common: ['Pink quill'],
		category: 'Bromeliad',
		origin: 'Ecuador',
		climate: 'Tropical humid',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 15,
			fahrenheit: 59
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Change water regularly in the vase. Water when soil is half dry.',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Table top', 'Tertiary']
	},
	{
		id: 186,
		latin: 'Vriesea Christiane',
		family: 'Bromeliaceae',
		common: [],
		category: 'Bromeliad',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 15,
			fahrenheit: 59
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Change water regularly in the vase. Water when soil is half dry.',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Table top', 'Tertiary']
	},
	{
		id: 187,
		latin: 'Tillandsia Creation',
		family: 'Bromeliaceae',
		common: [],
		category: 'Bromeliad',
		origin: 'Hybrid',
		climate: 'Tropical humid',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 15,
			fahrenheit: 59
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Change water regularly in the vase. Water when soil is half dry.',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Table top', 'Tertiary']
	},
	{
		id: 188,
		latin: 'Xanthosoma lindenii',
		family: 'Araceae',
		common: [' Indian kale'],
		category: 'Foliage plant',
		origin: 'Colombia',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Potted plant', 'Primary']
	},
	{
		id: 189,
		latin: 'Schefflera elegantissima',
		family: 'Araliaceae',
		common: ['False aralia'],
		category: 'Aralia',
		origin: 'New Calidonia',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Can dry between watering',
		insects: ['Spider mite', 'Mealy bug', 'Scale'],
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 190,
		latin: 'Spathiphyllum Sensation',
		family: 'Araceae',
		common: ['Peace lily'],
		category: 'Spathiphyllum',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 15,
			fahrenheit: 59
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: ['Mealy bug', 'Thrips'],
		diseases: 'Phytophtora',
		use: ['Potted plant', 'Primary']
	},
	{
		id: 191,
		latin: 'Spathiphyllum Starlight',
		family: 'Liliaceae',
		common: ['Peace lily'],
		category: 'Spathiphyllum',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 15,
			fahrenheit: 59
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: ['Mealy bug', 'Thrips'],
		diseases: 'Phytophtora',
		use: ['Table top', 'Tertiary']
	},
	{
		id: 192,
		latin: 'Sedum morganianum',
		family: 'Crasssulaceae',
		common: ['Burro tail'],
		category: 'Hanging',
		origin: 'Mexico',
		climate: 'Arid Tropical',
		tempmax: {
			celsius: 35,
			fahrenheit: 95
		},
		tempmin: {
			celsius: 8,
			fahrenheit: 46.4
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Water only when the soil is dry. Must be dry between watering',
		insects: 'Mealy bug',
		diseases: 'N/A',
		use: ['Hanging', 'Tertiary']
	},
	{
		id: 193,
		latin: 'Spathiphyllum Domino',
		family: 'Araceae',
		common: ['Peace lily'],
		category: 'Spathiphyllum',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 15,
			fahrenheit: 59
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: ['Mealy bug', 'Thrips'],
		diseases: 'Phytophtora',
		use: ['Table top', 'Tertiary']
	},
	{
		id: 194,
		latin: 'Syngonium podophyllum',
		family: 'Araceae',
		common: ['African evergreen', 'Arrowhead vine', 'Goosefoot plant', 'Pink Allusion'],
		category: 'Hanging',
		origin: 'Cultivar',
		climate: 'Tropical humid',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Mealy bug'],
		diseases: ['Crown rot', 'Erwinia'],
		use: ['Hanging', 'Tertiary']
	},
	{
		id: 195,
		latin: 'Scindapsus pictus argyraeus',
		family: 'Araceae',
		common: ['Picta Philodendron', 'Satin pothos', 'Devils ivy'],
		category: 'Hanging',
		origin: 'Indonisia',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Water when soil is half dry. Can be dry between watering.',
		insects: 'Mealy bug',
		diseases: 'N/A',
		use: ['Hanging', 'Tertiary']
	},
	{
		id: 196,
		latin: 'Xanthorrhoea arborea',
		family: 'Liliaceae',
		common: ['Grass tree'],
		category: 'Other',
		origin: 'Australia',
		climate: 'Arid Tropical',
		tempmax: {
			celsius: 35,
			fahrenheit: 95
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: '/',
		watering: 'Water only when the soil is dry. Must be dry between watering',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Potted plant', 'Primary']
	},
	{
		id: 197,
		latin: 'Schefflera arboricola Trinette',
		family: 'Araliaceae',
		common: ['Yellow Hawaiian elf', 'Yellow parasol plant'],
		category: 'Schefflera',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Aphid', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Table top', 'Secondary']
	},
	{
		id: 198,
		latin: 'Schefflera actinophylla Amate',
		family: 'Araliaceae',
		common: ['Umbella plant'],
		category: 'Schefflera',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Aphid', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 199,
		latin: 'Schefflera actinophylla Renegade',
		family: 'Araliaceae',
		common: ['Umbella plant'],
		category: 'Schefflera',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Aphid', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 200,
		latin: 'Sansevieria trifasciata var',
		family: 'Liliaceae',
		common: ['Snake plant'],
		category: 'Sansevieria',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 35,
			fahrenheit: 95
		},
		tempmin: {
			celsius: 10,
			fahrenheit: 50
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Water when soil is half dry. Can be dry between watering.',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 201,
		latin: 'Spathiphyllum Supreme',
		family: 'Liliaceae',
		common: ['Peace lily'],
		category: 'Spathiphyllum',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 15,
			fahrenheit: 59
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: ['Mealy bug', 'Thrips'],
		diseases: 'Phytophtora',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 202,
		latin: 'Schefflera arboricola',
		family: 'Araliaceae',
		common: ['Hawaiian elf', 'Parasol plant'],
		category: 'Schefflera',
		origin: 'Taiwan',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Aphid', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 203,
		latin: 'Spathiphyllum',
		family: 'Araceae',
		common: ['Peace lily', 'Emerald Swirl'],
		category: 'Spathiphyllum',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 15,
			fahrenheit: 59
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: ['Mealy bug', 'Thrips'],
		diseases: 'Phytophtora',
		use: ['Table top', 'Tertiary']
	},
	{
		id: 204,
		latin: 'Spathiphyllum Starlight',
		family: 'Araceae',
		common: ['Peace lily'],
		category: 'Spathiphyllum',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 28,
			fahrenheit: 82.4
		},
		tempmin: {
			celsius: 15,
			fahrenheit: 59
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Must not be dry between watering',
		insects: ['Mealy bug', 'Thrips'],
		diseases: 'Phytophtora',
		use: ['Table top', 'Tertiary']
	},
	{
		id: 205,
		latin: 'Schefflera arboricola',
		family: 'Araliaceae',
		common: ['Hawaiian elf', 'Parasol plant', 'Gold Cappela'],
		category: 'Schefflera',
		origin: 'Cultivar',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Aphid', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Potted plant', 'Secondary']
	},
	{
		id: 206,
		latin: 'Strelitzia nicolai',
		family: 'Strelitziaceae',
		common: ['White bird of paradise'],
		category: 'Foliage plant',
		origin: 'South Africa',
		climate: 'Subtropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: ['Spider mite', 'Mealy bug'],
		diseases: 'N/A',
		use: ['Table top', 'Tertiary']
	},
	{
		id: 207,
		latin: 'Zamioculcas zamifolia',
		family: 'Araceae',
		common: ['Zz plant'],
		category: 'Foliage plant',
		origin: 'South Africa',
		climate: 'Tropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: 'Bright light',
		toleratedlight: 'Diffused',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: 'N/A',
		diseases: 'N/A',
		use: ['Table top', 'Secondary']
	},
	{
		id: 208,
		latin: 'Yucca elephantipes',
		family: 'Liliaceae',
		common: ['Spineless yucca', 'Palm lily'],
		category: 'Dracaena',
		origin: 'Mexico',
		climate: 'Subtropical',
		tempmax: {
			celsius: 30,
			fahrenheit: 20
		},
		tempmin: {
			celsius: 12,
			fahrenheit: 53.6
		},
		ideallight: '6 or more hours of direct sunlight per day.',
		toleratedlight: 'Direct sunlight.',
		watering: 'Keep moist between watering. Water when soil is half dry.',
		insects: 'N/A',
		diseases: 'Downy mildiou',
		use: ['Potted plant', 'Secondary']
	}
];

let newPlants = plants.map((plant) => {
	let newPlant = plant;
	newPlant.tempmax = plant.tempmax.celsius;
	newPlant.tempmin = plant.tempmin.celsius;

	newPlant.watering_frequency = 1;
	if (/Water only when the soil is dry/.test(plant.watering)) newPlant.watering_frequency = 0;
	if (/Keep moist between watering/.test(plant.watering)) newPlant.watering_frequency = 2;

	// Bright & Diffused
	// Bright & Direct
	// 6 or more &
	newPlant.light_level = 0;
	if (/Bright/.test(plant.ideallight) && /Direct sunlight/.test(plant.toleratedlight))
		newPlant.light_level = 1;
	if (/6 or more hours/.test(plant.ideallight)) newPlant.light_level = 2;

	newPlant.pet_friendly = true;
	newPlant.cover_img = 'https://wlbswezwppbljuspzrsn.supabase.co/storage/v1/object/public/plants/placeholder.jpg';

	newPlant.category = plant.category.replace('Aglaonema', 'Chinese Evergreen');
	newPlant.common = plant.common.filter((e) => e !== 'Chinese Evergreen' && e !== 'Century plant');

	newPlant.experience = 0;

	if (plant.common.length === 0) newPlant.common = plant.latin;
	return newPlant;
});

console.log(newPlants);