<script lang="ts">
	import { page } from '$app/state';
	import '../app.css';

	import background from '$lib/img/background.jpg';

	let { children } = $props();
</script>

<svelte:head>
	<title>snep.lol</title>
	<meta property="og:type" content="website" />
	<meta property="og:url" content={page.url.toString()} />
	<meta property="og:title" content={page.url.hostname} />
	<meta property="og:image" content={page.url.origin + '/img/avatar.png'} />
	<meta property="og:description" content="Hello! This is my website!" />
	<meta name="theme-color" content="#c4bef3" />
	<link rel="prefetch" href={background} as="image" type="image/webp" crossorigin="" />
	<link rel="stylesheet" href="/css/remixicon.css" />
	<link rel="preload" href="/css/remixicon.css" as="style" />
	<link
		rel="preload"
		href={page.url.origin + '/fonts/SNPro/SNPro-Regular.woff2'}
		as="font"
		type="font/woff2"
		crossorigin=""
	/>
	<link
		rel="preload"
		href={page.url.origin + '/fonts/SNPro/SNPro-Bold.woff2'}
		as="font"
		type="font/woff2"
		crossorigin=""
	/>
	<link
		rel="preload"
		href={page.url.origin + '/fonts/SNPro/SNPro-RegularItalic.woff2'}
		as="font"
		type="font/woff2"
		crossorigin=""
	/>
	<link
		rel="preload"
		href={page.url.origin + '/fonts/SNPro/SNPro-BoldItalic.woff2'}
		as="font"
		type="font/woff2"
		crossorigin=""
	/>
</svelte:head>

<div class="h-screen pt-32 md:flex md:pt-0" style="backdrop-filter: blur(10px);">
	{@render children()}
</div>
