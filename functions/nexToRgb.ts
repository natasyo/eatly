export function nexToRGB(color: string, opacity?: number) {
  let d = color.replace('#', '');
  let c2hex = `rgba(${Array.from(d)
    .map((a, _) => (_ % 2 == 0 ? parseInt(d[_] + d[_ + 1], 16) + ',' : null))
    .join('')} ${opacity ? opacity : 1})`;
  return c2hex;
}
