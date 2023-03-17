import { NeosData } from '@networkteam/zebra';

const waitFor = (event: string) => {
  return new Promise((resolve) => {
    window.addEventListener(event, resolve, { once: true });
  });
};

export const neosMetaDataInjection = (data: NeosData) => {
  (window as any)['@Neos.Neos.Ui:DocumentInformation'] = data.backend?.documentInformation;

  if (!document.getElementById('_neos-ui-css')) {
    const hostCss = document.createElement('link');
    hostCss.id = '_neos-ui-css';
    hostCss.rel = 'stylesheet';
    hostCss.href = '/_Resources/Static/Packages/Neos.Neos.Ui.Compiled/Styles/Host.css';
    document.head.appendChild(hostCss);
  }

  if (!document.getElementById('_neos-ui-ckeditor-style')) {
    const ckeditorStyle = document.createElement('style');
    ckeditorStyle.id = '_neos-ui-ckeditor-style';
    ckeditorStyle.innerText = '.cke{visibility:hidden;}';
    document.head.appendChild(ckeditorStyle);
  }

  if (!document.getElementById('_neos-next-window')) {
    const nextWindow = document.createElement('script');
    nextWindow.id = '_neos-next-window';
    nextWindow.innerHTML = 'window.neos = window.parent.neos;';
    document.head.appendChild(nextWindow);
  }

  if (!document.getElementById('_neos-ui-vendor')) {
    const vendorScript = document.createElement('script');
    vendorScript.id = '_neos-ui-vendor';
    vendorScript.src = '/_Resources/Static/Packages/Neos.Neos.Ui.Compiled/JavaScript/Vendor.js';
    document.head.appendChild(vendorScript);
  }

  if (!document.getElementById('_neos-ui-guest')) {
    const guestScript = document.createElement('script');
    guestScript.id = '_neos-ui-guest';
    guestScript.src = '/_Resources/Static/Packages/Neos.Neos.Ui.Compiled/JavaScript/Guest.js';
    guestScript.defer = true;
    document.head.appendChild(guestScript);

    guestScript.onload = () => {
      window.dispatchEvent(new CustomEvent('neos-ui-guest-ready'));
    };
  }

  waitFor('neos-ui-guest-ready').then(() => {
    const event = new CustomEvent('Neos.Neos.Ui.ContentReady');
    console.debug('Neos.Neos.Ui.ContentReady');
    window.parent.document.dispatchEvent(event);
  });

  // TODO Check if we can do it differently
  document.body.classList.add('neos-backend');
};
