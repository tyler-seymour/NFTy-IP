import './style.css';
import { renderListAssets } from './pages/list-assets';
import { renderCreateAsset } from './pages/create-asset';
import { renderDeployAssetLedger } from './pages/deploy-asset-ledger';
import { connection } from './src/asset-management';
import { renderDisplayHomePage } from './pages/home-page';
import { renderDisplaySupportedLicenses } from './pages/supported-licenses';

const appDiv: HTMLElement = document.getElementById('app');

displayHomePage();

// ********* Display Homepage *********
window['displayHomePage'] = async () => { 
  appDiv.innerHTML = renderDisplayHomePage.page;
};

async function displayHomePage() {
  appDiv.innerHTML = renderDisplayHomePage.page;
};

// ********* Supported Licenses *********
window['displaySupportedLicenses'] = async () => { 
  appDiv.innerHTML = renderDisplaySupportedLicenses.page;
};

async function renderSupportedLicenses() {
  appDiv.innerHTML = renderDisplaySupportedLicenses.page;
};

// ********* List assets *********
window['listAssets'] = async () => { 
  appDiv.innerHTML = 'Loading ...';
  await loadHomePage();
};

async function loadHomePage() {
  await connection.enableMetamask();
  appDiv.innerHTML = await renderListAssets.load();
}

// ********* Create asset *********
window['createAsset'] = async () => {   
  appDiv.innerHTML = renderCreateAsset.page;
};

window['createSubmit'] = async () => {
  const id = document.getElementById('createId').value;
  const receiverId = document.getElementById('createReceiverId').value;
  const licenseName = document.getElementById('createLicenseName').value;
  const licenseURI = document.getElementById('createLicenseURI').value;
  const registration = document.getElementById('createRegistration').value;
  const assetLocation = document.getElementById('createAssetLocation').value;
  appDiv.innerHTML = 'Creating ...';
  appDiv.innerHTML = (await renderCreateAsset.submit({ id, receiverId, licenseName, licenseURI, assetLocation, registration }));
};

// ********* Deploy new asset ledger *********
window['deployAssetLedger'] = async () => { 
  appDiv.innerHTML = renderDeployAssetLedger.page;
};

window['deploySubmit'] = async () => {
  const name = document.getElementById('deployName').value;
  const symbol = document.getElementById('deploySymbol').value;
  const uriBase = document.getElementById('deployUriBase').value;
  appDiv.innerHTML = 'Deploying ...';
  appDiv.innerHTML = (await renderDeployAssetLedger.submit({ name, symbol, uriBase }));
};


