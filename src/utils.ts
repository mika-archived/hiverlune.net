const WHITELIST: string[] = [
  'children',
  'component',
  'class'
];

// tslint:disable-next-line:no-any
export function propertyMapping(obj: any, json: any): void {
  // tslint:disable-next-line:forin
  const keys = Object.keys(json);
  for (const key of keys) {
    if (key.startsWith('@')) {
      obj[key.substring(1)] = json[key];
    } else if (WHITELIST.find((w) => w === key)) {
      obj[key] = json[key];
    }
  }
}
