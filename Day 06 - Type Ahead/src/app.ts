"use strict";

const endPoint =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

interface ICities {
    city: string;
    growth_from_2000_to_2013: string;
    latitude: number;
    longitude: number;
    population: string;
    rank: string;
    state: string;
}

const cities: ICities[] = [];

fetch(endPoint)
    .then((res) => res.json())
    .then((data) => cities.push(...data));

function findMatch(wordToMatch: string, cities: ICities[]) {
    if (wordToMatch) {
        return cities.filter((place) => {
            const matchRegex = new RegExp(wordToMatch, "gi");
            return (
                place.city.match(matchRegex) || place.state.match(matchRegex)
            );
        });
    } else {
        return [];
    }
}

function numberWithCommas(population: string) {
    return population.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatch(this: HTMLInputElement) {
    const matchedCities = findMatch(this.value, cities);
    const html = matchedCities
        .map((place) => {
            const matchLetter = new RegExp(this.value, "gi");
            const cityName = place.city.replace(
                matchLetter,
                `<span class="hl">${this.value}</span>`
            );
            const stateName = place.state.replace(
                matchLetter,
                `<span class="hl">${this.value}</span>`
            );
            return `<li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(
                place.population
            )}</span>
        <li>`;
        })
        .join("");

    suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search") as HTMLInputElement;
const suggestions = document.querySelector(".suggestions") as HTMLUListElement;

searchInput.addEventListener("change", displayMatch);
searchInput.addEventListener("keyup", displayMatch);
