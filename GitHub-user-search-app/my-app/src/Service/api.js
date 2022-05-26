const urlBase = "https://api.github.com/users/";

export const api = {
    getDataUser: async (textInput) => {
        let req = await fetch(urlBase + textInput);
        let json = await req.json();
        // Fake API
        // let json = {
        //     "login": textInput,
        //     "id": 62490915,
        //     "node_id": "MDQ6VXNlcjYyNDkwOTE1",
        //     "avatar_url": "https://avatars.githubusercontent.com/u/62490915?v=4",
        //     "gravatar_id": "",
        //     "url": "https://api.github.com/users/edusamico",
        //     "html_url": "https://github.com/edusamico",
        //     "followers_url": "https://api.github.com/users/edusamico/followers",
        //     "following_url": "https://api.github.com/users/edusamico/following{/other_user}",
        //     "gists_url": "https://api.github.com/users/edusamico/gists{/gist_id}",
        //     "starred_url": "https://api.github.com/users/edusamico/starred{/owner}{/repo}",
        //     "subscriptions_url": "https://api.github.com/users/edusamico/subscriptions",
        //     "organizations_url": "https://api.github.com/users/edusamico/orgs",
        //     "repos_url": "https://api.github.com/users/edusamico/repos",
        //     "events_url": "https://api.github.com/users/edusamico/events{/privacy}",
        //     "received_events_url": "https://api.github.com/users/edusamico/received_events",
        //     "type": "User",
        //     "site_admin": false,
        //     "name": "edu",
        //     "company": "Gasola",
        //     "blog": "",
        //     "location": "Recife",
        //     "email": "edusamico@gmail.com",
        //     "hireable": null,
        //     "bio": null,
        //     "twitter_username": null,
        //     "public_repos": 8,
        //     "public_gists": 0,
        //     "followers": 5,
        //     "following": 4,
        //     "created_at": "2020-03-22T01:57:46Z",
        //     "updated_at": "2022-05-06T13:17:47Z"
        // }
        return json;
    }
}