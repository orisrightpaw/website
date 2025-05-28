import { env } from '$env/dynamic/private';

export const devices = [
	{ name: 'desktop', key: env.TABCOUNTER_KEY_DESKTOP },
	{ name: 'laptop', key: env.TABCOUNTER_KEY_LAPTOP },
	{ name: 'phone', key: env.TABCOUNTER_KEY_PHONE }
];
