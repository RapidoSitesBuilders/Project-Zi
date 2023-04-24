import Moralis from 'moralis';
// import { secrets } from '@/secrets';

export function userAddress() {
  // return web3.currentProvider.selectedAddress ?? false
  return ethereum.selectedAddress ?? false;
}

export async function userZntBalance() {
  try {
    await Moralis.start({
      apiKey:
        'WqyjIPC30T4PAopp11a6lPh5pKs27CqNTJRfpYH5BjJprnrdgop7EL091vRMa211',
    });

    const response = await Moralis.EvmApi.token.getWalletTokenBalances({
      chain: '0x38',
      tokenAddresses: ['0xa3ec6031a97dc7b2fbce197cc84fbead9f9d4e8c'],
      address: userAddress(),
    });

    return response.raw;
  } catch (e) {
    console.error(e);
  }
}
