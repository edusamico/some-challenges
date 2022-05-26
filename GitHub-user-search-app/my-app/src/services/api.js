const urlBase = "https://api.github.com/users/";

export const api = {
    getDataUser: async (textInput) => {
        let response = await fetch(urlBase + textInput);
        let body = await response.json();
        return body;
    }
}