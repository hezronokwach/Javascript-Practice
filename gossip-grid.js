export function grid() {
    let allChange = document.createElement('div')
    allChange.className = 'ranges'
    let width = document.createElement('input')
    width.className = 'range'
    width.id = 'width'
    width.type = 'range'
    width.value = ''
    width.min = '200'
    width.max = '800'
    width.addEventListener('input', function () {
        let gos = document.querySelectorAll('.gossip')
        gos.forEach(e => {
            e.style.width = width.value + 'px'
        })
    })

    let fontSize = document.createElement('input')
    fontSize.className = 'range'
    fontSize.id = 'fontSize'
    fontSize.type = 'range'
    fontSize.min = '20'
    fontSize.max = '40'
    fontSize.value = ''
    fontSize.addEventListener('input', function () {
        let gos = document.querySelectorAll('.gossip')
        gos.forEach(e => {
            e.style.fontSize = fontSize.value + 'px'
        })
    })

    let background = document.createElement('input')
    background.className = 'range'
    background.id = 'background'
    background.type = 'range'
    background.min = '20'
    background.max = '75'
    background.value = ''
    background.addEventListener('input', function () {
        let gos = document.querySelectorAll('.gossip')
        gos.forEach(e => {
            e.style.background = " hsl(280, 50%," + background.value + "%)"
        })
        console.log(background.value)
    })

    allChange.appendChild(width)
    allChange.appendChild(fontSize)
    allChange.appendChild(background)
    document.body.appendChild(allChange)

    let share = document.createElement("form")
    share.className = "gossip"
    document.body.appendChild(share)
    let textarea = document.createElement("textarea")
    textarea.setAttribute("placeholder", "Got a gossip to share?")
    share.appendChild(textarea)
    let button = document.createElement("button")
    button.innerHTML = "Share gossip!"
    share.appendChild(button)
    button.addEventListener("click", function () {
        let val = textarea.value
        let goss1 = document.createElement('div')
        goss1.className = "gossip"
        goss1.textContent = val
        document.body.insertBefore(goss1, document.querySelectorAll('.gossip')[1])
        textarea.value = ""
        event.preventDefault()
    })
    addGross(gossips)


}
function addGross(goss) {
    goss.forEach(elem => {
        let goss = document.createElement('div')
        goss.className = "gossip"
        goss.innerHTML = elem
        document.body.appendChild(goss)
    })
}

export const gossips = [
    `Oasis star Noel Gallagher used to gorge on Greggs pastries and donuts every day`,
    `Lea Michele's lookalike Monica Moskatow says Glee star called her ugly`,
    `WE PAY FOR JUICY INFO!`,
    `Trainer to Hollywood's biggest stars reveals how to get an A-list body`,
    `Ed Sheeran comes out of music retirement to write brand new song`,
    `Kylie Jenner & Travis Scott’s breakup timeline`,
    `Quiet on the set: temper tantrums stars hope you forget`,
    `The style & grace of Chloë Grace Moretz: her top 20 red carpet looks`,
    `Paulina Porizkova feels betrayed after being cut out of husband Ric Ocasek's will`,
    `From too hot to not: Paris Hilton and Chris Zylka's relationship history`,
    `No bite in the big apple? Celine Dion looks scary skinny in New York`,
    `Jennifer Aniston and Brad Pitt relationship timeline`,
    `They shouldn’t have said that: 10 celebrity rants heard around the world`,
    `The most intense celebrity fights on set`,
    `The 18 most bitter real housewives feuds`,
    `Tristan Thompson's remarkable transformation from skinny teen to hulking NBA ace`,
    `Kim Kardashian 'considers leaving home' with Kanye West to 'save marriage'`,
]
