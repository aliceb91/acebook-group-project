const SteamStoreAPI = {
    FindGames: (async (req, res)=>{
        try{
            const response = await fetch ('http://api.steampowered.com/ISteamApps/GetAppList/v0002/?format=json');
            if (!response.ok){
                throw new Error('Failed to connect to Steam api')
            }
            const gameData = await response.json();
            console.log(gameData)
            res.json(gameData);
        } catch (error){
            console.error('Couled not Paser data',error );
            res.status(500).json({ messeage: 'ERROR'});
        }
    })
}

module.exports = SteamStoreAPI