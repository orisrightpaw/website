<script lang="ts">
	let { data } = $props();

	import dayjs from 'dayjs';

	import Button8831 from '$lib/components/8831.svelte';
	import Image from '$lib/components/Image.svelte';
	import SocialLink from '$lib/components/SocialLink.svelte';

	import azumanga from '$lib/img/buttons/azumanga.gif';
	import Firefox from '$lib/img/buttons/firefox.gif';
	import IndieWeb from '$lib/img/buttons/indieweb.gif';
	import micro from '$lib/img/buttons/micro.png';
	import nilenta from '$lib/img/buttons/nilenta.png';
	import percocet from '$lib/img/buttons/percocet.png';
	import SnowLeopards from '$lib/img/buttons/snowleopards.png';
	import split from '$lib/img/buttons/split.png';
	import Stitch from '$lib/img/buttons/stitch.png';
	import TwoPaws from '$lib/img/buttons/twopaws.png';
	import veast from '$lib/img/buttons/veast.png';
	import uBlock from '$lib/img/buttons/ublock.png';
</script>

<div
	class="m-auto flex size-fit max-w-fit flex-col gap-2 rounded-md bg-neutral-900/50 p-2.5 shadow"
>
	<div class="flex grow-0 gap-2">
		<Image height="80px" width="80px" src={data.avatar}></Image>
		<div class="my-auto grid h-min gap-0.5">
			<h1 class="items-center text-2xl font-bold leading-6 text-cirro">cirroskais</h1>
			<p class="leading-4">snow leopard programmer thing</p>
			<div class="flex gap-1">
				<SocialLink href="https://github.com/orisrightpaw" rel="me">
					<i
						class="ri-github-fill text-xl leading-7 opacity-70 transition-opacity group-hover:opacity-20"
					>
					</i>
				</SocialLink>
				<SocialLink href="https://social.snep.lol/profile/cirro" rel="me">
					<i
						class="ri-fediverse-fill text-xl leading-7 opacity-70 transition-opacity group-hover:opacity-20"
					>
					</i>
				</SocialLink>
				<SocialLink href="mailto:cirro@snep.lol" rel="me">
					<i
						class="ri-mail-fill text-xl leading-7 opacity-70 transition-opacity group-hover:opacity-20"
					>
					</i>
				</SocialLink>
				<SocialLink script={() => alert('Signal: cirrosneppy.01')} rel="me">
					<i
						class="ri-signal-tower-fill text-xl leading-7 opacity-70 transition-opacity group-hover:opacity-20"
					>
					</i>
				</SocialLink>
			</div>
		</div>
	</div>

	{#if data.lb.payload.count}
		<p>
			<i class="ri-disc-line"></i>
			<span class="font-bold text-neutral-200/85"
				>{data.lb.payload.listens[0].track_metadata.artist_name}</span
			>
			- {data.lb.payload.listens[0].track_metadata.track_name}
		</p>
	{/if}

	<div>
		<p class="max-w-xl">
			Hello, and welcome to my website. My name is <span class="font-black text-cirro">cirro</span>,
			and I'm {dayjs().diff(1149652020000, 'years')} years old. I like programming, I'm a Linux enthusiast,
			and I'm an amateur sysadmin. If you would like to add my button to your site, please link the button
			and do not rehost the image. If you let me know that you've added my button, I'll add yours.
		</p>
	</div>

	<div class="grid w-fit min-w-fit shrink-0 gap-2 xl:grid-cols-6">
		<Button8831 src={'./img/buttons/cirro.png'} href="https://snep.lol"></Button8831>
		<Button8831 src={nilenta} href="https://nilenta.com"></Button8831>
		<Button8831 src={azumanga} href="https://azumanga.xyz"></Button8831>
		<Button8831 src={micro} href="https://m1cro.xyz"></Button8831>
		<Button8831 src={percocet} href="https://percocet.monster"></Button8831>
		<Button8831 src={split} href="https://split.pet"></Button8831>
		<Button8831 src={Stitch} href="https://liloandstit.ch"></Button8831>
		<Button8831 src={veast} href="https://vea.st"></Button8831>
		<Button8831 src={Firefox} href="https://www.mozilla.org/en-US/firefox/new"></Button8831>
		<Button8831 src={IndieWeb} href="https://indieweb.org"></Button8831>
		<Button8831 src={SnowLeopards}></Button8831>
		<Button8831 src={TwoPaws}></Button8831>
		<Button8831 src={uBlock} href="https://ublockorigin.com"></Button8831>
	</div>
</div>
