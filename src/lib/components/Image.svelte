<script lang="ts">
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';

	let props: { src: string; width?: string; height?: string } = $props();

	let loaded: string | false = $state(false);

	onMount(async () => {
		if (props.src) {
			const preload = new Image();
			preload.src = props.src;
			preload.onload = () => (loaded = props.src);
		}
	});
</script>

<div class={'rounded-lg bg-neutral-600/20'} style="width: {props.width}; height: {props.height};">
	{#if loaded}
		<img
			in:scale
			class={'z-10 rounded-lg'}
			src={loaded}
			alt=""
			width={props.width}
			height={props.height}
		/>
	{/if}
</div>
