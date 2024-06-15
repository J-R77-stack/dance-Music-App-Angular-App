export type Music = {
  mbid: string;
  name: string;
  artist: string;
  url: string;
  rank: string;
  duration: string;
  image: [];
  track: string;
};

export type MusicDto = {
  page: string;
  tag: string;
  perPage: string;
  totalPages: string;
  total: string;
  tracks: Music[];
};
