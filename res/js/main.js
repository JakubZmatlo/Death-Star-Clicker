const cookie = document.getElementById("deathstar");
const counter = document.getElementById("counter");
const upgrade1Text = document.getElementById("upgrade1Text");
const upgrade2Text = document.getElementById("upgrade2Text");
const upgrade3Text = document.getElementById("upgrade3Text");
const upgrade4Text = document.getElementById("upgrade4Text");
const clickUpgrade = document.getElementById("clickUpgrade");
const autoclickUpgrade = document.getElementById("autoclickUpgrade");
const autoclick2Upgrade = document.getElementById("autoclick2Upgrade");
const autoclick3Upgrade = document.getElementById("autoclick3Upgrade");
const shop = document.getElementById("shop");

let numberOfCookies = 0;
let costOfClickUpgrade = 20;
let costOfClickUpgradeIncrease = 1;
let autoclickIncrese = 0;
let autoclicker;
let autoclickerCost = 500;
let autoclick2Increse = 0;
let autoclicker2;
let autoclicker2Cost = 5000;
let autoclick3Increse = 0;
let autoclicker3;
let autoclicker3Cost = 50000;

autoclickUpgrade.onclick = () => {
    if (numberOfCookies >= autoclickerCost) {
        //odecist susenky
        numberOfCookies -= autoclickerCost;
        autoclickerCost *= 2;
        upgrade2Text.innerText = "Buy Podracer: " + autoclickerCost;
        //numberOf Cookies = numberOf Cookies - 100
        //aktualizovat odstavec se susenkama
        counter.innerText =  "Hits: " + numberOfCookies;
        autoclickIncrese++;
        //clear
        clearInterval(autoclicker)
        //spustit interval 
        autoclicker = setInterval(() => {
            //zvednout o nejake cislo
            numberOfCookies += autoclickIncrese
            //aktualizovat odstavec
            counter.innerText = "Hits: " + numberOfCookies;
            updateInfo();
        }, 1000);
    }
}

autoclick2Upgrade.onclick = () => {
    if (numberOfCookies >= autoclicker2Cost) {
        //odecist susenky
        numberOfCookies -= autoclicker2Cost;
        autoclicker2Cost *= 2;
        upgrade3Text.innerText = "Buy X-Wing: " + autoclicker2Cost;
        //numberOf Cookies = numberOf Cookies - 100
        //aktualizovat odstavec se susenkama
        counter.innerText =  "Hits: " + numberOfCookies;
        autoclick2Increse++;
        //clear
        clearInterval(autoclicker2)
        //spustit interval 
        autoclicker2 = setInterval(() => {
            //zvednout o nejake cislo
            numberOfCookies += autoclick2Increse
            //aktualizovat odstavec
            counter.innerText = "Hits: " + numberOfCookies;
            updateInfo();
        }, 500);
    }
}


autoclick3Upgrade.onclick = () => {
    if (numberOfCookies >= autoclicker3Cost) {
        //odecist susenky
        numberOfCookies -= autoclicker3Cost;
        autoclicker3Cost *= 2;
        upgrade4Text.innerText = "Buy Millennium Falcon: " + autoclicker3Cost;
        //numberOf Cookies = numberOf Cookies - 100
        //aktualizovat odstavec se susenkama
        counter.innerText =  "Hits: " + numberOfCookies;
        autoclick3Increse++;
        //clear
        clearInterval(autoclicker)
        //spustit interval 
        autoclicker = setInterval(() => {
            //zvednout o nejake cislo
            numberOfCookies += autoclick3Increse
            //aktualizovat odstavec
            counter.innerText = "Hits: " + numberOfCookies;
            updateInfo();
        }, 250);
    }
}

// {} - scope
cookie.onclick = () => {
    console.log("click");
    //numberOfCookies = numberOfCookies + 1;
    //numberOfCookies += 1;
    // ++ inkrement
    numberOfCookies +=costOfClickUpgradeIncrease;
    console.log(numberOfCookies);
    counter.innerHTML = "Hits: " + numberOfCookies;
};

const costOfClickUpgradeFunction = () => {
    if (numberOfCookies >= costOfClickUpgrade) {
        //Odecteme cenu upgradu 
        // pocet susenek a odectu 20
        costOfClickUpgrade += 0;
        upgrade1Text.innerText = "Buy Lightsaber: " + costOfClickUpgrade;
        numberOfCookies -= costOfClickUpgrade;
        //aktualizace odstavce 
        counter.innerText = "Hits: " + numberOfCookies;
        costOfClickUpgrade *= 2;
        //Zvedneme pocet susenek na kliknuti
        costOfClickUpgradeIncrease++;
    }
};

clickUpgrade.onclick = costOfClickUpgradeFunction



function cheats1 () {
    numberOfCookies += 2000000;
    counter.innerText = "Hits " + numberOfCookies;
}