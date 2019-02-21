//Hard coded database.
const data = [
    {
        name: 'Paulo Lima',
        age: 19,
        gender: 'Male',
        lookingfor: 'Female',
        location: 'Curitiba - PR',
        image: 'https://randomuser.me/api/portraits/men/62.jpg'
    },
    {
        name: 'Fabio Lima',
        age: 29,
        gender: 'Male',
        lookingfor: 'Female',
        location: 'Curitiba - PR',
        image: 'https://randomuser.me/api/portraits/men/74.jpg'
    },
    {
        name: 'Fernanda Lima',
        age: 19,
        gender: 'Female',
        lookingfor: 'Male',
        location: 'Curitiba - PR',
        image: 'https://randomuser.me/api/portraits/women/74.jpg'
    }
];

//Calling the profileIterator function.
const profiles = profileIterator(data);

//Showing the first profile.
nextProfile()

//Next event listener.
document.getElementById('next').addEventListener('click', nextProfile);

//Next profile function.
function nextProfile() {
    //Getting the data from profileIterator.
    const currentProfile = profiles.next().value;

    //Checking if there is a profile available.
    if (currentProfile !== undefined) {
        //Showing the next profile for the user.
        document.getElementById('profileDisplay').innerHTML = `
            <ul class="list-group">
                <li class="list-group-item">Name: ${currentProfile.name}</li>
                <li class="list-group-item">Age: ${currentProfile.age}</li>
                <li class="list-group-item">Gender: ${currentProfile.gender}</li>
                <li class="list-group-item">Looking for: ${currentProfile.lookingfor}</li>
                <li class="list-group-item">Location: ${currentProfile.location}</li>
            </ul>
        `;

        //Showing the image for the user.
        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    } else {
        //Reloading the page if there is no profile available.
        window.location.reload();
    }
}

//Profile iterator function.
function profileIterator(profiles) {
    //Defining the next index.
    let nextIndex = 0;

    //Return an object with a function and the iteration in the profiles list.
    return {
        next: function() {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true };
        }
    }
}