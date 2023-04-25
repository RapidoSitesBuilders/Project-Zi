import Moralis from 'moralis';
import { dex_top_20 } from '@/data/requests/cgc_api';
// import { secrets } from '@/secrets';

export function userAddress() {
    // return web3.currentProvider.selectedAddress ?? false
    return ethereum.selectedAddress ?? false;
}

export async function startMoralis() {
    try {
        await Moralis.start({
            apiKey:
                'WqyjIPC30T4PAopp11a6lPh5pKs27CqNTJRfpYH5BjJprnrdgop7EL091vRMa211',
        });
    }
    catch (e) {
        console.error(e)
    }
}

export async function userZntBalance() {
    try {
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

export async function erc20Metadata() {    
    let addresses: any[] = []
    let top = await dex_top_20()
    top.data.forEach(item => {
        let x = item.relationships.base_token.data.id
        addresses.push(x.slice(4))
    });

    try {
        const response = await Moralis.EvmApi.token.getTokenMetadata({
            "chain": "0x38",
            "addresses": addresses,
        });
        const x = await response.raw

        for(let index in x) {
            x[index].rank = index
            x[index].pool = await top.data[index]
        }

        // console.log(x);
        return x
    } catch (e) {
        console.error(e);
    }
}