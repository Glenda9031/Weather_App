// Weather App JavaScript

// Global state
let weatherData = null;
let units = 'metric'; // 'metric' for Celsius, 'imperial' for Fahrenheit
let precipitationUnit = 'mm'; // 'mm' for millimeters, 'in' for inches
let selectedDay = 0;
let isLoading = false;

// DOM Elements
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const suggestions = document.getElementById('suggestions');
const errorMessage = document.getElementById('errorMessage');
const weatherContent = document.getElementById('weatherContent');
const unitsButton = document.getElementById('unitsButton');
const unitsDropdown = document.getElementById('unitsDropdown');

// Weather Display Elements
const locationName = document.getElementById('locationName');
const locationDate = document.getElementById('locationDate');
const weatherIcon = document.getElementById('weatherIcon');
const currentTemp = document.getElementById('currentTemp');
const weatherCondition = document.getElementById('weatherCondition');
const feelsLike = document.getElementById('feelsLike');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const precipitation = document.getElementById('precipitation');
const dailyForecastGrid = document.getElementById('dailyForecastGrid');
const hourlyForecastList = document.getElementById('hourlyForecastList');
const daySelector = document.getElementById('daySelector');

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    // Load default location weather
    handleSearch('Lagos');
});

function initializeEventListeners() {
    // Search form
    searchForm.addEventListener('submit', handleSearchSubmit);
    // searchInput.addEventListener('input', handleSearchInput);
    searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    if (query.length > 2) {
            showSuggestions(query);
        } else {
            hideSuggestions();
        }
    });

    // Units toggle
    unitsButton.addEventListener('click', toggleUnitsDropdown);
    // Day selector
    daySelector.addEventListener('change', handleDaySelect);

    // Units buttons
    const unitBtns = document.querySelectorAll('.unit-btn'),
    unitBtns.forEach(btn => {
        btn.addEventListener('click', handleUnitChange);
    });

    // Close dropdowns when clicking outside
     document.addEventListener('click', function(e) {
        if (!unitsButton.contains(e.target) && !unitsDropdown.contains(e.target)) {
            closeUnitsDropdown();
        }
        if (!suggestions.contains(e.target) && !searchInput.contains(e.target)) {
            hideSuggestions();
        }
    });
}

function handleSearchSubmit(e) {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (query) {
        handleSearch(query);
        hideSuggestions();
    }
}

function handleSearchInput(e) {
    const query = e.target.value.trim();

    if (query.length > 2) {
        showMuckSuggestions(query);
    } else {
        hideSuggestions();
    }
}

// Fetch and display location suggestions
async function showSuggestions(query) {
    if (!query.trim()) {
        hideSuggestions();
        return;
    }
}

try {
    // Fetch suggestions from Open Meteo decoding API
    const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=5&language=en&format=json`
    );
    const data = await response.json();

    suggestions.innerHTML = '';

    if (!data.results || data.results.length === 0) {
        hideSuggestions();
        return;
    }

}


