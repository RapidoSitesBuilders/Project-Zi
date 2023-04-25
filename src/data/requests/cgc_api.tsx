export function znt() {
    return fetch(
        'https://api.geckoterminal.com/api/v2/networks/bsc/tokens/0xa3ec6031a97dc7b2fbce197cc84fbead9f9d4e8c/pools'
    )
        .then((res) => res.json())
        .then((data) => {
            console.log('znt', data);
            return data;
        });
}

export function dex_top_20() {
    return fetch(
        'https://api.geckoterminal.com/api/v2/networks/bsc/dexes/pancakeswap_v2/pools'
    )
        .then((res) => res.json())
        .then((data) => {
            // console.log('dex_top_20', data)
            return data;
        });
}