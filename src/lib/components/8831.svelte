<script lang="ts">
	let { href, src }: { href?: string; src: string | any } = $props();
</script>

{#snippet inner()}
	{#if typeof src === 'string'}
		<img {src} alt="Button" width="88px" height="31px" />
	{:else}
		<img {src} alt="Button" />
	{/if}
{/snippet}

{#if href}
	<a class="h-[31px] w-[88px]" {href} target="_blank">
		{@render inner()}
	</a>
{:else}
	<div class="h-[31px] w-[88px]">
		{@render inner()}
	</div>
{/if}
