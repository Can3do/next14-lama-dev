export const authConfig = {
	pages: {
		signIn: '/login',
	},
	providers: [],
	callbacks: {
		authorize({ auth, request }) {
			return false;
		},
	},
};
