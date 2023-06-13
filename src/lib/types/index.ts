export type PixelsEntry = {
  date: string;
  type: EntryType;
  scores: Score;
  notes: string;
  tags: Tags[];
};

export type EntryType = string;

export type Score = number[];

export type Tags = {
  type: string;
  entries: string[];
};
