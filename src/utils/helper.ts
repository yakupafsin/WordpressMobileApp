import { decode } from "html-entities";

export const decodeText = (text: string) => decode(text);
