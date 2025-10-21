import { useState, useEffect } from "react";

/**
 * @param {string} key LocalStorage anahtarı
 * @param {any} initialValue Eğer LocalStorage'da değer yoksa kullanılacak başlangıç değeri
 * @returns {[any, (value: any) => void]} 
 */
export function useLocalStorage(key, initialValue) {
  // LocalStorage'dan değeri oku veya initialValue kullan
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        return JSON.parse(storedValue);
      }
      // Tarayıcı tercihini sadece tema için ilk değer olarak ayarla
      if (key === "theme" && !initialValue) {
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        return prefersDark ? "dark" : "light";
      }
      return initialValue;
    } catch (error) {
      console.error(`Error reading key "${key}" from localStorage:`, error);
      return initialValue;
    }
  });

  // 'value' her değiştiğinde LocalStorage'ı güncelle
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error writing key "${key}" to localStorage:`, error);
    }
  }, [key, value]);

  return [value, setValue];
}
