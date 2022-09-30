<script>
    export default {
        name: "Comment",

		props: {
			user: {
				type: String,
				required: true
			},
			content: {
				type: String,
				required: true
			}
    }
}
</script>

<template>

<section>
<div class="card p-2 mt-3">
	<!-- comment header -->
	<div class="d-flex">
		<div class="">
			<a class="text-decoration-none" href="#">
				<img class="rounded-circle" width="35" height="35" src="https://picsum.photos/50/50" alt="">
			</a>
		</div>
		<div class="flex-grow-1 pl-2">
			<div class="text-decoration-none text-capitalize h6 m-2 fw-bold">{{ user }}</div>
		</div>
		<div >
			<div class="dropdown">
				<a class="" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<i class="fa fa-ellipsis-h"></i>
				</a>

				<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
					<a class="dropdown-item text-primary" href="#">Edit</a>
					<a class="dropdown-item text-primary" href="#">Delete</a>
				</div>
			</div>
		</div>
	</div>
	<!-- comment header -->
	<!-- comment body -->
	<div class="card-body p-0">
		<p class="card-text h7 mb-1">{{ content }}</p>
		<a class="card-link small" href="#">
		</a>
	</div>
</div>
</section>
<!-- comment card ends -->

							

</template>

<style>
	.card-text {
		margin-top:10px;
	}
</style>