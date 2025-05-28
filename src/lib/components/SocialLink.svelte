<script lang="ts">
	let { href, rel = '', children } = $props();
</script>

<a class="group flex" {href} target="_blank" title={new URL(href).hostname} {rel}>
	{@render children()}
</a>
