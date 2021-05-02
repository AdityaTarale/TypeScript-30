'use strict';

interface IInventers {
    first: string;
    last: string;
    year: number;
    passed: number;
}

const inventers: IInventers[] = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

//Array.protoype.filer()
//1.Filter the list of inventers for those who where born in the 1500's

const fifteen = inventers.filter((inventer: IInventers): boolean => {
    return inventer.year >= 1500 && inventer.year <= 1600;
});

console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const fullName: string[] = inventers.map((inventer: IInventers) => {
    return `${inventer.first} ${inventer.last}`;
});

console.table(fullName);

// Array.prototype.sort()
// 3. Sort the inventors by birth date, oldest to youngest

const ordered = inventers.sort((a: IInventers, b: IInventers): 1 | -1 => {
    return a.year < b.year ? -1 : 1;
});

console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const totalYears = inventers.reduce(
    (years: number, inventer: IInventers) =>
        years + (inventer.passed - inventer.year),
    0
);

console.log(totalYears);

// 5. Sort the inventors by years lived

const oldest = inventers.sort((a: IInventers, b: IInventers): 1 | -1 => {
    const lastInvernter = a.passed - a.year;
    const nextInventer = b.passed - b.year;

    return lastInvernter > nextInventer ? -1 : 1;
});

console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const wiki = document.querySelector(".mw-category");
// const links = [...wiki.querySelectorAll("a")]; //converting nodelist into array using spread or we can use Array.from()
// const filteredContent = links.map(link=>(link.textContent)).filter(link=>link.includes('de'))

const people: string[] = [
    'Bernhard, Sandra',
    'Bethea, Erin',
    'Becker, Carl',
    'Bentsen, Lloyd',
    'Beckett, Samuel',
    'Blake, William',
    'Berger, Ric',
    'Beddoes, Mick',
    'Beethoven, Ludwig',
    'Belloc, Hilaire',
    'Begin, Menachem',
    'Bellow, Saul',
    'Benchley, Robert',
    'Blair, Robert',
    'Benenson, Peter',
    'Benjamin, Walter',
    'Berlin, Irving',
    'Benn, Tony',
    'Benson, Leana',
    'Bent, Silas',
    'Berle, Milton',
    'Berry, Halle',
    'Biko, Steve',
    'Beck, Glenn',
    'Bergman, Ingmar',
    'Black, Elk',
    'Berio, Luciano',
    'Berne, Eric',
    'Berra, Yogi',
    'Berry, Wendell',
    'Bevan, Aneurin',
    'Ben-Gurion, David',
    'Bevel, Ken',
    'Biden, Joseph',
    'Bennington, Chester',
    'Bierce, Ambrose',
    'Billings, Josh',
    'Birrell, Augustine',
    'Blair, Tony',
    'Beecher, Henry',
    'Biondo, Frank',
];

// 7. sort Exercise
// Sort the people alphabetically by last name

const sortedByLastName = people.sort((a: string, b: string): 1 | -1 => {
    const [alast, afirst] = a.split(', ');
    const [blast, bfirst] = b.split(', ');

    return alast > blast ? 1 : -1;
});

console.table(sortedByLastName);

const data: string[] = [
    'car',
    'car',
    'truck',
    'truck',
    'bike',
    'walk',
    'car',
    'van',
    'bike',
    'walk',
    'car',
    'van',
    'car',
    'truck',
    'driver',
];

// 8. Reduce Exercise
// Sum up the instances of each of these

interface ITransportation {
    [key: string]: number;
}

const transportation = data.reduce((obj: ITransportation, item: string) => {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.log(transportation);
