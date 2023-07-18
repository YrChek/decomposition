interface NewsPattern {
  header: {
  newsLine: Array<NewsLinePattern>;
  newsFeed: Array<NewsFeedPattern>;
  currency: CurrencyPattern;
  adBlock: AdBlockPattern;
  }
}

type NewsLinePattern = {
  text: string;
  url: string;
};

type NewsFeedPattern = {
  img: string;
  text: string;
  url: string;
};

type CurrencyPattern = {
  usd: number;
  usdGrowth: string;
  eur: number;
  eurGrowth: string;
  oil: number;
  oilGrowth: string;
};

type AdBlockPattern = {
  img: string;
  title: string;
  text: string;
  url: string;
}

export type { NewsPattern, NewsLinePattern, NewsFeedPattern, CurrencyPattern, AdBlockPattern}
