import { siteViews, tabsData } from '$lib';
import { getNowPlaying, getReleaseCoverArt } from '$lib/server/listenbrainz';
import { get } from 'svelte/store';

export async function load() {
	siteViews.set(get(siteViews) + 1);

	const lb = await getNowPlaying();

	return {
		lb,
		views: get(siteViews),
		tabs: get(tabsData)
	};
}
