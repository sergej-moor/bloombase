<script lang="ts">
	import IconBaselineSpa from '~icons/ic/baseline-spa';
	import IconRoundArrowRightAlt from '~icons/ic/round-arrow-right-alt';
</script>

<div class="flex justify-center h-full">
	<div class="flex flex-col min-w-full md:min-w-[750px] my-8 relative">
		<img
			src="/images/home/bigvector2.svg"
			class="absolute w-[calc(100% + 2rem)] max-w-[150%] -mr-8 -mt-8 right-0"
			alt=""
		/>
		<!-- <div class="flex flex-col items-center mt-8">
			<IconBaselineSpa class="w-32 h-32" />
			<h2 class="h2 text-6xl break-words w-full text-center">BloomBase</h2>
			<h4 class="text-lg w-full text-center">Discover houseplants you'll like</h4>
		</div>
		<div class="flex flex-col gap-4 mb-16">
			<div class="w-full">
				<a
					href="/wizard"
					class="block h-full bg-secondary rounded-lg border-black border border-b-4 p-2 py-4 text-center font-bold text-lg"
				>
					🔮 Use the Plant Wizard 🔮</a
				>
			</div>
		
			<div class="">
				<a
					href="/explore"
					class="bg-white block rounded-lg border-black border border-b-4 p-2 text-center"
				>
					Browse all plants</a
				>

				<a href="/auth" class="block text-center m-2">Sign up / Sign in</a>
			</div> 
		</div>-->

		<section id="hero" class="relative h-screen">
			<h1 class="h1 text-6xl translate-y-4 absolute z-20 leading-[0.9]">
				<div class="leading-[0.8]">Discover <br /> plants</div>
				you'll love
			</h1>
			<!-- 	<img
				src="/images/home/herovector.svg"
				class="absolute left-0 right-0 w-full -translate-y-16 overflow-hidden"
				alt=""
			/> -->
			<img
				class="absolute -right-1/4 scale-125 top-36 object-contain z-10"
				src="/images/home/heroimg.png"
				alt=""
			/>

			<button
				class="cardbox p-2 font-bold px-8 bg-primary text-white absolute bottom-40 left-0 right-0 z-20 mx-12"
				>Get started now</button
			>
		</section>

		<section id="survey" class="relative h-screen">
			<!-- 		<img
				src="/images/home/surveyvector.svg"
				class="absolute left-0 right-0 w-full -translate-y-32 overflow-hidden hidden"
				alt=""
			/> -->
			<div class="ml-16 flex flex-col gap-y-8 mt-8">
				<h2 class="h2 text-4xl leading-[0.9]">Find you <br /> perfect match</h2>
				<p class="text-sm">
					Discover the ideal green companions that will thrive in your space and bring nature's
					beauty indoors.
					<br /><br />
					Let's explore the world of plants together.
				</p>

				<a href="/wizard" class="text-sm underline text-primary flex items-center gap-x-4"
					>Take the plant survey <IconRoundArrowRightAlt class="mt-1" /></a
				>
			</div>
			<img src="/images/home/woman.png" class="absolute bottom-24" alt="" />
		</section>

		<section id="explore" class="relative h-screen">
			<!-- 		<img
				src="/images/home/explorevector.svg"
				class="absolute right-0 -translate-y-32 overflow-hidden"
				alt=""
			/> -->
			<div class="mr-16 flex flex-col gap-y-8 mt-8">
				<h2 class="h2 text-4xl leading-[0.9]">
					Elevate Your
					<br />Indoor Space
				</h2>
				<p class="text-sm">
					Plants not only add natural beauty but also improve air quality, reduce stress, and boost
					overall well-being.
					<br /><br />
					With their calming presence and vibrant colors, they effortlessly elevate any space, making
					it cozier and more inviting.
					<br /><br />
					With Bloombase, you can discover over 150 different species.
				</p>

				<a href="/wizard" class="text-sm underline text-primary flex items-center gap-x-4"
					>Explore the plant catalogue <IconRoundArrowRightAlt class="mt-1" /></a
				>
			</div>
			<img class="scale-150 translate-y-20" src="/images/home/bottomimg.png" alt="" />
		</section>

		<section class="h-32">
			<div />
		</section>
	</div>
</div>
