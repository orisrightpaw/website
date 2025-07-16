import { writable } from 'svelte/store';

export const siteViews = writable(0);

export const tabsData = writable({
	desktop: { tabs: 0, windows: 0, lastSeen: 0 },
	laptop: { tabs: 0, windows: 0, lastSeen: 0 },
	phone: { tabs: 0, windows: 0, lastSeen: 0 }
});
