const urlBase = "https://api.github.com/users/";

export const api = {
    getDataUser: async (textInput) => {
        if (textInput === "") {
            let body = { message: "Type some username" };
            return (body);
        }
        let response = await fetch(urlBase + textInput);
        let body = await response.json();

        if (response.status !== 200) {
            if (response.status === 304) {
                body = { message: `${response.status} Error: Not modified` };
            }
            if (response.status === 401) {
                body = { message: `${response.status} Error: Requires authentication` };
            }
            if (response.status === 403) {
                body = { message: `${response.status} Error: Forbidden` };
            }
            if (response.status === 404) {
                body = { message: `${response.status} Error: Resource not found` };
            }
            if (response.status === 422) {
                body = { message: `${response.status} Error: Validation failed` };
            }
        } 
        return body;
    }
}