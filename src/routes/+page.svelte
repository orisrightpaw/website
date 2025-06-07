<script lang="ts">
	import dayjs from 'dayjs';

	import Button8831 from '$lib/components/8831.svelte';
	import Image from '$lib/components/Image.svelte';
	import SocialLink from '$lib/components/SocialLink.svelte';

	import Robin from '$lib/img/buttons/robin.png';
	import azumanga from '$lib/img/buttons/azumanga.gif';
	import Firefox from '$lib/img/buttons/firefox.gif';
	import IndieWeb from '$lib/img/buttons/indieweb.gif';
	import micro from '$lib/img/buttons/micro.png';
	import percocet from '$lib/img/buttons/percocet.png';
	import SnowLeopards from '$lib/img/buttons/snowleopards.png';
	import split from '$lib/img/buttons/split.png';
	import Stitch from '$lib/img/buttons/stitch.png';
	import TwoPaws from '$lib/img/buttons/twopaws.png';
	import veast from '$lib/img/buttons/veast.png';
</script>

<div class="m-auto grid size-fit max-w-xl gap-2">
	<div class="flex gap-2">
		<Image height="80px" width="80px" src="/img/avatar.png"></Image>
		<div class="my-auto grid h-min gap-0.5">
			<h1 class="items-center text-2xl font-bold leading-6 text-cirro">cirroskais</h1>
			<p class="leading-4">snow leopard programmer thing</p>
			<div class="flex gap-1">
				<SocialLink href="https://github.com/orisrightpaw" rel="me">
					<i
						class="ri-github-fill text-xl leading-6 opacity-70 transition-opacity group-hover:opacity-20"
					>
					</i>
				</SocialLink>
				<!-- <SocialLink href="https://social.snep.lol/@cirro" rel="me">
					<i
						class="ri-fediverse-fill text-xl leading-7 opacity-70 transition-opacity group-hover:opacity-20"
					>
					</i>
				</SocialLink> -->
			</div>
		</div>
	</div>
	<div>
		<p>
			Hi there, and welcome to my website! My name is <span class="font-black text-cirro"
				>cirro</span
			>! I'm {dayjs().diff(1149652020000, 'years')} years old, I like programming, I'm a Linux enthusiast,
			and I'm an amateur sysadmin. If you would like to add my button to your site, please link the button
			and do not rehost the image. If you let me know that you've added my button, I'll add yours!
		</p>
	</div>

	<div class="flex w-fit flex-wrap gap-2">
		<Button8831 src={'./img/buttons/cirro.png'} href="https://snep.lol"></Button8831>
		<Button8831 src={Robin} href="https://x.com/Porpss1"></Button8831>
		<Button8831 src={azumanga} href="https://azumanga.xyz"></Button8831>
		<Button8831 src={Firefox} href="https://www.mozilla.org/en-US/firefox/new"></Button8831>
		<Button8831 src={IndieWeb} href="https://indieweb.org"></Button8831>
		<Button8831 src={micro} href="https://m1cro.xyz"></Button8831>
		<Button8831 src={percocet} href="https://percocet.monster"></Button8831>
		<Button8831 src={SnowLeopards}></Button8831>
		<Button8831 src={split} href="https://split.pet"></Button8831>
		<Button8831 src={Stitch} href="https://liloandstit.ch"></Button8831>
		<Button8831 src={TwoPaws}></Button8831>
		<Button8831 src={veast} href="https://vea.st"></Button8831>
	</div>
</div>
