

export function setLocalStorage(key: string, value: unknown): void {
  localStorage.setItem(key, JSON.stringify(value));
}


export function getLocalStorage(key: string): unknown | null {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}