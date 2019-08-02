import { deploy } from '../src/asset-management';

export module renderDeployAssetLedger {
  export const page = `
    <br>
    <input id="deployName" type="text" placeholder="Name" /><br/>
    <input id="deploySymbol" type="text" placeholder="Symbol" /><br/>
    <input id="deployUriBase" type="text" placeholder="Base URI of Metadata API" /><br/><br/>
    <button class="nes-btn" onclick="deploySubmit()">Deploy</button>
  `;
  export async function submit(data: any) {
    const mutationId = await deploy.assetLedger(data);
    return `
      <h2><a target="_blank" href="https://ropsten.etherscan.io/tx/${mutationId}">
        <br>
        See transaction on Etherscan.
      </a></h2>
      <div><button class="nes-btn" onclick="deployAssetLedger()">New Ledger</button></div>
    `;
  }
}