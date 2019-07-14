import { query } from '../src/asset-management';

export module renderListAssets {
  export async function load() {
    const info = await query.assets();
    let html = `
      <br>
      <div>Licensed Asset: ${info.name}</div>
      <div>Asset Symbol: ${info.symbol}</div>
      <div>Number of Licenses: ${info.supply}</div><br/>
      <div>Name of License: ${info.licenseName}</div>
      <div>Issued Licenses: </div>
    `;
    try { 
      info.assets.forEach((asset) => {
        html = html + `
        <div id="asset">
          <img src="${asset.assetLocation}" />
          <div>#${asset.id}</div>
          <div>${asset.licenseName}</div>
          <div>${asset.licenseURI}</div>
          <div>${asset.assetLocation}</div>
          <div>${asset.registration}</div>
        </div>`;
      });
    } catch (error) {}
    return html;
  }
}
