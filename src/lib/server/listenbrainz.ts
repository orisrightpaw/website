import { env } from '$env/dynamic/private';

interface ListenBrainsResponse {
	payload: {
		count: number;
		playing_now: boolean;
		user_id: string;
		listens: {
			playing_now: boolean;
			track_metadata: {
				additional_info: {
					duration: number;
					recording_mbid: string;
					release_mbid: string;
					submission_client: string;
					tracknumber: number;
				};
				artist_name: string;
				release_name: string;
				track_name: string;
			};
		}[];
	};
}

interface CAAResponse {
	release: string;
	images: {
		approved: boolean;
		back: boolean;
		comment: string;
		edit: number;
		front: boolean;
		id: number;
		image: string;
		thumbnails: {
			'250': string;
			'500': string;
			'1200': string;
			large: string;
			small: string;
		};
		types: string[];
	}[];
}

export async function getNowPlaying() {
	const response = await fetch(
		`https://api.listenbrainz.org/1/user/${env.LISTENBRAINZ_USERNAME}/playing-now`,
		{
			headers: { Accept: 'application/json' }
		}
	);

	if (!response.ok || !response.body) throw new Error('ListenBrainz Error');

	return (await response.json()) as ListenBrainsResponse;
}

export async function getReleaseCoverArt(release: string) {
	const response = await fetch(`https://coverartarchive.org/release/${release}`, {
		headers: { Accept: 'application/json' }
	});

	if (!response.ok || !response.body) throw new Error('CoverArtArchive Error');

	return (await response.json()) as CAAResponse;
}
