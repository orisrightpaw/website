import { siteViews, tabsData } from '$lib';
import { getAvatar } from '$lib/server/libravatar';
import { getNowPlaying } from '$lib/server/listenbrainz';
import { get } from 'svelte/store';

export async function load() {
	siteViews.set(get(siteViews) + 1);

	const lb = await getNowPlaying();
	const avatar = await getAvatar();

	return {
		lb,
		views: get(siteViews),
		tabs: get(tabsData),
		avatar
	};
}
