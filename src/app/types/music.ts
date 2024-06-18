export type Music = {
  id: string;
  name: string;
  artist: string;
  url: string;
  release_date: string;
  href: string;
  popularity: number;
};

export type MusicDto = {
  topTracks: Music[];
};
