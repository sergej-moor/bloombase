<script lang="ts">
	import IconBaselineSpa from '~icons/ic/baseline-spa';
	import IconRoundArrowRightAlt from '~icons/ic/round-arrow-right-alt';
	import KUTE from 'kute.js';
	import { onMount } from 'svelte';

	onMount(async () => {
		/* 		const tween = KUTE.fromTo(
			'#blob1',
			{ path: '#blob1' },
			{ path: '#blob2' },
			{ repeat: 999, duration: 3000, yoyo: true }
		);

		tween.start(); */
		/* 		const p = document.getElementById('parallax-2');
		const section = document.getElementById('survey');
		const page = document.getElementById('page');
		//console.log(p);
		if (p && page)
			page.addEventListener('scroll', (e) => {
				let offset = e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop;
				p.style.transform = `translateY(-${parseInt(offset / 50)}px)`;
				console.log(parseInt(offset / 50));
			}); */
		//section.addEventListener('scroll', ()
	});
</script>

<svelte:head>
	<title>bloombase</title>
	<meta name="description" content="Homepage of Bloombase" />
</svelte:head>
<div class=" h-full">
	<div class="flex flex-col relative">
		<section
			id="hero"
			class="relative h-screen bg-primary -mx-8 -mt-8 border-black border-bottom-2"
		>
			<h1
				class="font-black text-[5rem] translate-y-16 absolute z-20 leading-[1] text-center w-full text-bg lg:mt-12 lg:text-8xl"
			>
				<div>Discover <br /> plants</div>
				you'll<br /> love
			</h1>
			<img
				src="/images/home/home4.png"
				class="invisible xl:visible absolute left-0 right-0 top-0 bottom-0 m-auto object-contain animate-[spin_10s_ease-in-out_infinite_alternate-reverse]"
				alt=""
			/>
			<img
				src="/images/home/home2.png"
				alt=""
				class="absolute -left-1/4 top-0 bottom-0 my-auto object-contain animate-[spin_10s_ease-in-out_infinite_alternate] md:left-0"
			/>
			<img
				src="/images/home/home1.png"
				alt=""
				class="absolute -right-1/3 object-contain animate-[spin_20s_linear_infinite_reverse] md:-right-1/4 xl:invisible"
			/>

			<img
				src="/images/home/home3.png"
				alt=""
				class="absolute -bottom-1/4 -right-1/4 object-contain animate-[spin_15s_linear_infinite] z-10 md:-bottom-1/3 md:-right-1"
			/>
			<div class="bg-red-500 w-screen flex justify-center">
				<a
					href="/auth?homescreen=true"
					class="block text-center cardbox p-2 font-bold px-8 bg-secondary text-bg absolute bottom-40 left-0 right-0 z-20 mx-12 md:max-w-[500px] md:mx-auto"
					>Get started now</a
				>
			</div>
		</section>

		<section id="survey" class="relative h-screen py-8 -mx-8 parallax bg-contain md:bg-cover">
			<div class="flex flex-col gap-y-8 mt-16 w-4/5 mx-8">
				<h2 class="font-bold text-4xl leading-[0.9] lg:text-6xl">Find your <br /> perfect match</h2>
				<p class="text-sm font-semibold lg:text-xl lg:my-16 lg:max-w-lg">
					Discover the ideal green companions that will thrive in your space and bring nature's
					beauty indoors.
					<br /><br />
					Let's explore the world of plants together.
				</p>

				<a
					href="/wizard"
					class="text-sm font-bold underline text-secondary flex items-center gap-x-4 lg:text-xl"
					>Take the plant survey <IconRoundArrowRightAlt class="mt-1 " /></a
				>
			</div>
			<img
				src="/images/home/rank.png"
				alt=""
				class="md:invisible bg-cover w-full"
				id="parallax-2"
			/>
			<!-- 			<img
				src="/images/home/womancloseduotone2.png"
				class="absolute bottom-0 max-w-screen-2xl w-screen md:invisible"
				alt=""
			/> -->
		</section>

		<section id="explore" class="relative h-screen">
			<div class="duotone absolute h-full w-screen -mx-8" />
			<div class="absolute h-full w-screen -mx-8 bg-bg/40 border-black border-t-2" />
			<div class=" flex flex-col gap-y-8 mt-16 absolute">
				<h2 class="font-bold text-4xl lg:text-6xl leading-[0.9]">
					Elevate Your
					<br />Indoor Space
				</h2>
				<div class="">
					<p class="text-sm font-semibold lg:text-xl lg:my-16 lg:max-w-lg">
						Plants not only add natural beauty but also improve air quality, reduce stress, and
						boost overall well-being.
						<br /><br />
						With their calming presence and vibrant colors, they effortlessly elevate any space, making
						it cozier and more inviting.
						<br /><br />
						With Bloombase, you can discover over 150 different species.
					</p>

					<a
						href="/explore"
						class="text-sm font-bold text-secondary underline flex items-center gap-x-4 mt-8 lg:text-xl"
						>Explore the plant catalogue <IconRoundArrowRightAlt class="mt-1" /></a
					>
				</div>
			</div>

			<!-- <img class="scale-150 translate-y-20" src="/images/home/bottomimg.png" alt="" /> -->
			<!-- 			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				version="1.1"
				class="absolute"
			>
				<mask id="mask">
					<g transform="translate(460.17987918508663 310.4237948871959)"
						><path
							id="blob1"
							d="M120.9 -122.6C167.7 -104.8 224.2 -77.2 243.9 -33C263.6 11.2 246.6 71.8 208.3 103.6C170.1 135.3 110.7 138.1 62.9 142.4C15.1 146.6 -21.2 152.2 -72 153.2C-122.9 154.1 -188.3 150.3 -228 115.3C-267.6 80.3 -281.5 14.1 -266.8 -43.1C-252 -100.4 -208.6 -148.6 -159.4 -165.9C-110.1 -183.2 -55.1 -169.6 -9 -158.9C37.1 -148.2 74.1 -140.4 120.9 -122.6"
							fill="#FFFFFF"
						/></g
					>
					<g transform="translate(482.1387053777238 305.6481518734941)"
						><path
							id="blob2"
							d="M134.3 -153.2C167.4 -132.2 183.2 -83.6 186.9 -36.8C190.6 10.1 182.4 55.3 161.9 95.9C141.4 136.5 108.6 172.6 70.6 180.6C32.6 188.6 -10.7 168.5 -45 146.3C-79.3 124 -104.6 99.5 -144.9 66.1C-185.1 32.6 -240.3 -9.7 -250.3 -60C-260.4 -110.3 -225.3 -168.5 -176.1 -186.7C-126.8 -204.8 -63.4 -182.9 -6.4 -175.3C50.6 -167.6 101.1 -174.2 134.3 -153.2"
							fill="#FFFFFF"
						/></g
					>
				</mask></svg
			>

			<img class="duotone maskimg" alt="" src="/images/home/bottomimg.png" /> -->
		</section>
	</div>
</div>

<style>
	.maskimg {
		mask: url(#mask) center;
		-webkit-mask: url(#mask) center;
		-webkit-mask-attachment: fixed;

		background-image: url('/images/home/bottomimg.png');
	}

	.parallax {
		/* The image used */
		background-image: url('/images/home/rankonstick.png');

		/* position: absolute;
		/* Set a specific height */
		/* min-height: 100vh; */

		/* Create the parallax scrolling effect */
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
	}

	.parallax-2 {
		/* The image used */
		background-image: url('/images/home/rankonstick.png');

		/* position: absolute;
		/* Set a specific height */
		/* min-height: 100vh; */

		/* Create the parallax scrolling effect */
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}

	.duotone {
		background: url('/images/home/bg.gif') no-repeat center center fixed;
		background-size: cover;
	}

	.duotone::before {
		background-color: #bdefdf;
		content: '';
		display: block;
		width: 100%;
		height: 100%;
		mix-blend-mode: darken;
		position: absolute;
		top: 0;
		left: 0;
	}

	.duotone::after {
		background-color: theme('colors.primary');
		content: '';
		display: block;
		width: 100%;
		height: 100%;
		mix-blend-mode: lighten;
		position: absolute;
		top: 0;
		left: 0;
	}
</style>
