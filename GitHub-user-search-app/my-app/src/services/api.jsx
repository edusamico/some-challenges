const urlBase = "https://api.github.com/users/";

export const api = {
    getDataUser: async (textInput) => {
        if (textInput === "") {
            let body = {message : "Type some username"};
            return (body);
        }
        let response = await fetch(urlBase + textInput);
        let body = await response.json();
        
        return body;
    }
}