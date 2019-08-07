// search
const searchUserName = document.getElementById('searchUserName');

const github = new GitHub();
const ui = new UI();

//search event listener
searchUserName.addEventListener("keyup", (e) => {
    // input
    const selectedText = e.target.value;

    if(selectedText !== "") {
        //make call
        github.getUser(selectedText)
            .then(data => {
                if(data.profileValue.message === "Not Found") {
                    // show error
                    ui.showError("Username not found", "alert alert-danger");
                } else {
                    //continue
                    ui.showUserProfile(data.profileValue);
                    ui.showUserRepos(data.repoValue);
                }
                
            })
    } else {
        //clear value
        ui.clearUserProfile();
    }
});