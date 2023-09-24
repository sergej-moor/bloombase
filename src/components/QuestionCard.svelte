<div class="flex flex-col justify-between h-full my-4">
	<div class="flex flex-col justify-between h-full">
		<progress value={3} max={7} />
		<div>
			<p class="text-sm">Question 3</p>
			<h2 class="text-3xl mb-8">What is this question?</h2>

			<form action="" class="text-lg">
				<div class="space-y-2">
					<label class="flex items-center space-x-2">
						<input class="radio" type="radio" checked name="radio-direct" value="1" />
						<p>Option 1</p>
					</label>
					<label class="flex items-center space-x-2">
						<input class="radio" type="radio" name="radio-direct" value="2" />
						<p>Option 2</p>
					</label>
					<label class="flex items-center space-x-2">
						<input class="radio" type="radio" name="radio-direct" value="3" />
						<p>Option 3</p>
					</label>
				</div>
			</form>
		</div>
		<div />
	</div>
	<div>
		<div class="flex flex-col gap-2">
			<button type="button" class="btn variant-filled font-bold"> Next </button>

			<button type="button" class="btn underline">Skip</button>
		</div>
	</div>
</div>
