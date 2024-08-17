// Day 12: PROMISE 

// Simulates a network request by returning a Promise
function simulateNetworkRequest(url) {
    console.log(`Initiating request to ${url}...`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.3; // 70% chance of success
            if (success) {
                resolve(`Data from ${url}`);
            } else {
                reject(`Error: Failed to fetch data from ${url}`);
            }
        }, 2000); // Simulating a 2-second network delay
    });
}

// Function to fetch data from multiple sources
function fetchData() {
    console.log('Starting data fetch...');

    simulateNetworkRequest('https://api.example.com/data1')
        .then(data1 => {
            console.log(`Received: ${data1}`);
            return simulateNetworkRequest('https://api.example.com/data2');
        })
        .then(data2 => {
            console.log(`Received: ${data2}`);
            return simulateNetworkRequest('https://api.example.com/data3');
        })
        .then(data3 => {
            console.log(`Received: ${data3}`);
            console.log('All data fetched successfully!');
        })
        .catch(err => {
            console.error(err);
        });
}

// Function to demonstrate Promise.all
function fetchMultipleData() {
    console.log('Fetching multiple data sources simultaneously...');

    Promise.all([
        simulateNetworkRequest('https://api.example.com/data1'),
        simulateNetworkRequest('https://api.example.com/data2'),
        simulateNetworkRequest('https://api.example.com/data3')
    ])
    .then(([data1, data2, data3]) => {
        console.log(`All data received: ${data1}, ${data2}, ${data3}`);
    })
    .catch(err => {
        console.error(`Failed to fetch all data: ${err}`);
    });
}

// Function to demonstrate Promise.race
function raceDataFetch() {
    console.log('Starting data fetch race...');

    Promise.race([
        simulateNetworkRequest('https://api.example.com/data1'),
        simulateNetworkRequest('https://api.example.com/data2'),
        simulateNetworkRequest('https://api.example.com/data3')
    ])
    .then(data => {
        console.log(`First data received: ${data}`);
    })
    .catch(err => {
        console.error(`Error in race: ${err}`);
    });
}

// Run the functions to demonstrate different Promise scenarios
fetchData();           // Sequential fetching
fetchMultipleData();  // Concurrent fetching with Promise.all
raceDataFetch();      // Race condition fetching

