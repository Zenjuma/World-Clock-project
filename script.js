function performSearch() {
    const query = document.getElementById('searchInput').value;
    alert("performing; " + query);

    function dimIcon(){
        document.getElementById("searchIcon").classList.add("dimmed");
    }

    let allCities = [];

fetch('cities.json')
  .then(res => res.json())
  .then(data => {
    allCities = data;
  });

function showAllCities() {
  const cityList = document.getElementById('cityList');
  cityList.innerHTML = ''; // Clear previous

  allCities.forEach(city => {
    const li = document.createElement('li');
    li.textContent = city;
    li.onclick = () => {
      document.getElementById('searchInput').value = city;
      cityList.classList.add('hidden');
    };
    cityList.appendChild(li);
  });

  cityList.classList.remove('hidden');
}

// Hide when clicking outside
document.addEventListener('click', function (e) {
  if (!e.target.closest('#searchInput')) {
    document.getElementById('cityList').classList.add('hidden');
  }
});
}