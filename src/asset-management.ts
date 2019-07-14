import { MetamaskProvider } from '@0xcert/ethereum-metamask-provider';
import { AssetLedger, AssetLedgerCapability } from '@0xcert/ethereum-asset-ledger';
import { Cert } from '@0xcert/cert';
import { licenseSchema } from './license-schema';

// ********* Establish blockchain connection *********
export module connection {
  export const provider = new MetamaskProvider();
  export const ledgerId = '0x302e107ffc476865dd2d01545b96957f104f5cfc';
  export async function enableMetamask() {
    if (!(await provider.isEnabled())) {
      await provider.enable();
    }
  }
}

// ********* Deploy a new asset ledger *********
export module deploy {
  export async function assetLedger(data: any) {
    const mutation = await AssetLedger.deploy(connection.provider, {
      name: data.name,
      symbol: data.symbol,
      uriBase: data.uriBase,
      schemaId: '0x3c065f842bf043fb2380b968b3c22e105daaa24042c25fedc73445fd34f30e71', // base asset schemaId
      capabilities: [
        AssetLedgerCapability.REVOKE_ASSET,
        AssetLedgerCapability.UPDATE_ASSET,

      ],
    }).catch((error) => console.log(error));
    mutation.complete().then(() => console.log(mutation.receiverId));
    return mutation.id;
  }
}

// ********* Read asset data *********
export module query {
  export async function assets(): Promise<void> {
    const ledger:any = new AssetLedger(connection.provider, connection.ledgerId);
    const info:any = await ledger.getInfo();
    console.log('info:', info)
    const assets:any[] = [];
    info.assets = null
    for (let i = 0; i < info.supply; i++) {
      console.log('info.supply:', info.supply)
      const id:number = (await ledger.getAssetIdAt(i)).toString();
      console.log('id', id)

      const asset:number= await ledger.getAsset(id);
      console.log('asset', asset)

      const res:any = await fetch(asset.uri);
      const data:any = await res.json();

      assets.push({ 
        id, 
        assetLocation: data.assetLocation,
        licenseName: data.licenseName,
        licenseURI: data.licenseURI,
        registration: data.registration
      });
    }
    console.log('assets', assets)
    info.assets = assets
    console.log('info after assigment:', info)
    return info;
  }
}

// ********* Create a new asset *********
export module create {
  export async function asset(data: any) {
    const ledger = new AssetLedger(connection.provider, connection.ledgerId);
    const cert = new Cert({
      schema: licenseSchema,
    });

    const assetData = {
      licenseName: data.licenseName,
      assetLocation: `https://api.nftyip.com/${data.id}`,
      licenseURI: data.licenseURI,
      registration: data.registration
    }

    const imprint = await cert.imprint(assetData);
    const mutation = await ledger.createAsset({
      id: data.id,
      receiverId: data.receiverId,
      imprint
    }).catch((e) => console.log(e));

    return mutation.id;
  }
}
