type Accept = {
  type: string;
  title: string;
  text: Array<Texts> | Array<string>;
  url: string;
  now?: string
  img?: string
}

type Texts = {
  title: string;
  url: string;
  text?: string;
  span?: string;
  img?: string
}

export type { Accept, Texts }