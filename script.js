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
