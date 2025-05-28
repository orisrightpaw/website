import { error, json } from '@sveltejs/kit';
import { tabsData } from '$lib';
import { devices } from '$lib/server/tabs';

export function OPTIONS() {
	return new Response('OK', {
		status: 200,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, GET',
			'Access-Control-Allow-Headers': 'Authorization, Content-Type'
		}
	});
}

export async function POST({ request }) {
	const body = await request.json();
	const key = request.headers.get('Authorization');
	const device = devices.find((_) => _.key === key)?.name;
	if (!device) error(401);

	Object.assign(tabsData, { [device]: { ...body, lastSeen: Date.now() } });

	return new Response(null, {
		status: 204,
		headers: { 'Access-Control-Allow-Origin': '*' }
	});
}

export async function GET() {
	return json(tabsData);
}
