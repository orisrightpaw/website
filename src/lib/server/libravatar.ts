import { env } from '$env/dynamic/private';
import { resolveSrv } from 'node:dns/promises';

const DEFAULT_AVATAR = `https://seccdn.libravatar.org/static/img/nobody/256.png`;

export async function getAvatar() {
	const [username, domain] = env.LIBRAVATAR_EMAIL.split('@');
	if (!username || !domain) return DEFAULT_AVATAR;

	const [srv] = await resolveSrv(`_avatars._tcp.${domain}`).catch((_) => [false] as false[]);
	if (!srv) return DEFAULT_AVATAR;

	const url = `http${srv.port === 443 && 's'}://${srv.name}/avatar`;
	const hasher = new Bun.CryptoHasher('sha256');
	hasher.update(env.LIBRAVATAR_EMAIL.toLowerCase());
	const hash = hasher.digest().toString('hex');

	return `${url}/${hash}.png?d=/static/img/nobody/256.png`;
}
