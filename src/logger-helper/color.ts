export type ColorFn = (input: string | number | null | undefined) => string;

const formatter =
  (open: string, close: string, replace = open): ColorFn =>
  (input) => {
    const string = `${input}`;
    const index = string.indexOf(close, open.length);
    return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
  };

const replaceClose = (string: string, close: string, replace: string, index: number): string => {
  const start = string.substring(0, index) + replace;
  const end = string.substring(index + close.length);
  const nextIndex = end.indexOf(close);
  return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end;
};

export const bold = formatter("\x1b[1m", "\x1b[22m", "\x1b[22m\x1b[1m");
export const red = formatter("\x1b[31m", "\x1b[39m");
export const green = formatter("\x1b[32m", "\x1b[39m");
export const yellow = formatter("\x1b[33m", "\x1b[39m");
export const magenta = formatter("\x1b[35m", "\x1b[39m");
export const cyan = formatter("\x1b[36m", "\x1b[39m");
export const gray = formatter("\x1b[90m", "\x1b[39m");
// RGB for #bdfff3
const startColor = [189, 255, 243];
// RGB for #4ac29a
const endColor = [74, 194, 154];
const isWord = (char: string) => !/[\s\n]/.test(char);
export const gradient = (message: string) => {
  const chars = [...message];
  const steps = chars.filter(isWord).length;
  let r = startColor[0];
  let g = startColor[1];
  let b = startColor[2];
  const rStep = (endColor[0] - r) / steps;
  const gStep = (endColor[1] - g) / steps;
  const bStep = (endColor[2] - b) / steps;
  let output = "";

  for (const char of chars) {
    if (isWord(char)) {
      r += rStep;
      g += gStep;
      b += bStep;
    }
    output += `\x1b[38;2;${Math.round(r)};${Math.round(g)};${Math.round(b)}m${char}\x1b[39m`;
  }

  return bold(output);
};
