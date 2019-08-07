class GitHub {
    constructor() {
        this.client_id = "171136b13c0ab9eea0fd";
        this.client_secret = "88a6b581f2934407e4f88d59be68844810710c57";
        this.repos_amount = 5;
        this.latest_repos = 'created: asc';
    }

    async getUser(user) {
        const profile = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repo = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_amount}&sort=${this.latest_repos}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileValue = await profile.json();

        const repoValue = await repo.json();

        return {
            profileValue,
            repoValue
        }
    }
}