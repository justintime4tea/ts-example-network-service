export type ErrorCallback = (err: Error, result?: unknown) => void;

export async function delay(d: number) {
  return new Promise((resolve) => setTimeout(resolve, d));
}

export function isObject(o: unknown): o is Record<string, unknown> {
  return typeof o === 'object' && o !== null;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction(f: unknown): f is Function {
  return typeof f === 'function' || f instanceof Function;
}

export function isNonNullPrimitive(p: unknown): p is NonNullPrimitive {
  return p !== null && p !== undefined && NonNullPrimitives.includes(typeof p);
}

export type NonNullPrimitive =
  | 'string'
  | 'boolean'
  | 'number'
  | 'bigint'
  | 'symbol';
export const NonNullPrimitives = [
  'string',
  'boolean',
  'number',
  'bigint',
  'symbol',
];

/**
 * A way of determining if a value contains only numbers.
 *
 * @param value A value to check whether or not it is only numbers.
 * @returns Whether or not the thing provided is entirely made of
 * numbers.
 */
export function isOnlyNumbers(value: unknown): boolean {
  return (
    (isNonNullPrimitive(value) && typeof value === 'number') ||
    (typeof value === 'string' && /^\d+$/.test(value))
  );
}
