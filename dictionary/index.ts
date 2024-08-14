import { default as PtDictionary } from "./pt";
import { default as EnDictionary } from "./en";

const dictionary = {
  pt: PtDictionary,
  en: EnDictionary,
};

export type PagesDictionary = typeof PtDictionary;
export type DictionaryLanguages = keyof typeof dictionary;

export default dictionary;
