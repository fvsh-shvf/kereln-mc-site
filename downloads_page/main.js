window.onload = () => {
  const lang = localStorage.getItem("lang") || "en";

  const translations = {
    en: {
      lastwarning: "Last Release",
      recomwarning: "Recomend Version",
      previouswarning: "Previous Versions",
      betawarning: "Last Beta",
      back: "Back"
    },
    ru: {
      lastwarning: "Последний Релиз",
      recomwarning: "Рекомендуемая Версия",
      previouswarning: "Прошлые Версии",
      betawarning: "Последняя Beta",
      back: "Назад"
    }
  };

  const t = translations[lang];

  document.querySelector("#lastwarning p").innerText = t.lastwarning;
  document.querySelector("#recomwarning p").innerText = t.recomwarning;
  document.querySelector("#previouswarning p").innerText = t.previouswarning;
  document.querySelector("#betawarning p").innerText = t.betawarning;
  document.querySelector("#back a").innerText = t.back;
};
