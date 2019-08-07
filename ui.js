class UI {
    constructor() {
        this.profile = document.getElementById("user-profile");
    }

    showUserProfile(username) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${username.avatar_url}">
            <a href="${username.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${username.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${username.public_gists}</span>
            <span class="badge badge-success">Followers: ${username.followers}</span>
            <span class="badge badge-info">Following: ${username.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${username.company}</li>
              <li class="list-group-item">Website/Blog: ${username.blog}</li>
              <li class="list-group-item">Location: ${username.location}</li>
              <li class="list-group-item">Member Since: ${username.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
        `;
    }

    clearUserProfile() {
        this.profile.innerHTML = "";
    }

    showError(message, className) {

        this.clearError();
        const div = document.createElement("div");

        div.className = className;

        div.appendChild(document.createTextNode(message));

        const container = document.querySelector(".searchcontainer");
        
        const search = document.querySelector(".search")

        container.insertBefore(div, search);

        setTimeout(() => {
            this.clearError();
        }, 2000);
    }

    //clear error
    clearError() {
        const currentError = document.querySelector(".alert");
        if(currentError) {
            currentError.remove();
        }
    }

    showUserRepos(repos) {
        let output = "";

        repos.forEach(function(repos) {
            output += `
                <div class="card card-body mb-2">
                <div class="row">
                <div class="col-md-6">
                    <a href="${repos.html_url}" target="_blank">${repos.name}</a>
                </div>
                <div class="col-md-6">
                <span class="badge badge-primary">Stars: ${repos.stargazers_count}</span>
                <span class="badge badge-secondary">Watchers: ${repos.watchers_count}</span>
                <span class="badge badge-success">Forks: ${repos.forks_count}</span>
                </div>
                </div>
                </div> 
            `;
        });

        document.getElementById('repos').innerHTML = output;
    }

}