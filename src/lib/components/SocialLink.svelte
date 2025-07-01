<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		href = '',
		rel = '',
		children,
		script
	}: { href?: string; rel?: string; script?: Function; children: Snippet } = $props();
</script>

{#if script}
	<button class="group flex" onclick={() => script}>
		{@render children()}
	</button>
{:else}
	<a class="group flex" {href} target="_blank" title={new URL(href).hostname} {rel}>
		{@render children()}
	</a>
{/if}
