// gtag.js
(function () {
  const script = document.createElement('script');
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"; // ← Replace with your GA ID
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX'); // ← Again, replace with your GA ID
})();
