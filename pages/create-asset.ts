import { create } from '../src/asset-management';

export module renderCreateAsset {
  export const page = `
    <br>

    <input id="createId" type="text" placeholder="License ID #" /><br>
    <input id="createLicenseURI" type="text" placeholder="License URI" /><br>
    <input id="createReceiverId" type="text" placeholder="Licensee" /><br>
    <input id="createAssetLocation" type="text" placeholder="Asset Location" /><br>

    <section style="nes-text">
      <p>Type of Asset:</p>
    </section>
    <br>

    <label>
      <input type="radio" class="nes-radio" name="registered" id="createRegistration" checked />
      <span>Copyright</span>
    </label>
    <label>
      <input type="radio" class="nes-radio" name="registered" id="createRegistration" />
      <span>Patent</span>
    </label>
    <label>
      <input type="radio" class="nes-radio" name="registered" id="createRegistration" />
      <span>Trademark</span>
    </label>
    <br><br>

    <div class="nes-select is-success">
      <select required id="createLicenseName">
        <option value="" disabled selected hidden>Select License</option>
        <option value="0">CC Attribution v4</option>
        <option value="1">NFT License v2</option>
      </select>
    </div>
    <br>
    <label>
  <input type="checkbox" required class="nes-checkbox" />
  <span>By checking this box, I agree to the <a href="www.google.com"> Terms of Service. </a></span>
</label>
    <br>
    <button class="nes-btn" onclick="createSubmit()">Create</button>
    <br>
  `;

  export async function submit(data: any) {
    const mutationId = await create.asset(data);
    return `
      <h1><a target="_blank" href="https://ropsten.etherscan.io/tx/${mutationId}">
        See contract interaction on Etherscan.
      </a></h1>
      <div><button class="nes-btn" onclick="createAsset()">Issue another License </button></div>
    `;
  }
}
