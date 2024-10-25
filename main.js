const Time = 3000
const button = document.getElementById("button")
const pointscounter = document.getElementById("points")
const upg1 = document.getElementById("upg1")
const upg1_price = document.getElementById("price")
const upg1_text = document.getElementById("upg-text1")
const upg1text = document.getElementById("upg1text")
const upg2 = document.getElementById("upg2")
const upg2_price = document.getElementById("price2")
const upg2text = document.getElementById("upg2text")
const upg3 = document.getElementById("upg3")
const upg3_price = document.getElementById("price3")
const upg4 = document.getElementById("upg4")
const gen2button = document.getElementById("gen2button")
const max_upg1 = document.getElementById("max_upg")
const maxupg2 = document.getElementById("max_upg2")
const maxupg3 = document.getElementById("max_upg3")
const token_counter = document.getElementById("tokens")
const upg5 = document.getElementById("upg5")
const upg6 = document.getElementById("upg6")
const upg7 = document.getElementById("upg7")
const energy_counter = document.getElementById("energy")
const points_counter = document.getElementById("points_counter")
const energy_before = document.getElementById("energy_before")
const points2 = document.getElementById("points2")
const pointsbefore2 = document.getElementById("points_before2")
const pps = document.getElementById("pps")
const tokens_counter = document.getElementById("tokens_counter")

const upgrades2 = document.getElementsByClassName("upgrades2")

const tabs = document.querySelectorAll('.tab_btn')
const all_content = document.querySelectorAll('.content')
const tab1 = document.getElementById('tab1')

tabs.forEach((tab, index)=> {

    tab.addEventListener("click", () => {
        tabs.forEach(tab=> {tab.classList.remove('active')})
        tab.classList.add('active')

        all_content.forEach(content=>{content.classList.remove('active')})
        all_content[index].classList.add('active')
    })
})


let points = 0;
let cooldown = 0;
let Upgrade1Price = 10
let Upgrade2Price = 20
let Upgrade3Price = 100
let Upgrade4Pirce = 25000
let Upgrade5Price = 10 // energy price
let Upgrade6Price = 500000
let Upgrade7Price = 150 // energy price
let addon = 0
let max_upg = 0 
let max_upg2 = 0
let max_upg3 = 0

let max_upg4 = 0

let token = 0
let energy = 0

let multi = 1
let upg5boost = 1

const gen2price = 30000

const gen2_unlocked = false

let upg5_unlocked = false
let upg6_unlocked = false
let upg7_unlocked = false

let pointspersecond = (1 + addon) * multi * upg5boost


if (gen2_unlocked == false) {

    upg4.disabled = true
    upg5.disabled = true

    upg4.style.display = "none" 
    upg5.style.display = "none" 
    upg6.style.display = "none"
    upg7.style.display = "none"
    energy_counter.style.display = "none"
    energy_before.style.display = "none"
    pointsbefore2.style.display = "none"
}

let addons = (1 + addon) * multi * upg5boost

pointscounter.textContent = `${points.toLocaleString()} points`
energy_counter.textContent = `${energy.toLocaleString()} energy`
token_counter.textContent = `Tokens: ${token}`
tokens_counter.textContent = `${token} Tokens`

function myFunction() {


    if (upg5_unlocked == true) {
        if (upg5boost > 1) {
            points = Math.ceil(points += (1 + addon) * multi * upg5boost)
        } else {
            points = Math.ceil(points += (1 + addon) * multi)
        }
    } else if (upg5_unlocked == false) {
        points = Math.ceil(points += (1 + addon) * multi)
    }
    console.log("clicked!")
    button.disabled = true
    pointscounter.textContent = `${points.toLocaleString()} points`
    points2.textContent = `${points.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} points`

    if (10 == Math.floor(Math.random() * 1000)) {
        token += 1
        token_counter.textContent = `Tokens: ${token}`
    }



    
    setTimeout(() => {
        button.removeAttribute("disabled")
    }, 1000 - cooldown);

}

button.addEventListener("click", myFunction) 
upg1.addEventListener("click", Upgrade1Function)
upg2.addEventListener("click", Upgrade2Function)
upg3.addEventListener("click", Upgrade3Function)
upg4.addEventListener("click", Uprgade4Function)
upg5.addEventListener("click", Upgrade5Function)
upg6.addEventListener('click', Upgrade6Function)
upg7.addEventListener('click', Upgrade7Function)

gen2button.addEventListener("click", Gen2Buy)

setInterval(() => {

    upg5boost = Math.round(2 * Math.log10(0.3 * energy + 1) * 10) / 10 + 1
    
    document.getElementById("energy5upgradeboostcounter").textContent = `Currently: ${upg5boost}x`
}, 10)

function Upgrade1Function() {



    if (points < Upgrade1Price) {
        return null
    } else if (points >=10) {

        } if (cooldown <= 900 ) {
            max_upg += 1
            console.log(max_upg)
            points -= Upgrade1Price
            
            
            cooldown += 100;
            pointscounter.textContent = `${points.toLocaleString()} points`
            points2.textContent = `${points.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} points`
    
            Upgrade1Price += 14
    
            upg1_price.textContent = `${Upgrade1Price} Points`;
            max_upg1.textContent =`${max_upg}/10`

            if (10 == Math.floor(Math.random() * 100)) {
                token += 1
                token_counter.textContent = `Tokens: ${token}`
            } else if (cooldown == 1000){
                upg1_text.textContent = `Maxed Out!`
                upg1_price.style.opacity = "0"
                max_upg1.style.opacity = "0"
                upg1text.style.opacity = "0"
                return null



        }

    }


}


function Upgrade2Function() {
    if (max_upg2 <= 24) {
        if (points < Upgrade2Price) {
            null
        } else if (points >= Upgrade2Price) {
            max_upg2 += 1
            points -= Upgrade2Price
            addon += 1
            pointscounter.textContent = `${points.toLocaleString()} points`
            points2.textContent = `${points.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} points`

            CalculatePriceForUpg2()

            Upgrade2Price = new_price_upg2

            upg2_price.textContent = `${Upgrade2Price} Points`
            maxupg2.textContent = `${max_upg2}/25`

            if (10 == Math.floor(Math.random() * 100)) {
                token += 1
                token_counter.textContent = `Tokens: ${token}`
            } else if (max_upg2 == 25) {
                upg2text.textContent = `Maxed Out!`
                upg2_price.style.opacity = "0"
                maxupg2.style.opacity = "0"
                document.getElementById("upg2desc").style.opacity = "0"
                return null
    
        }
    }

}

}

function CalculatePriceForUpg2() {
    new_price_upg2 = Math.ceil(20 + Upgrade2Price ** 1.03)
    console.log(new_price_upg2)
}

function Upgrade3Function() {

    if (max_upg3 <= 3) {
        if (points < Upgrade3Price) {
            return null
        } else if (points >= Upgrade3Price) {
            console.log(max_upg3)
            max_upg3 += 1
            multi += 1
            points -= Upgrade3Price
            pointscounter.textContent = `${points.toLocaleString()} points`
            points2.textContent = `${points.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} points`
            Upgrade3Price *= 10
            upg3_price.textContent = `${Upgrade3Price.toLocaleString()} Points`
            maxupg3.textContent = `${max_upg3}/3`

            if (10 == Math.floor(Math.random() * 100)) {
                token += 1
                token_counter.textContent = `Tokens: ${token}`
            } else if (max_upg3 == 3) {
                document.getElementById("upg3text").textContent = `Maxed Out!`
                document.getElementById("upg3desc").style.opacity = "0"
                upg3_price.style.opacity = "0"
                maxupg3.style.opacity = "0"
                return null 

        } }
    }
}

const millisecondsInterval = 10;
let pointspersec = 1;

const millisecondsInterval2 = 10;


function Uprgade4Function() {
        if (points < Upgrade4Pirce){
            null
        } else if (points >= Upgrade4Pirce) {
            points -= Upgrade4Pirce
            pointscounter.textContent = `${points.toLocaleString()} points`
            points2.textContent = `${points.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} points`

            document.getElementById("energyupg1max").textContent = "1/1"
            document.getElementById("energyupg4price").textContent = "Bought"

            if (10 == Math.floor(Math.random() * 100)) {
                token += 1
                token_counter.textContent = `Tokens: ${token}`
            }

            function AutoPoints () {

                if (upg7_unlocked == true) {
                    if (upg5_unlocked == true) {
                        pointspersec = (1 + addon) * multi * upg5boost * 1.8
                        pps.textContent = `(${((1 + addon) * multi * upg5boost * 1.8).toFixed(1)}/sec)`
                    } else if (upg5_unlocked == false) {
                        pointspersec = (1 + addon) * multi * 1.8
                        pps.textContent = `(${((1 + addon) * multi * 1.8).toFixed(1)}/sec)`
                    }
                } else if (upg7_unlocked == false) {
                    if (upg5_unlocked == true) {
                        pointspersec = (1 + addon) * multi * upg5boost
                        pps.textContent = `(${((1 + addon) * multi * upg5boost).toFixed(1)}/sec)`
                    } else if (upg5_unlocked == false) {
                        pointspersec = (1 + addon) * multi
                        pps.textContent = `(${((1 + addon) * multi).toFixed(1)}/sec)`
                    }
                }

                const pointspermilisecond = pointspersec / 1000 * millisecondsInterval
                points += pointspermilisecond
                pointscounter.textContent = `${points.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} points`
                points2.textContent = `${points.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} points`            }

    
            setInterval(AutoPoints, millisecondsInterval)

        }
} 

    

function Upgrade5Function() {
    if (energy < Upgrade5Price) {
        return null
    } else if (energy >= Upgrade5Price) {

        upg5_unlocked = true
    
        energy -= Upgrade5Price
        energy_counter.textContent = `${energy} energy`;

        document.getElementById("upg5maxupg").textContent = "1/1"
        document.getElementById("upg5price").textContent = "Bought!"

        upg5.disabled = true
    }
}

function Gen2Buy() {
    if (points < gen2price) {
        null
    } else if (points >= gen2price) {
        points -= gen2price
        pointscounter.textContent = `${points.toLocaleString()} points`
        gen2button.style.opacity = 0

        upg4.style.display = "inline" 
        upg5.style.display = "inline" 
        upg6.style.display = "inline"
        upg7.style.display = "inline"
        energy_counter.style.display = "inline"
        energy_before.style.display = "inline"
        points_before2.style.display = "block"
        

        upg4.disabled = false
        upg5.disabled = false


        points2.textContent = `${points.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} points`
        GetEnergy()
    

    }
}

function GetEnergy() {
    setInterval(() => {

        energy += 0.1
        energy_counter.textContent = `${energy.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1})} energy`

    }, 1000)
}


let energypersec = 0;

function Upgrade6Function() {
    if (points >= Upgrade6Price) {
        points -= Upgrade6Price;
        points2.textContent = `${points.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} points`
        pointscounter.textContent = `${points.toLocaleString()} points`

        document.getElementById("upg6maxupg").textContent = `1/1`
        document.getElementById("upg6price").textContent = "Bought!"

        upg6_unlocked = true

        function AutoEnergy () {

            energypersec = 1

            const energyspermilisecond = energypersec / 1000 * millisecondsInterval
            energy += energyspermilisecond
            energy_counter.textContent = `${energy.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1})} energy`}

        

        setInterval(AutoEnergy, millisecondsInterval)

        upg6.disaled = true
    } else if (points < Upgrade6Price) {
        return null
    }
}

function Upgrade7Function() {
    if(energy < 150) {
        return null 
    } else if (energy >= 150) {
        energy -= 150
        energy_counter.textContent = `${energy.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1})} energy`}
        upg7_unlocked = true
    }
