window.onload = () => {
  const lang = localStorage.getItem("lang") || "en";

  const translations = {
    en: {
      aboutcore: "KerelnMC - core for minecraft servers",
      download: "Download Kereln",
      ofplugs: "Official Plugins",
      plugshelp: "You can also use Spigot or Bukkit plugins.",
      adtxt: "ad"
    },
    ru: {
      aboutcore: "KerelnMC - ядро для Minecraft серверов",
      download: "Скачать Kereln",
      ofplugs: "Официальные плагины",
      plugshelp: "Вы также можете использовать Spigot или Bukkit плагины.",
      adtxt: "Реклама"
    }
  };

  document.querySelector("#aboutcore h2").innerHTML = translations[lang].aboutcore;
  document.querySelector("#download a").innerText = translations[lang].download;
  document.querySelector("#ofplugs a").innerText = translations[lang].ofplugs;
  document.querySelector("#plugshelp h2").innerText = translations[lang].plugshelp;
  document.querySelector("#adtxt h3").innerText = translations[lang].adtxt;
};
