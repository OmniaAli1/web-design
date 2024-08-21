var infoForm = document.getElementById("infoForm");
var userList = [];

infoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    var userEntry = {
        username: event.target.elements.username.value,
        location: event.target.elements.location.value,
    };
    
    userList.push(userEntry);
    displayUsers();
});

function displayUsers() {
    var tableBody = document.getElementById("userTable");
    tableBody.innerHTML = "";
    
    userList.forEach((user, index) => {
        var row = document.createElement("tr");

        var usernameCell = document.createElement("td");
        var locationCell = document.createElement("td");
        var optionsCell = document.createElement("td");

        var deleteButton = document.createElement("button");
        var editButton = document.createElement("button");

        usernameCell.textContent = user.username;
        locationCell.textContent = user.location;

        deleteButton.textContent = "Delete";
        editButton.textContent = "Edit";

        deleteButton.classList.add("btn", "btn-danger", "me-2");
        editButton.classList.add("btn", "btn-warning");

        deleteButton.addEventListener("click", function() {
            deleteUser(index);
        });

        editButton.addEventListener("click", function() {
            editUser(index);
        });

        optionsCell.appendChild(deleteButton);
        optionsCell.appendChild(editButton);

        row.appendChild(usernameCell);
        row.appendChild(locationCell);
        row.appendChild(optionsCell);

        tableBody.appendChild(row);
    });
}

function deleteUser(index) {
    userList.splice(index, 1);
    displayUsers();
}

function editUser(index) {
    var newUsername = prompt("Enter new username:", userList[index].username);
    var newLocation = prompt("Enter new location:", userList[index].location);

    if (newUsername && newLocation) {
        userList[index].username = newUsername;
        userList[index].location = newLocation;
        displayUsers();
    }
}
