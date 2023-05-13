const sleak_htmlUrl = 'https://95c4299bd7e6e57cacd63bc0daa40451.cdn.bubble.io/f1683555697191x714149577677779600/sleakbotv4-1.html';
const sleak_jsUrl = 'https://95c4299bd7e6e57cacd63bc0daa40451.cdn.bubble.io/f1683556448497x628504290522213400/sleakbotv4-1.js';

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