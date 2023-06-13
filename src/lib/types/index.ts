export type PixelsEntry = {
  date: string;
  type: EntryType;
  scores: Score;
  notes: string;
  tags: Tags[];
};

export type EntryType = "Mood";

export type Score = [1] | [2] | [3] | [4] | [5];

export type Tags = {
  type: string;
  entries: string[];
};
