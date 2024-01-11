const API_URL = "https://search.imdbot.workers.dev/?q="


export default async (searchTerm:string) => {
    try {
        const response = await fetch(`${API_URL}${searchTerm}`)
        const data = response.json();

        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject(error);
    }
}