<template>
	<NuxtLayout>
		<NuxtLoadingIndicator />
		<NuxtPage :page-key="(route) => route.fullPath" />
	</NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(0.4rem);
}
</style>
