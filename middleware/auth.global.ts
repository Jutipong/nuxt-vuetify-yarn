export default defineNuxtRouteMiddleware((to, from) => {
	if (to?.name === 'login') return;

	const { isLogin } = useAuthStore();

	if (!isLogin()) {
		return navigateTo('/login', { redirectCode: 401 });
	}
});
