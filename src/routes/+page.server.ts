import { siteViews, tabsData } from '$lib';
import { get } from 'svelte/store';

export async function load() {
	siteViews.set(get(siteViews) + 1);

	return {
		views: get(siteViews),
		tabs: get(tabsData)
	};
}
