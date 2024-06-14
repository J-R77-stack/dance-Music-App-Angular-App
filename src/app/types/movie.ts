export type Music = {
  mbid: string;
  name: string;
  artist: string;
  url: string;
  rank: string;
};

export type MusicDto = {
  page: string;
  track: Music[];
  tag: string;
  perPage: string;
  totalPages: string;
  total: string;
};
