const sleak_htmlUrl = 'https://cdn.jsdelivr.net/gh/sleakchat/Sleak-repository@main/sleakbot2.1.html?v-1.0';
const sleak_jsUrl = 'https://cdn.jsdelivr.net/gh/sleakchat/Sleak-repository@main/sleakbotv2.1.js?v-1.0';

fetch(sleak_htmlUrl)
  .then(sleak_response => sleak_response.text())
  .then(sleak_html => {
    const sleak_parser = new DOMParser();
    const sleak_htmlDoc = sleak_parser.parseFromString(sleak_html, 'text/html');

    document.body.appendChild(sleak_htmlDoc.documentElement);

    const sleak_script = document.createElement('script');
    sleak_script.src = sleak_jsUrl;
    document.body.appendChild(sleak_script);
  });