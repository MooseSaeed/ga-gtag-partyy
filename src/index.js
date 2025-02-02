export const install = (trackingId, additionalConfigInfo = {}) => {
  const scriptId = "ga-gtag";

  if (document.getElementById(scriptId)) return;

  const { head } = document;
  const script = document.createElement("script");
  script.id = scriptId;
  script.defer = "defer";
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  script.type = "text/partytown";
  script.fetchpriority = "low";
  head.appendChild(script);

  const initScript = document.createElement("script");
  initScript.type = "text/partytown";
  initScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag("js", new Date());
    gtag("config", "${trackingId}");
  `;
  head.appendChild(initScript);
};

export const gtag = function () {
  // Can't use arrow func + destructuring as Google expects
  // arguments objects in dataLayer (not an array of arguments).
  window.dataLayer.push(arguments);
};

export default gtag;
