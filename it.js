// Initialize an empty dictionary that will contain all of the country info
 let info = {};

// Contacts the api and uses the populate function to put all the countries in a drop down menu
fetch('https://api.covid19api.com/summary')
  .then(response => response.json())
  .then(data => {
      info = data;
      populate(info);
      
  });


  // For each country, we make a new option in the select element, and assign it's value to the country's name
  let populate = (info) => {
    let countries = info.Countries;
    countries.forEach(country => {
        let option = document.createElement('option');
        option.value = country.ID;
        option.innerHTML = country.Country;
        let optionList =  document.querySelector('#optionList');
        optionList.appendChild(option);

    });
  }
// Initializes the variables that will hold the api data
let displayName = '';
let displayNewConfirm = '';
let displayTotConfirm = '';
let displayNewDeaths = '';
let displayTotDeaths = '';
let displayNewRecov = '';
let displayTotRecov = ''; 
let displayDateUp = '';

// Assigns the values above to the api values when an option is selected
  document.getElementById('optionList').addEventListener('change', () =>{
    let index = document.getElementById('optionList').selectedIndex;
    let ID = document.getElementById('optionList').options[index].value;
    info.Countries.forEach(country => {
        if (country.ID === ID) {
            displayName = country.Country;
            displayNewConfirm = country.NewConfirmed; 
            displayTotConfirm = country.TotalConfirmed;
            displayNewDeaths = country.NewDeaths;
            displayTotDeaths = country.TotalDeaths;
            displayNewRecov = country.NewRecovered;
            displayTotRecov = country.TotalRecovered;
            displayDateUp = country.Date;
        }
    })

    // Assigns the variables into their HTML elements
    disContainer = document.createElement('article');
    disContainer.setAttribute('id', displayName);

    disName = document.createElement('h3');
    disName.innerHTML = displayName;

    disNewConfirm = document.createElement('h4');
    disNewConfirm.innerHTML = `New Confirmed Cases: ${displayNewConfirm}`;

    disTotConfirm = document.createElement('h4');
    disTotConfirm.innerHTML = `Total Confirmed Cases: ${displayTotConfirm}`;

    disNewDeaths = document.createElement('h4');
    disNewDeaths.innerHTML = `New Confirmed Deaths: ${displayNewDeaths}`;

    disTotDeaths = document.createElement('h4');
    disTotDeaths.innerHTML = `Total Confirmed Deaths: ${displayTotDeaths}`;

    disNewRecov = document.createElement('h4');
    disNewRecov.innerHTML = `New Confirmed Recoveries: ${displayNewRecov}`;

    disTotRecov = document.createElement('h4');
    disTotRecov.innerHTML = `Total Confirmed Recoveries: ${displayTotRecov}`;

    disDateUp = document.createElement('h4');
    disDateUp.innerHTML = `Last Update: ${displayDateUp}`;


    // Modifies all the elements into a container
    disContainer.appendChild(disName);
    disContainer.appendChild(disNewConfirm);
    disContainer.appendChild(disTotConfirm);
    disContainer.appendChild(disNewDeaths);
    disContainer.appendChild(disTotDeaths);
    disContainer.appendChild(disNewRecov);
    disContainer.appendChild(disTotRecov);
    disContainer.appendChild(disDateUp);

    // puts the container on the page
    document.getElementById('display').appendChild(disContainer);
    // Makes the window jump to the country info that was selected
    window.location.href=`#${displayName}`;


})



