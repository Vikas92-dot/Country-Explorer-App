function DiscoverMap(){
    let mainBody = document.getElementById("main-body");
    let image = document.createElement("img");
    image.src ='./images/travel_cleanup (1).jpg';
    image.setAttribute("style","height: 100vh; width:100vw;");

    mainBody.style.backgroundColor = 'white';
    mainBody.style.padding = 0;
    mainBody.style.margin = 0;
    mainBody.style.boxSizing = 'border-box'; 

    
    let h1 = document.createElement("h1");
    h1.innerText = "Explore the Amazing Country";
    h1.setAttribute("style","position:absolute; left:30%; margin-top:10%;font-size: 400%;");
    

    let mainDiv = document.getElementById("main-div");
    mainDiv.setAttribute("id","main-div");
    mainDiv.setAttribute("style","height:665px; width:100%;");

    let searchDiv = document.createElement('div');
    searchDiv.setAttribute("style","background-color: rgba(0,0,0,0.5); padding: 5px; height:13%; width:60%; position: absolute; top: 40%; left: 36%; border: 1px solid black;");


    let searchWrapper = document.createElement("div");
    searchWrapper.setAttribute("style","display:grid; grid-template-columns: 9fr 3fr; gap:1.25em; position:relative; top:20%; margin-left:2%; margin-right:2%; height:60%;");

    let searchBar = document.createElement("input");
    searchBar.setAttribute("placeholder","Enter a Country name...");
    searchBar.setAttribute("id","country-inp");

    searchBar.setAttribute("style","font-size: 100%; padding: 0 0.62em; color:#222a43; padding:10px; border:1px solid white;");

        // Country list in JS file
    countryList = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia",
        "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
        "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
        "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad",
        "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Congo (Democratic Republic of the Congo)",
        "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Denmark", "Djibouti", "Dominica",
        "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini",
        "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada",
        "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia",
        "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
        "Korea (North)", "Korea (South)", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia",
        "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali",
        "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia",
        "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
        "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
        "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
        "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
        "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan",
        "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
        "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ];

    // Create a container for the country suggestions
    let suggestionsContainer = document.createElement("div");
    suggestionsContainer.setAttribute("id", "suggestions-container");
    suggestionsContainer.setAttribute("style", "position: absolute; top: 65%; left: 2.5%; width: 60%; background: white; border: 1px solid #ccc; max-height: 200px; overflow-y: auto; display: none; z-index: 10;");
    searchDiv.appendChild(suggestionsContainer);

    // Function to display suggestions
    function showSuggestions(query) {
        suggestionsContainer.innerHTML = ''; // Clear previous suggestions
        if (!query) {
            suggestionsContainer.style.display = 'none';
            return;
        }
        suggestionsContainer.style.display = 'block';
        const filteredCountries = countryList.filter(country => country.toLowerCase().includes(query.toLowerCase()));
        filteredCountries.forEach(country => {
            let suggestionItem = document.createElement("div");
            suggestionItem.innerText = country;
            suggestionItem.setAttribute("style", "padding: 8px; cursor: pointer; border-bottom: 1px solid #ddd;");
            suggestionItem.addEventListener("click", function () {
                searchBar.value = country;
                suggestionsContainer.style.display = 'none'; // Hide suggestions after selection
            });
            suggestionsContainer.appendChild(suggestionItem);
        });
    }

    // Add an event listener to the search bar
    searchBar.addEventListener("input", function () {
        showSuggestions(searchBar.value.trim());
    });
    let searchButton = document.createElement("button");
    searchButton.setAttribute("style","font-size: 100%; background-color: #3d64e6; color: white; padding:10px; border:1px solid white;");
    searchButton.innerText = "Search";

    searchButton.addEventListener("click", function(){
        if (!searchBar.value) {
            alert("Please Enter Country Name.");
            return;
            }
        ResultPage();
    });
    

    function ResultPage(){
    let mainBody = document.querySelector("#main-body");
    let mainDiv = document.querySelector("#main-div");
    
    mainBody.removeChild(mainDiv);
    let result = document.createElement('div');
    result.setAttribute("id","result-div");
    result.setAttribute("style", "padding:10px; border-radius:10px; background-color:white; width:100%;");

    let fulldiv = document.createElement("div");
    fulldiv.setAttribute("style"," display:flex; justify-content:center; width:100%;");
    fulldiv.setAttribute("id","fulldiv");
    

    let div1 = document.createElement("div");
    div1.setAttribute("style"," width:36%; height:251px; align-items:center; display:flex;");
    div1.setAttribute("id","div1");

    let div2 = document.createElement("div");
    div2.setAttribute("style","font-size:21px; width:50%; margin-left:66px;");
    div2.setAttribute("id","div2");


    let countryName = searchBar.value.trim();
    if (!countryName) {
    result.innerHTML = '<p>Please enter a country name.</p>';
        return; 
    }
    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
     
        fetch(finalUrl)
    
                .then((response) => response.json())
                .then((data) => { 
                    if (data.length > 0) {
                        let countryData = data[0];
                        let flagImg = document.createElement('img');
                        flagImg.src = countryData.flags.svg;
                        flagImg.setAttribute("style", "display: block; width:80%; min-width: 7.5em; margin-left: 10px; box-shadow: 0px 0px 10px grey;");
                        result.innerHTML = '';
                        result.innerHTML +=`<h1>Country: ${countryName}</h1>`;
                        div1.appendChild(flagImg);
                        
                        div2.innerHTML += `<p><b>Capital</b>: ${countryData.capital[0]}</p>`;
                        div2.innerHTML += `<p><b>Region</b>: ${countryData.continents[0]}</p>`;
                        div2.innerHTML += `<p><b>Currency</b>: ${Object.keys(countryData.currencies)[0]} - ${countryData.currencies[Object.keys(countryData.currencies)].name} - ${countryData.currencies[Object.keys(countryData.currencies)].symbol}</p>`;
                        div2.innerHTML += `<p><b>Languages</b>: ${Object.values(countryData.languages).join(", ")}</p>`;
                        
                        if (countryData.borders) {
                            div2.innerHTML += `<p><b>Borders</b>: ${countryData.borders.join(", ")}</p>`;
                        }
                        
                        fulldiv.appendChild(div1);
                        fulldiv.appendChild(div2);
                        result.appendChild(fulldiv);
                        
                        if (countryData.latlng && countryData.latlng.length === 2) {
                            let [lat, lng] = countryData.latlng;
                            result.innerHTML += `<h3>Map</h3>`;
                            let mapContainer = document.createElement('div');
                            mapContainer.setAttribute('id', 'map');
                            mapContainer.setAttribute('style', 'height: 300px; width: 100%;');
                            result.appendChild(mapContainer);
        
                            
                            let map = L.map(mapContainer).setView([lat, lng], 4);
        
                            
                            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        
                            
                            L.marker([lat, lng]).addTo(map)
                                .bindPopup(`<b>${countryName}</b>`)
                                .openPopup();
                        }
                        
                        
                    } else {
                        result.innerHTML = '<p>No data found.</p>';
                    }
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                    result.innerHTML = '<p>Error retrieving country data.</p>';
                });
        let home = document.createElement("button");
        home.innerText = "Home";
        home.setAttribute("id","home-btn");
        home.addEventListener("click", function(){
            Home();
        });


        
        
        //mainBody.appendChild(home);
        mainBody.appendChild(result);
        
    }
    function Home(){
        let mainBody = document.getElementById("main-body");
        let mainDiv = document.querySelector("#main-div");
        let result = document.querySelector("#result-div");
        let home = document.getElementById("home-btn");
        
        mainBody.removeChild(result);
        mainBody.removeChild(home);
        mainBody.appendChild(mainDiv);
          
              
    }
    
    searchWrapper.appendChild(searchBar);
    searchWrapper.appendChild(searchButton);
    
    searchDiv.appendChild(searchWrapper);
    
    mainDiv.appendChild(searchDiv);
    mainBody.appendChild(mainDiv);
    
    mainDiv.appendChild(h1);
    mainDiv.appendChild(image);
    autocomplete(searchBar, countries);
}
