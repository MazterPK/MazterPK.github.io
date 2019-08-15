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
    clearCheckBoxes();
    clearName();
    var clas = genClass();
    var race = genRace();
    genStats(clas, race);
    genName(race);
    genSkills(clas, race);
    
}
function genSkills(clas, race) {

}
function clearName() {
    document.getElementById("charLb").value = "";
}
function clearCheckBoxes() {
    document.getElementById("strSvChk").checked = false;
    document.getElementById("dexSvChk").checked = false;
    document.getElementById("conSvChk").checked = false;
    document.getElementById("intSvChk").checked = false;
    document.getElementById("wisSvChk").checked = false;
    document.getElementById("chaSvChk").checked = false;
}
function genName(race) {
    switch (race) {
        case "Dragonborn":
            readTextFile("dragonborn.txt");
            break;
        case "Dwarf":
            readTextFile("dwarf.txt");
            break;
        case "Elf":
            readTextFile("elf.txt");
            break;
        case "Gnome":
            readTextFile("gnome.txt");
            break;
        case "Half-Elf":
            readTextFile("half-elf.txt");
            break;
        case "Halfling":
            readTextFile("halfling.txt");
            break;
        case "Half-Orc":
            readTextFile("half-orc.txt");
            break;
        case "Human":
            readTextFile("human.txt");
            break;
        case "Tiefling":
            readTextFile("tiefling.txt");
            break;
    }

}
function readTextFile(file) {
    var names = new Array();
    jQuery.get(file, function (data) {
        names = data.split('\n');
        var index = (roll(1, 100) - 1);
        document.getElementById("charLb").value = names[index]
        //process text file line by line       
    });
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
        case "Dragonborn":
            str += 2;
            cha += 1;
            break;
        case "Dwarf":
            con += 2;
            //** to finish
            break;
        case "Elf":
            dex += 2;
            break;
        case "Gnome":
            int += 2;
            break;
        case "Half-Elf":
            cha += 2;
            //** to finish
            break;
        case "Halfling":
            dex += 2;
            //** to finish
            break;
        case "Half-Orc":
            str += 2;
            con += 1;
            break;
        case "Human":
            str += 1;
            dex += 1;
            con += 1;
            wis += 1;
            int += 1;
            cha += 1;
            break;
        case "Tiefling":
            cha += 2;
            int += 1;
            break;
    }
    var strSv = 0;
    var dexSv = 0;
    var conSv = 0;
    var intSv = 0;
    var wisSv = 0;
    var chaSv = 0;

    switch (clas) {
        case "Barbarian":
            document.getElementById("strSvChk").checked = true;
            document.getElementById("conSvChk").checked = true;
            strSv = 2;
            conSv = 2;
            break;
        case "Bard":
            document.getElementById("dexSvChk").checked = true;
            document.getElementById("chaSvChk").checked = true;
            dexSv = 2;
            chaSv = 2;
            break;
        case "Cleric":
            document.getElementById("wisSvChk").checked = true;
            document.getElementById("chaSvChk").checked = true;
            wisSv = 2;
            chaSv = 2;
            break;
        case "Druid":
            document.getElementById("wisSvChk").checked = true;
            document.getElementById("intSvChk").checked = true;
            wisSv = 2;
            intSv = 2;
            break;
        case "Fighter":
            document.getElementById("strSvChk").checked = true;
            document.getElementById("conSvChk").checked = true;
            strSv = 2;
            conSv = 2;
            break;
        case "Monk":
            document.getElementById("strSvChk").checked = true;
            document.getElementById("dexSvChk").checked = true;
            strSv = 2;
            dexSv = 2;
            break;
        case "Paladin":
            document.getElementById("wisSvChk").checked = true;
            document.getElementById("chaSvChk").checked = true;
            wisSv = 2;
            chaSv = 2;
            break;
        case "Ranger":
            document.getElementById("strSvChk").checked = true;
            document.getElementById("dexSvChk").checked = true;
            strSv = 2;
            dexSv = 2;
            break;
        case "Rogue":
            document.getElementById("dexSvChk").checked = true;
            document.getElementById("intSvChk").checked = true;
            dexSv = 2;
            intSv = 2;
            break;
        case "Sorcerer":
            document.getElementById("conSvChk").checked = true;
            document.getElementById("chaSvChk").checked = true;
            conSv = 2;
            chaSv = 2;
            break;
        case "Warlock":
            document.getElementById("wisSvChk").checked = true;
            document.getElementById("chaSvChk").checked = true;
            wisSv = 2;
            chaSv = 2;
            break;
        case "Wizard":
            document.getElementById("intSvChk").checked = true;
            document.getElementById("wisSvChk").checked = true;
            intSv = 2;
            wisSv = 2;
            break;
    }
    var strMod = getMod(str);
    var dexMod = getMod(dex);
    var conMod = getMod(con);
    var wisMod = getMod(wis);
    var intMod = getMod(int);
    var chaMod = getMod(cha);

    strSv += strMod;
    dexSv += dexMod;
    conSv += conMod;
    intSv += intMod;
    wisSv += wisMod;
    chaSv += chaMod;

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

    document.getElementById("strSvMod").value = strSv;
    document.getElementById("dexSvMod").value = dexSv;
    document.getElementById("conSvMod").value = conSv;
    document.getElementById("intSvMod").value = intSv;
    document.getElementById("wisSvMod").value = wisSv;
    document.getElementById("chaSvMod").value = chaSv;
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