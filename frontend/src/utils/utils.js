export function isMobile() {
  if (window) return window.matchMedia(`(max-width: 767px)`).matches;

  return false;
}

export function isMdScreen() {
  if (window) return window.matchMedia(`(max-width: 1199px)`).matches;

  return false;
}
