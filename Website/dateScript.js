//document.getElementById('date').innerHTML = new Date().toDateString();

function revealMessage() {
    if (document.getElementById("hiddenMessage").style.display == 'block') {
        document.getElementById("hiddenMessage").style.display = 'none'
    } else {
        document.getElementById("hiddenMessage").style.display = 'block';
    }
}

function textManip() {
    var name = document.getElementById("FirstName").value
    var newName = "fago"
    document.getElementById("FirstName").value = newName
}
function generate() {
    var clas = genClass();
    var race = genRace();
    genStats(clas, race);
    //genName(race);
}
function genName(race) {
    switch (race) {
        case "Dragoborn":

        case "Dwarf":

        case "Elf":

        case "Gnome":

        case "Half-Elf":

        case "Halfling":

        case "Half-Orc":

        case "Human":

        case "Tiefling":

    }

}
function genRace() {
    var races = ["Dragonborn", "Dwarf", "Elf", "Gnome", "Half-Elf","Halfling","Half-Orc","Human","Tiefling"]
    var temp = Math.floor(Math.random() * 9);
    document.getElementById("raceLb").value = races[temp];
    return races[temp];
}
function genClass() {
    var classes = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"]
    var temp = Math.floor(Math.random() * 12);
    document.getElementById("classLb").value = classes[temp];
    return classes[temp];
}
function genStats(clas, race) {
    var str = roll(3, 6);
    var dex = roll(3, 6);
    var con = roll(3, 6);
    var wis = roll(3, 6);
    var int = roll(3, 6);
    var cha = roll(3, 6);
    switch (race) {
        case "Dragoborn":
            str += 2;
            cha += 1;
        case "Dwarf":
            con += 2;
            //** to finish
        case "Elf":
            dex += 2;
        case "Gnome":
            int += 2;
        case "Half-Elf":
            cha += 2;
            //** to finish
        case "Halfling":
            dex += 2;
            //** to finish
        case "Half-Orc":
            str += 2;
            con += 1;
        case "Human":
            str += 1;
            dex += 1;
            con += 1;
            wis += 1;
            int += 1;
            cha += 1;
        case "Tiefling":
            cha += 2;
            int += 1;
    }
    switch (clas) {
        case "Barbarian":
        case "Bard":
        case "Cleric":
        case "Druid":
        case "Fighter":
        case "Monk":
        case "Paladin":
        case "Ranger":
        case "Rogue":
        case "Sorcerer":
        case "Warlock":
        case "Wizard":
    }
    var strMod = getMod(str);
    var dexMod = getMod(dex);
    var conMod = getMod(con);
    var wisMod = getMod(wis);
    var intMod = getMod(int);
    var chaMod = getMod(cha);
    document.getElementById("strLb").value = str;
    document.getElementById("dexLb").value = dex;
    document.getElementById("conLb").value = con;
    document.getElementById("wisLb").value = wis;
    document.getElementById("intLb").value = int;
    document.getElementById("chaLb").value = cha;
    document.getElementById("strmodLb").value = strMod;
    document.getElementById("dexmodLb").value = dexMod;
    document.getElementById("conmodLb").value = conMod;
    document.getElementById("wismodLb").value = wisMod;
    document.getElementById("intmodLb").value = intMod;
    document.getElementById("chamodLb").value = chaMod;
}
function roll(numDice, numSides) {
    var temp = 0;
    for (var i = 0; i < numDice; i++) {
        temp += Math.floor(Math.random() * numSides) + 1;
    }
    return temp;
}
function getMod(value) {
    switch (value) {
        case 3:
            return -4
        case 4:
        case 5:
            return -3
        case 6:
        case 7:
            return -2
        case 8:
        case 9:
            return -1
        case 10:
        case 11:
            return 0
        case 12:
        case 13:
            return 1
        case 14:
        case 15:
            return 2
        case 16:
        case 17:
            return 3
        case 18:
        case 19:
            return 4
        case 20:
            return 5
    }
}