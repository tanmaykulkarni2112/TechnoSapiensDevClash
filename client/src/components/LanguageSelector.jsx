import { useState } from "react";
import { translateText } from "../utils/translate";

const LanguageSelector = ({ textKeys, setTranslatedText }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [loading, setLoading] = useState(false);

  const handleLanguageChange = async (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    setLoading(true);

    try {
      const translatedTexts = await Promise.all(
        textKeys.map(async (text) => ({
          key: text.key,
          value: await translateText(text.value, "en", newLanguage),
        }))
      );

      // Convert array to object for state update
      const translations = translatedTexts.reduce((acc, item) => {
        acc[item.key] = item.value;
        return acc;
      }, {});

      setTranslatedText(translations);
    } catch (error) {
      console.error("Translation failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <select
      value={selectedLanguage}
      onChange={handleLanguageChange}
      disabled={loading}
      className="p-2 border rounded"
    >
      <option value="en">English</option>
      <option value="hi">हिन्दी (Hindi)</option>
      <option value="bn">বাংলা (Bengali)</option>
      <option value="mr">मराठी (Marathi)</option>
      <option value="te">తెలుగు (Telugu)</option>
      <option value="ta">தமிழ் (Tamil)</option>
      <option value="gu">ગુજરાતી (Gujarati)</option>
    </select>
  );
};

export default LanguageSelector;
