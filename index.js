//have an array of new freelancers
//inject one item into the dom every second

const names = ['Alice', 'Bob', 'Carol', 'Jay'];
const occupations = ['Write', 'Programmer', 'Designer', ' Teacher'];

// function to calculate averaeg starting price
let freelancers = [];
function calculateAveragePrice() {
    if (freelancers.length === 0) {
        return 0;
    }
    const total = freelancers.reduce((accumulator, freelancer) => accumulator + freelancer.startingPrice, 0)
    return (total / freelancers.length).toFixed(2) //round to two decimal places
}
//function to display freelancers and update average price
function displayFreelancers() {
    const freelancersList = document.getElementById('freelancers-list');
    freelancersList.innerHTML = '';
    for (let freelancer of freelancers) {
        const listItem = document.createElement('li');
        listItem.textContent = '${freelancer.name} - ${freelancer.occupation}, Starting Price: $${freelancer.startingPrice}';
        freelancersList.appendChild(listItem);
    }
    //update average price
    const averagePriceElement = document.getElementById('average-price-value');
    averagePriceElement.textContent = calculateAveragePrice();
}
function generateRandomFreelancers() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const randomStartingPrice = Math.floor(Math.random() * 100) + 30;
    return { name: randomName, occupation: randomOccupation, startingPrice: randomStartingPrice }
}
function addRandomFreelancer() {
    const newFreelancer = generateRandomFreelancer();
    freelancers.push(newFreelancer)
    displayFreelancers();
}
freelancers.push({ name: 'Alice', occupation: "Write", startingPrice: 30 });
freelancers.push({ name: 'Bob', occupation: 'Programmer', startingPrice: 50 });
displayFreelancers();
setInterval(addRandomFreelancer, 5000);
