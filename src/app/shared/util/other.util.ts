export const EMPTY_VALUE = null;

export function getCurrentRoute(): string {
  return window.location.href.replace(window.location.origin, '');
}

export function isBlankOrEmpty(s: string): boolean {
  return (s && s.trim().length === 0) || !s;
}
