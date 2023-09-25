
const SteamApi = {
    FindNews: (async (req, res) => {
        try {
            const response = await fetch(' http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=730&count=3&maxlength=300&format=json');
            if (!response.ok) {
                throw new Error('Failed to fetch from Steam API');
            }
            const newsData = await response.json(); 
            res.json(newsData);
        } catch (error) {
            console.error('Error fetching news:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    })

};

module.exports = SteamApi;
