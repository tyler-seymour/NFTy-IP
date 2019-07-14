import { schema86 } from '@0xcert/conventions';

export const licenseSchema = {
  $schema: 'http://json-schema.org/draft-07/schema',
  description: 'NFT License Schema',
  properties: {
    ...schema86.properties,
    licenseName: {
      description: 'The common name of the license, i.e. MIT or NFTv3.',
      type: 'string'
    },
    licenseURI: {
      description: 'IPFS hash or URI where license is hosted.',
      type: 'string'
    },
    assetLocation: {
      description: 'IPFS hash, URI, git repository, or NFT contract address where licensed asset is located.',
      type: 'string'
    },
    registration: {
      description: '0-Not Registered, 1-Pending, otherwise <Country Code>-<Registration Number>.',
      type: 'string'
    }
  },
  required: ['$schema'],
  title: 'NFT License',
  type: 'object',
}