import React, { useState, useEffect, useCallback } from "react";
import { DataContext } from "./DataContext";
import { useSettings } from "./useSettings";
import { fetchApiData } from "../api/apiData";
import { toast } from "react-toastify";

export const DataProvider = ({ children }) => {
  const { language, theme } = useSettings();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [cachedData, setCachedData] = useState({}); 

  // Veri çekme fonksiyonu - Caching ve Hata Yönetimi 
  const fetchData = useCallback(async (lang) => {
    //  Caching kontrolü
    if (cachedData[lang]) {
      setData(cachedData[lang]);
      return; // Yeniden istek atılmaması 
    }

    setIsLoading(true); // Yükleme  geri bildirimi
    setIsError(null);
    setData(null);

    try {
      const result = await fetchApiData(lang);
      setData(result);
      setCachedData((prev) => ({ ...prev, [lang]: result })); // Önbelleğe kaydet
    } catch (error) {
      console.error("API Fetch Error:", error.message);
      setIsError(error.message);
      // Hata geri bildirimi
      toast.error(
        lang === "tr" ? `Hata: ${error.message}` : `Error: ${error.message}`,
        { autoClose: 3000, theme, position: "bottom-right" }
      );
    } finally {
      setIsLoading(false);
    }
  }, [cachedData, theme]);

  // Dil her değiştiğinde veriyi çek
  useEffect(() => {
    fetchData(language);
  }, [language, fetchData]);

  const contextValue = {
    data,
    isLoading,
    isError,
    fetchData,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};