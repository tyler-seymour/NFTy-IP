## NFTy-IP

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/nftyip)
[Deployed with StackBlitz ⚡️](https://nftyip.stackblitz.io)

## About

Issue licenses for your intellectual property using non-fungible tokens! 

Created with [0xCert](https://0xcert.org/), [NES.css](https://nostalgic-css.github.io/NES.css/), and [StackBlitz ⚡️](https://www.stackblitz.io/) 

Asset Metadata API using Python [Flask](https://palletsprojects.com/p/flask/).

## Connecting

Use [Metamask](https://www.metamask.io/) to interact with the application. Any other web3 provider should work as well. 

## New Asset

Creates a new asset ledger and assigns a symbol. Must supply metadata API endpoint. For example, http://copyrights.us-east-1.elasticbeanstalk.com/1

## Issue License

After a new asset ledger has been created, users can mint a new licenses for the asset. 

## Licensees

This page shows the licenses issued on a particular ledger. Currently, dapp is set up to read from the contract located at: [0x302e107ffc476865dd2d01545b96957f104f5cfc](https://ropsten.etherscan.io/address/0x302e107ffc476865dd2d01545b96957f104f5cfc) on Ropsten Test Network. 

## Supported Licenses

WIP however plans to start with "MIT", "NFT License v2", and "CCv4"

## IP Metadata Asset
  {
    "$schema": "http://json-schema.org/draft-07/schema",
    "description": "NFT License Schema",
    "properties": {
      "licenseName": {
        "description": "The common name of the license, i.e. MIT or NFTv3.",
        "type": "string"
      },
      "licenseURI": {
        "description": "IPFS hash or URI where license is hosted.",
        "type": "string"
      },
      "assetLocation": {
        "description": "IPFS hash, URI, git repository, or NFT contract address where licensed asset is located.",
        "type": "string"
      },
      "registration": {
        "description": "0-Not Registered, 1-Pending, otherwise <Country Code>-<Registration Number>.",
        "type": "string"
      }
    },
    "required": ["$schema"],
    "title": "NFT License",
    "type": "object",
}

