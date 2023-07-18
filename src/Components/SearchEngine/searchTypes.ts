interface SearchPattern {
  sections: Array<SectionsPattern>;
  searchExample: SearchExamplePattern
}

type SectionsPattern = {
  text: string;
  url: string
}

type SearchExamplePattern = {
  text: string,
  url: string
}

export type { SearchPattern, SectionsPattern, SearchExamplePattern }