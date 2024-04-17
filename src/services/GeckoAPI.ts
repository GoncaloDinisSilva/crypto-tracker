export const getCryptoPrices = async () => {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,tether,dogecoin,usd-coin,binancecoin,solana,cardano');
        const data = await response.json();
        const formattedData = data.map((crypto: any) => ({
            id: crypto.id,
            name: crypto.name || 'Error: Could not get value', // Fallback value in case name is missing
            symbol: crypto.symbol || 'Error: Could not get value', // Fallback value in case symbol is missing
            current_price: crypto.current_price || 'Error: Could not get value', // Fallback value in case price is missing
        }));
        return formattedData;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}