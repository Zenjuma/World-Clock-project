// const cities = [ "Abuja",
// "Accra";
// "Addis Ababa",
// "Algiers",
// "Amman",
// "Amsterdam" ,
// "Andorra la Vella" ,
// "Ankara" ,
// "Antananarivo" ,
// "Apia" ,
// "Ashgabat" ,
// "Asmara" ,
// "Astana" ,
// "Asunción" ,
// "Athens" ,
// "Baghdad" ,
// "Baku" ,
// "Bamako" ,
// "Bandar Seri Begawan" ,
// "Bangkok" ,
// "Bangui" ,
// "Banjul" ,
// "Basseterre" ,
// "Beijing" ,
// "Beirut" ,
// "Belgrade" ,
// "Belmopan" ,
// "Berlin" ,
// "Bern" ,
// "Bishkek" ,
// "Bissau" ,
// "Bogotá" ,
// "Brasília" ,
// "Bratislava" ,
// "Brazzaville" ,
// "Bridgetown" ,
// "Brussels" ,
// "Bucharest" ,
// "Budapest" ,
// "Buenos Aires" ,
// "Bujumbura (former, now Gitega)" ,
// "Cairo" ,
// "Canberra" ,
// "Caracas" ,
// "Castries" ,
// "Chisinau" ,
// "Colombo (executive), Sri Jayawardenepura Kotte (legislative)" ,
// "Conakry" ,
// "Copenhagen" ,
// "Cuidad de México (Mexico City)" ,
// "Dakar " ,
// "Damascus " ,
// "Dhaka" ,
// "Dili" ,
// "Djibouti" ,
// "Dodoma" ,
// "Doha" ,
// "Dushanbe" ,
// "Freetown " ,
// "Funafuti" ,
// "Georgetown" ,
// "Gitega" ,
// "Guatemala City" ,
// "Hanoi" ,
// "Harare" ,
// "Havana" ,
// "Helsinki" ,
// "Honiara " ,
// "Islamabad" ,
// "Jakarta" ,
// "Jamestown (Saint Helena)" ,
// "Juba" ,
// "Kabul" ,
// "Kampala" ,
// "Kathmandu" ,
// "Khartoum" ,
// "Kigali" ,
// "Kingstown" ,
// "Kinshasa" ,
// "Kuala Lumpur" ,
// "Kuwait City" ,
// "La Paz" ,
// "Libreville" ,
// "Lilongwe" ,
// "Lima" ,
// "Lisbon" ,
// "Ljubljana" ,
// "Lomé" ,
// "London" ,
// "Luanda" ,
// "Lusaka" ,
// "Luxembourg" ,
// "Madrid" ,
// "Majuro" ,
// "Malabo" ,
// "Malé" ,
// "Manila" ,
// "Maputo" ,
// "Maseru" ,
// "Mbabane" ,
// "Mexico City" ,
// "Minsk" ,
// "Mogadishu " ,
// "Monaco" ,
// "Monrovia" ,
// "Montevideo" ,
// "Moroni" ,
// "Moscow" ,
// "Muscat " ,
// "N'Djamena" ,
// "Nairobi" ,
// "Nassau" ,
// "Naypyidaw" ,
// "Ngerulmud" ,
// "Niamey" ,
// "Nicosia" ,
// "Nouakchott" ,
// "Nukuʻalofa" ,
// "Nur-Sultan (Astana)",
// "Nuuk",
// "Oslo" ,
// "Ottawa" ,
// "Palikir" ,
// "Panama City" ,
// "Paris" ,
// "Paramaribo" ,
// "Phnom Penh" ,
// "Podgorica" ,
// "Port Louis" ,
// "Port Moresby" ,
// "Port-au-Prince" ,
// "Port of Spain " ,
// "Porto-Novo" ,
// "Prague" ,
// "Pretoria" ,
// "Quito" ,
// "Rabat" ,
// "Reykjavik" ,
// "Riga",
// "Riyadh" ,
// "Rome" ,
// "San José" ,
// "San Marino" ,
// "Sana'a" ,
// "Santiago" ,
// "Santo Domingo",
// "Sarajevo",
// "Seoul",
// "Singapore" ,
// "Skopje" ,
// "Sofia" ,
// "South Tarawa" ,
// "Stockholm" ,
// "Sucre (constitutional)" ,
// "Suva" ,
// "Tashkent" ,
// "Tbilisi" ,
// "Tehran" ,
// "Thimphu" ,
// "Tiranë (Tirana)" ,
// "Tokyo" ,
// "Torshavn" ,
// "Tripoli" ,
// "Tskhinvali",
// "Tunis" ,
// "Ulaanbaatar" ,
// "Valletta" ,
// "Vaduz" ,
// "Vatican City" ,
// "Victoria" ,
// "Vienna" ,
// "Vientiane" ,
// "Vilnius" ,
// "Warsaw" ,
// "Washington" ,
// "Wellington" ,
// "Windhoek" ,
// "Yaoundé" ,
// "Yamoussoukro" ,
// "Yerevan " , 
// "Zagreb" 
// ];


// function filterCities() {
//     const input = document.getElementById('citySearch').value.toLowerCase();
//     const dropdown = document.getElementById('dropdown');
//     dropdown.innerHTML = '';

//     if (input.length === 0) return;

//     const filtered = cities.filter(city => city.toLowerCase().includes(input));
//     filtered.forEach(city => {
//       const div = document.createElement('div');
//       div.textContent = city;
//       div.onclick = () => {
//         document.getElementById('citySearch').value = city;
//         dropdown.innerHTML = '';
//       };
//       dropdown.appendChild(div);
//     });
//   }
//   // ];

  // const input = document.getElementById("inputSearch");
  // const suggestions = document.getElementById("suggestions");
  // input.addEventListener("input", function () {
  //   const query = this.value.toLowerCase();
  //   suggestions.innerHTML = "";
  //   if (query) {
  //     const filtered = countries.filter(country => country.toLowerCase().startsWith(query));
  //     filtered.forEach(country => {
  //       const div = document.createElement("div");
  //       div.classList.add("suggestion-item");
  //       div.textContent = country;
  //       div.addEventListener("click", function () {
  //         input.value = country;
  //         suggestions.style.display = "none";
  //       });
  //       suggestions.appendChild(div);
  //     });
  //     suggestions.style.display = filtered.length ? "block" : "none";
  //   } else {
  //     suggestions.style.display = "none";
  //   }
  // });

  // document.addEventListener("click", function (e) {
  //   if (e.target !== input) {
  //     suggestions.style.display = "none";
  //   }
  // });


  // //Api stori
  // // document.getElementById("seach-button").addEventListener("click", 
    
  //   async function getinfo() {

  // var inputSearch =document.getElementById("inputSearch").value;
  // var imgweather =document.getElementById("cimg");
  // var location =document.getElementById("location");
  // var time =document.getElementById("time");

  // // var location =document.getElementById("location");
  // // var time =document.getElementById("cimg");




  // const apiKey = "37a745caaac041f5a1754507251205";
  // const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputSearch}`;

  // try{
  
  //     const response = await fetch(url);
  //     const data = await response.json();

  //     if (data.error) {
  //       document.getElementById("result").innerHTML = `<p>Error: ${data.error.message}</p>`;
  //     } else {


  //       const lo = data.location.name + ", " + data.location.country;
  //       const localtime = data.location.localtime;
  //       const temp = data.current.temp_c + "°C";
  //       const condition = data.current.condition.text;

  //       location.innerHTML=lo
  //       time.innerHTML=localtime
  //       alert(condition,temp)


  //     }
  //   } catch (error) {
  //     document.getElementById("result").innerHTML = `<p>Failed to fetch data. Please try again.</p>`;
  //   }
  // }




 

// window.onload = () => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(successLocation, errorLocation);
//   } else {
//     alert("Geolocation not supported");
//   }
// };

// function successLocation(position) {
//   const lat = position.coords.latitude;
//   const lon = position.coords.longitude;

//   getCity(lat, lon);
//   getTime(lat, lon);
//   getWeather(lat, lon);
// }

// function errorLocation() {
//   document.getElementById("cityName").textContent = "Location access denied";
// }

// // 1. Get City Name
// function getCity(lat, lon) {
//   fetch ('https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputSearch}')
//     .then(res => res.json())
//     .then(data => {
//       const city = data.results[0].components.city ||
//                    data.results[0].components.town ||
//                    data.results[0].components.state ||
//                    "Unknown city";
//       document.getElementById("cityName").textContent = city;
//     })
//     .catch(() => {
//       document.getElementById("cityName").textContent = "Could not detect city";
//     });
// }

// // 2. Get Time (using WorldTimeAPI)
// function getTime(lat, lon) {
//   const apiKey = "YOUR_TIMEZONEDB_API_KEY"; // Replace with your real key
//   const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputSearch}`;

//   fetch(url)
//     .then(res => {
//       if (!res.ok) {
//         throw new Error(`Error ${res.status}`);
//       }
//       return res.json();
//     })
//     .then(data => {
//       const time = data.formatted.split(' ')[1]; // Get only the time (HH:MM:SS)
//       document.querySelector('.time').textContent = `Time: ${time}`;
//     })
//     .catch(error => {
//       console.error("Time API error:", error.message);
//       document.querySelector('.time').textContent = "Time unavailable";
//     });
// }


// // 3. Get Weather (using OpenWeatherMap)
// function getWeather(lat, lon) {
//   const key = 'YOUR_OPENWEATHERMAP_API_KEY';
//   fetch('https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputSearch}')
//     .then(res => res.json())
//     .then(data => {
//       const temp = data.main.temp;
//       const description = data.weather[0].description;
//       document.querySelector('.time').textContent = `Time: ${time}`;
//     })
//     .catch(() => {
//       document.querySelector('.weather').textContent = "Weather unavailable";
//     });
// }




// 


// const cities=[
//   "Abu Dhabi" , "Accra" , "Adis Ababa" , "Ankara" ,"Antananarivo", "Athens"
// ]
  
// function filterCities(){
//   const input= document.getElementById('citySearch').value.toLowerCase();
//   const dropdown=document.getElementById("dropdown");
//   dropdown.innerHTML = '';
//    if (input.length === 0) return;

//     const filtered = cities.filter(city => city.toLowerCase().includes(input));
//        filtered.forEach(city => {
//        const div = document.createElement('div')
//               div.textContent = city;
//      div.onclick = () => {
//          document.getElementById('citySearch').value = city;
//          dropdown.innerHTML = '';
//       };
//       dropdown.appendChild(div);
//      });
//    }
 
