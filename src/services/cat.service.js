import axios from 'axios'


export const getRandomCat = async () => {

    const result = await axios.get('/images/search', {
        baseURL: import.meta.env.VITE_URL_CAT_API,
        params: {
            order: 'RAND',
            has_breeds:1
        },
        headers: {
            'x-api-key': import.meta.env.VITE_KEY_CAT_API
        }
    });

    const cat = result.data[0];
    return {
        id: cat.id,
        urlImage: cat.url,
        breeds: cat.breeds?.map(b => b.name)?.join(', ') ?? 'N/A'
    }
}
