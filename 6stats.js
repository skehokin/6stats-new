var character= {
	"stats": {
		"Strength": 10,
		"Dexterity": 10,
		 "Constitution": 10,
		 "Intelligence": 10,
		 "Wisdom": 10,
		 "Charisma": 10
	},
	"race":"",
	"age": 18,
	"vagueAge": "middle-aged",
	"traits": {}
};

function listrand(listname) {
	console.log("a list");
	return listname[Math.floor(Math.random()*listname.length)]
}


function roll() {
	var fourrolls = [];

	for(i=0; i<4; i++){
		fourrolls.push(parseInt(Math.ceil(Math.random()*6)));
	}

	var findlowest=fourrolls.indexOf(Math.min.apply(null, fourrolls));

	fourrolls.splice(findlowest, 1);
		console.log(fourrolls);
	var total = 0;

	for (each of fourrolls) {
		total +=each;
	}

	return total;
}

// document.getElementById("stato").innerHTML+=roll();

var statlist = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];
// document.getElementById("stato").innerHTML+=statlist.length;
// var numbers = [];
for (a=0; a<6; a++) {
	character.stats[statlist[a]]=roll();
}

var raceInfo = {
	common: ["human", "elf", "dwarf", "halfling"],
	rare: ["half-elf", "half-orc", "gnome", "dragonborn", "tiefling"],
	"elfVariants": ["high elf","wood elf", "drow"],
	"dwarfVariants": ["mountain dwarf", "hill dwarf"],
	"halflingVariants": ["stout halfling", "lightfoot halfling"],
	"gnomeVariants": ["forest gnome", "rock gnome"],
	"elf": {"stats":["Dexterity", "Dexterity"], "age": 7},
	"human": {"stats":["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"], "age": 1},
	"dwarf": {"stats": ["Constitution", "Constitution"],"age": 3.5},
	"halfling": {"stats": ["Dexterity", "Dexterity"], "age": 2.5},
	"half-elf": {"stats": ["Charisma", "Charisma"], "age": 1.8},
	"half-orc": {"stats": ["Strength", "Strength", "Constitution", "Constitution"], "age": 0.75},
	"gnome": {"stats": ["Intelligence", "Intelligence"], "age": 4},
	"dragonborn":{"stats": ["Strength", "Strength", "Charisma"], "age": 0.8},
	"tiefling": {"stats": ["Intelligence", "Charisma", "Charisma"], "age": 1.1},
	"high elf":["Intelligence"],
	"wood elf": ["Wisdom"],
	"drow": ["Charisma"],
	"mountain dwarf": ["Strength", "Strength"],
	"hill dwarf": ["Wisdom"],
	"stout halfling":["Constitution"],
	 "lightfoot halfling": ["Charisma"],
	"forest gnome": ["Dexterity"],
	"rock gnome": ["Constitution"]
}

commonOrRare = Math.random()
if (commonOrRare < 0.8) {
	character.race = listrand(raceInfo.common);
} else {
	character.race = listrand(raceInfo.rare);
}

for (each of raceInfo[character.race]["stats"]) {
	character.stats[each] += 1;
	console.log(character.stats[each]);
}

var ageInfo = {
"middle-aged": {"Strength":-1, "Dexterity":-1, "Constitution":-1, "Intelligence": +1, "Wisdom": +1, "Charisma": +1},
"aging": {"Strength":-2, "Dexterity":-2, "Constitution":-2, "Intelligence": +2, "Wisdom": +2, "Charisma": +2},
"old": {"Strength":-3, "Dexterity":-3, "Constitution":-3, "Intelligence": +3, "Wisdom": +3, "Charisma": +3}
}
var age = Math.floor(Math.random()*80);
if (age>60) {
	age = Math.floor(Math.random()*80);
}

if (age < 15) {
 character.vagueAge = "young";
}

else if (age>=30 && age<=55) {
	character.vagueAge = "aging";
}

else if (age>55) {
	character.vagueAge = "old";
}

character.age = parseInt((age+15) * raceInfo[character.race].age);

// race-based stat-changes

var changed = 0
if (Object.keys(raceInfo).includes(character.race+"Variants")) {
	character.race = listrand(raceInfo[character.race+"Variants"]);
	changed+=1;
}
if (changed ==1){
for (each of raceInfo[character.race]) {
	character.stats[each] += 1;
	console.log(character.stats[each]);
}}

// gender

var genderScore = Math.floor(Math.random()*100);

if (genderScore>60){
	character.gender = "male";
}
else if (genderScore<40) {
	character.gender = "female";
}
else {
	character.gender = "";
}

//name

var namebits1=["grey","chris","lian","el","sher","lock","lac","tac","gei","grin","shy","dor","lai","ky","pin","an","rod","fer","kir","ty","tyn","tyr","ry","ril","jen","jan","jo","ji","je","kor","tor","ker","he","her","hei","hy","hel","bel","a","at","bri","jes","gis","lit","lil","sky","lor","mei","my","wyl","ar","mer","ta","tar","ma","bai","ban","y","abra","sil","so","vi","va","lo","gris","jer","joc","gy","gi","jor","jin","jis","jir","jil","jei","jel","luc","jar","jai","cian","kel","ceil","cor","kin","con","ka","kes","kar","kit","kris","kis","ac","yan","yen","ya","ye","yer","er","ris","rin","ril","re","ren","ren","rem","rel","ra","rey","ro","ri","rei","ryl","rai","roc","ron","rian","ria","rhia","jia","amer","mada","et","ruc","bir","ba","bo","by","bi","basi","bai","bril","i","ir","il","e","le","ler","lyr","la","li","lo","lar","lan","lasi","leil","los","yil","les","thes","thea","the","thi","za","zai","ze","zir","zil","thir","thy","thar","thys","thor","sei","shei","sho","she","se","sor","sar","sari","sen","shen","shor","shar","sy","sai","ser","sia","shia","sir","shir","sa","sian","shil","si","shi","adre","cas"];

var femNamebits2=["na","cail","equin","ette","lette","ana","nie","lor","quil","ica","nelle","elle","anne","en","lian","lin","ler","et","lie","le","re","ra","ala","asta","alis","rie","asa","as","aria","ania","ian","lis","is","nin","la","a","eni","ava","avia","ley","al","esia","ece","ezia","ona","etia","nico","nica","anique","rose","een","n","etta","andra"];

var maleNamebits2=["ner","nor","nel","nand","el","arc","lock","ster","nye","nin","nan","zer","no","kil","quil","on","an","en","seph","nick","lian","ard","ico","rico","ler","lor","et","ham","art","le","ke","re","os","ro","ack","ick","alus","anus","alis","ask","ard","ley","anius","alios","anios","anos","alos","ian","ald","non","los","us","avian","o","n","icos","icus","roth","io","rigo","aise","al","kor","nico","nicus","nikos","al","ic","lo","los","e","nus","ax","ex","k","s","ander","aster", "agon"];

var lastbits=["green","pen","dragon","bottle","tree","red","hilt","goblin","castle","brown","spire","killer","blue","black","heart","strong","claw","griffin","door","port","ship","raven","moon","whit","glass","forest","wander","weak","king","star","son","horse", "sword", "spell", "smith", "love", "fiddle", "bottom","kin","autumn","patch","garden","whiff","tunnel","prince","song","lock", "wind","fire","pit","horn","blow","swine", "folk", "mann", "blood", "mount", "hand","wright", "oak", "key", "shield", "beard", "knight", "spear", "dagger", "axe", "bird", "thunder", "lord", "royal", "pants","god","shoe","knee","nose", "face","dick", "brain","maiden", "ankle","friend","hill","sky","elm","eye","dead","spring","summer","winter","fucker","fish","stag","catcher","hunter","shark","fear","earl"];

var name1 = listrand(namebits1);
var last = listrand(lastbits)+listrand(lastbits);



if (character.gender == "female") {
	var name2 =	listrand(femNamebits2);
	while (name1[name1.length-1] == name2[0]){
		name2 =	listrand(femNamebits2);
	}
}

else if (character.gender == "male") {
	var name2 =	listrand(maleNamebits2);
	while (name1[name1.length-1] == name2[0]){
		name2 =	listrand(maleNamebits2);
	}
}

else {
	if (Math.random()>0.5) {
		var name2 =	listrand(maleNamebits2);
		while (name1[name1.length-1] == name2[0]){
			name2 =	listrand(maleNamebits2);
		}
	}
	else {
		var name2 =	listrand(femNamebits2);
		while (name1[name1.length-1] == name2[0]){
			name2 =	listrand(femNamebits2);
		}
	}
}

var name = name1+name2;

character.name = name +" "+ last;

//alignment

var alignment=["lawful good", "neutral good", "chaotic good", "lawful neutral", "true neutral", "chaotic neutral", "lawful evil", "neutral evil", "chaotic evil"];

character.alignment = listrand(alignment);



// thoughts for how to decide on what class to give people.

// need to check over the number of each one. one for loop would
// probably be ok? maybe take note of each skill above 15. then,
// compare the skill lists to a dataset of different skills required for
// different classes.

// perhaps max? I guess just make an array, give a max thingy to the
// array, then find the skill with that stat.
var statNumber = (Math.max.apply(null, Object.values(character.stats)));

var bestStat = [];

function findBest() {
while (bestStat.length<1 && statNumber>14){
for (each of Object.keys(character.stats)) {
	if (character.stats[each] >= statNumber) {
		if (each == "Constitution" && character.stats.Strength<14){
			statNumber=statNumber-1;
		}
		else {
			bestStat.push (each);}
	}

	console.log("a round");
}
statNumber=statNumber-1;
}}
if (character.stats.Wisdom<=13){
	findBest();
}

for (each of (Object.keys(ageInfo)))
if (character.vagueAge === each) {
	for (o of (Object.keys(ageInfo[each]))){
		character.stats[o]+= ageInfo[each][o];
		console.log("added" + ageInfo[each][o]);
	}
}
//wis is going to be changed... does this do anything.
if (character.stats.Wisdom>13 || bestStat.length<1){
	findBest();
}

var jobsInfo = {
	"Strength": ["laborer", "builder", "blacksmith", "boxer", "street fighter", "mugger", "miner"],
	"Dexterity": ["weaver", "artist", "tailor", "acrobat", "surgeon", "rat catcher", "pickpocket", "glass-blower", "assassin", "barber"],
	"Constitution": ["farmer", "watchman", "cleaner", "fisherman", "trash collector"],
	"Intelligence": ["engineer", "astronomer", "historian", "philosopher", "device-maker", "scholar of languages", "tactician", "mathematician", "architect", "anthropologist", "apothecary", "teacher", "botanist", "clerk", "scribe"],
	"Wisdom": ["vet", "carpenter", "printer", "brewer", "chef", "gardener", "food craftsman", "leatherworker", "falconer", "potter"],
	"Charisma": ["politician", "merchant", "fortune teller", "herald", "actor", "prostitute", "storyteller", "street performer", "minstrel"]
}



var profession = ["beggar", "town crazy", "professional nuisance"];
if (bestStat.length<1){

	for (each of Object.keys(jobsInfo)){
		if (character.stats[each]>10) {
			profOption = listrand(jobsInfo[each])
			profession.push(profOption);
			// alert(profOption)

		}
	}
}

var classChoice = {
	"Strength": ["Fighter", "Monk"],
	"Dexterity": ["Ranger", "Rogue"],
	"Constitution": ["Paladin", "Barbarian"],
	"Intelligence": ["Wizard"],
	"Wisdom": ["Cleric", "Druid"],
	"Charisma": ["Bard", "Sorcerer", "Warlock"]
}

if (bestStat.length > 0){
	character.class = listrand(classChoice[bestStat[0]])
}
else {
	character.class = listrand(profession);
	// alert(profession);
}

if (bestStat.length > 1) {
	character.class += " & "+ listrand(classChoice[bestStat[1]]);
}

// what isn't shown by stats

// weight, aesthetics, neatness, libido, attraction,
// hair (various qualities), skin, eyes, beardiness.


// dominance, violence, confidence/self-esteem,
// lvl of extroversion, cynicism/idealism, "agreeableness",
// energy, conscientiousness, ambition, emotionalness,
// ppl vs things - t vs f, positivity, uptightness,
// nature vs artificial, courage, forgiveness,
// irritability, arrogance, honesty,

// group vs individuals, selfishness, empathy,
// generosity/greed, kindness/politeness,


//allied traits:
// highconsc: neat, orderly, hard-working, uptight, ambitious. low consc: lazy, disorderly, laid-back, messy, distractable
// low agree: violent, conflict-seeking, irritable, lying, arrogant, rude.
// high agree: honest, polite, kind, forgiving, humble, non-violent, empathetic
// high extro: extroverted, dominant, energetic, loud, talkative. low extro: quiet, introverted, reserved, terse, laconic.
// low openness: unadventurous, restrictive, unimaginative, conservative, disbelieving.
// high open: romantic, prone to flights of fancy, analytical, idealistic, adventurous, allowing, gullible.
// low neuroticism: relaxed, courageous, foolhardy, careless, positive, confident, calm.
// high neuroticism: tense, fearful, cautious, careful, negative, moody, agitated, insecure.

var traitInfo = {

	"conscientiousness": [["neat with clothes and possessions", "messy with clothes and possessions"], ["orderly-minded", "mentally disorganised"], ["hard-working", "lazy"], ["uptight", "laid-back"], ["focused", "distractible"], ["ambitious", "unambitious"], ["responsible", "unreliable"] ],
	"agreeableness": [["peaceable (rejects violence)", "violent"], ["passive", "antagonistic"], ["kind-spoken", "grumpy"],["honest", "deceptive"], ["polite", "rude"], ["humble", "arrogant"], ["forgiving", "vindictive"], ["gentle in action", "harsh in action"]],
	"extroversion": [["appreciative of others' company", "appreciative of alone-time"], ["dominating in conversations", "reserved"], ["long-winded", "terse"], ["loud-voiced", "soft-spoken"]],
	"openness": [["adventurous", "unadventurous"], ["tolerant of others", "judgemental of others"], ["gullible", "skeptical"], ["appreciative of novelty", "averse to new things"], ["imaginative", "unimaginative"], ["analytical", "practical"], ["fanciful", "'sensible'"], ["romantic in worldview", "realistic in worldview"], ["spontaneous", "stable in beliefs"], [ "progressive", "traditional"]],
	"neuroticism": [["bodily tense", "relaxed"], ["fearful", "courageous"], ["cautious", "foolhardy"], ["careful", "careless"], ["pessimistic", "optimistic"], ["agitated", "mentally calm"], ["insecure", "confident"], ["gloomy", "cheerful"], ["distrusting", "trusting"]],
};

var traits = [];

// for (each of Object.keys(traitInfo)) {
// 	traits.push(listrand(listrand(traitInfo[each])));
// }

// character.[trait] = 1 or 0. maybe uh a different, third number? 2?

var traitFuncs = {
	extreme: function(trait) {
			var pole = Math.floor(Math.random()*2)
			if (character.alignment.search("chaotic")!= -1 && trait === "conscientious") {
				pole = 1;
			}
			else if (character.alignment.search("lawful")!= -1 && trait === "conscientious") {
				pole = 0;
			}

			if (character.alignment.search("chaotic")!= -1 && trait === "open") {
				pole = 0;
			}
			else if (character.alignment.search("lawful")!= -1 && trait === "open") {
				pole = 1;
			}
			var t1 = listrand(traitInfo[trait])
			var t2 = listrand(traitInfo[trait])
			while (t1 === t2){
				t2 = listrand(traitInfo[trait])
			}
			character.traits[trait] = pole;
			return "very " +t1[pole]+ " and " +t2[pole] +". ";
	},
	balanced: function(trait) {
			pole = 0;
			notpole = 1;
			var t1 = listrand(traitInfo[trait]);
			var t2 = listrand(traitInfo[trait]);
			while (t1 === t2){
				t2 = listrand(traitInfo[trait]);
			}
			return "Somewhat "+ t1[pole]+ ", but rarely " +t2[pole] +". ";

		},
	skewed: function(trait) {
			var pole = Math.floor(Math.random()*2);
			var notpole = Math.abs(pole - 1);
			var t1 = listrand(traitInfo[trait]);
			var t2 = listrand(traitInfo[trait]);
			var t3 = listrand(traitInfo[trait]);
			while (t1 === t2){
				t2 = listrand(traitInfo[trait]);
			}
			while (t3 === t1 || t3 === t2){
				t3 = listrand(traitInfo[trait]);
			}
			character.traits[trait] = pole;
			times = ["a little ", "can be ", "still ", "has the capacity to be ", " slowly becoming more ", " tends towards being ", "", ""]

			times2 = [" when put under pressure", " when bored", " on occasion", " at heart", " when not feeling threatened", ", on special occasions", " on the surface", " when with certain others", " with new people", " when left alone", " when tired"]

			return t1[pole]+ " and " +t2[pole]+ " but "+ listrand(times) +t3[notpole] + listrand(times2)+". ";
		}
}
var traits = []
for (each of Object.keys(traitInfo)) {
	if (Math.random()>0.0){
	var chooseFunc = listrand(Object.keys(traitFuncs))
	// if (chooseFunc == "extreme") {
	// 	traits.unshift(traitFuncs[chooseFunc](each));
	// }else{
	traits.push(traitFuncs[chooseFunc](each)); //}
	}
}

// accent(accent sexiness?)
// ...voice
// scars on
// missing parts
// illnesses
// phobias?
// crazy-times?
// favourite colour
// interests
// collects


var voicetypo = {
"conscientiousness": {0:["vigilant", "dutiful", "exacting", "precise"], 1:["informal"], 2:[]},
"agreeableness": {0:["fond", "unassuming","self-effacing", "unpretentious", "modest", "placid"], 1:["bristling", "argumentative", "contemptuous","conceited","disdainful","haughty","egotistical","overbearing","proud"], 2:[]},
"extroversion": {0:["rallying", "bantering", "forthright"], 1:["soft","reticent","reserved","withdrawn"], 2:[]},
"openness": {1:["stiff","stuffy","prim","proper","squeamish","artificial","prissy","affronted","puritanical","forbidding","scrupulous"], 0:["spontaneous","inquisitive","speculative","probing","quizzical", "flexible","adaptable","versatile", "inventive"], 2:[]},
"neuroticism": {1:["diffident", "carefree", "even-tempered","stoic", "cocksure","bold","certain","poised","composed","gung ho","unflappable", "peppy","upbeat","jovial"], 0:["gloomy", "grim", "sympathetic", "erratic","hysteric", "unglued", "strung out", "agitated", "raving", "unbalanced", "frenzied", "absurd", "deranged", "self-mocking","self-pitying","self-critical","pitiful"] }

}


 var voicetypes = [ "childish", "dramatic", "reminiscing", "amused","disparaging","dissenting","ironical", "satisfied", "pitying", "self-indulgent", "lustful", "salacious", "licentious","indecent", "awestruck","stupefied","astounded","startled","mystified","stunned", , "enlightened",
"depraved","maniacal", "decisive", "supporting", "prudish", "low-class", "snooty", "authoritarian","commanding","dictatorial","imperious","dogmatic","domineering", "imposing", "officious","peremptory","bossy", "suggestive", "tight", "tremulous", "wobbly", "sharp","cunning","wise", "sensible", "reasonable", "condescending","puffed-up","arrogant","aloof","bragging","lordly","pretentious", "supercilious","swaggering","self-satisfied",
"smug","self-justifying", "pompous", "plummy", "menacing", "penetrating", "strident","forceful","pushy", "gravelly","deep", "resonant","aggressive","beligerant","forceful","assertive","strong-willed","brazen","strong", "purposeful", "classy", "foxy", "cutesy", "syrupy", "honeyed", "saccharine", "zealous", "virtuous","devout","righteous","saintly", "alluring", "lovely", "gracious", "charming", "demure", "mild", "gentle", "flirty", "sweet", "cute", "likable", "husky", "clear", "modulated", "silvery", "flirty", "warm", "musical", "motivating","captivating","hypnotic","beguiling","fascinating","pleasing","compelling","mellow","rich",
"smooth","soothing","mellifluous","melodic","elegant", "sedate","composed","measured","reflective", "impartial","tactical","balanced","objective","lucid","contemplative","detached","dispassionate","neutral","even-handed","impersonal","distant", "logical","scholarly", "sophisticated", "alert", "guarded", "tactless", "slick", "asute","discerning","clever","adroit","shrewd","judicious","subtle", "circumspect","profound","insightful","observant", "independent", "longwinded","soporific","carping", "breathless","restless","vigorous", "lively","vivacious", "lenient","merciful","indulgent","tractable","lax","pardoning",
"obliging", "tolerant", "permissive", "joyful", "docile", "compliant","tractable","accomodating", "cowering","sniveling", "deferential","submissive","acquiescing","sycophantic","needy","adulatory","ingratiating","yielding","resigned", "bullying","harassing","hassling","needling","pestering","provoking","persecuting","irritating", "mortified","embarrassed","humiliated","ashamed","apologetic","penitent","regretful","reluctant","meek","stammering","uncomfortable","bashful","modest", "helpless","subservient", "nagging", "shrinking","subdued", "controlled","inobtrusive","steady","muted", "fastidious","finicky",
"mincing","hypercritical", "meticulous", "solicitous", "demanding", "resentful", "hostile", "haughty", "unapproachable", "frustrated","repressed", "inflexible","strict","rigid","sober", "infatuated", "trusting","dreamy", "timid","faltering"," hesitant"," shaking","timorous", "shy", "uneasy","wary"," irresolute","nervous","concerned","apprehensive","alarmed","worried","cautious", "suspecting", "skeptical","doubtful","dubious","incredulous","unconvinced",
"mistrustful", "rusty", "exhausted","lethargic", "insouciant","unconcerned", "relaxed","contented","serene","patient","temperate", "offhand", "indifferent","apathetic","passive","torpid", "confused","puzzled","baffled","befuddled","bewildered","dazed","distracted","flustered","disconcerted","addled", , "inquisitorial", "nosy","snooping","curious","prying", "scoffing", "obedient", "uncouth","unrefined", "oafish", "rustic", "passive-aggressive", "awkward", "mercurial","inconstant","flighty","temperamental","fickle","capricious", "vehement", "impetuous", "hasty", "impatient","restless",
"resolute","stubborn","obstinate", "stern","formidable", "rueful","pained","troubled","anguished","distraught", "bleak","somber","funereal","morose","melancholy","downcast","doleful","dismal","glum","grouchy","mournful","mopey","grumpy","dejected","desolate","despairing","woebegone","forlorn","hollow", "quarrelsome","argumentative", "insinuating", "fierce", "murderous", "outraged", "raging","enraged","furious","heated","fuming","incensed","wrathful", "incisive", "guilty","shamed","tormented", "merciless","pitiless","ruthless","remorseless","heartless", "feral","bestial", "temperamental","sullen","sulky", "dour","disapproving", "surly",
"ornery","sour","crotchety","cantankerous","irritable","truculent","huffy","irate","resentful","irascible","peevish","snippy", "gritty","gusty", "disenchanted", "suave","urbane", "mature","knowing","worldly", "cultivated","refined", "blase","bored", "heedless","reckless", "vapid","brainless","witless","dopey", "unreasonable", "featherbrained","giddy","puerile","foolish","silly","fatuous","illogical","insipid","ditsy","goofy","eccentric", "coy","glib","artful","sly","guileful", "skeptical", "dry", "wry", "witty", "derisive","insulting","jeering","mocking","taunting", "profane","insolent","irreverent","inappropriate","offensive", "cocky",
"joking", "teasing","impish","impertinent","flippant","frivolous","capering","sassy","comical","facetious","whimsical","punny","audacious","cheeky","immature","unabashed","satirical","playful","provocative", "chilly", "rancorous", "suspicious", "whiny","fretful","fractious","petulant","querulous","obnoxious","pouting","bemoaning","plaintive","whimpering","ecstatic","enthusiastic","exhilarated","exultant", "nonchalant", "fanciful", "effusive","extravagant","exuberant","grand","unrestrained","wild","effervescent","light-hearted","merry","blithe","airy","expansive", "prudent", "snide", "withering", "outspoken", "sincere","guileless", "artless",
"frank", "candid", "naive", "straightforward", "direct", "innocent",  "devoted", "crisp", "sordid", "mischievous", "sneering", "bitter", "catty","acerbic","caustic","scathing","tart","acrid","vitriolic", "spiteful", "venomous", "cruel", "abusive","malicious","malevolent", "inflexible", "uncompromising", "censorious", "indignant","offended", "harsh", "severe", "strict", "reproachful", "denouncing", "waspish", "vengeful", "vindictive", "peaceable", "fawning", "flattering", "knightly", "easy", "reverent", "worshipful", "magnanimous", "amiable", "affable", "genial", "companionable", "benevolent", "benign","kind",
"civil", "diplomatic", "courtly", "obliging", "cordial", "helpful", "polite", "respectful", "dead", "sardonic", "sarcastic", "unnecessarily wordy", "determined", "eager", "chatty", "aggressive", "threatening", "hot-headed", "gruff", "rough", "taut","thin", "whispery","taciturn", "mysterious", "weary", "calm", "slow", "bouncy", "energetic", "fast", "flat", "analytical", "matter-of-fact","hard","pragmatic","cold","cool","serious","uncaring", "insensitive","tactless","thoughtless","callous", "languid","sluggish","indolent","passionless","coldhearted","impassive","unconcerned","dull", "affectionate","caring","tender","admiring","considerate",
"compassionate","sensitive", "romantic","ardent", "gushing", "brittle", "breathy", "hoarse", "thick with emotion", "intense", "throaty", "sentimental","nostalgic","affected","simpering","weepy","volatile","romantic","passionate","tearful", "nasal","croaky","monotonous","grating","gutteral","high-pitched","hoarse","shrill","strangled","wheezy","lisping","raucous","eerie","off-putting","macabre","sinister"]



 var voicetypes = ["erratic",
"hysteric", "unglued", "strung out", "agitated", "raving", "unbalanced", "frenzied", "absurd", "deranged", "rallying", "fond", "childish", "dramatic", "reminiscing", "self-mocking","self-pitying","self-critical","pitiful", "amused", "bantering", "bristling", "disparaging","dissenting","argumentative", "ironical", "satisfied", "unassuming","self-effacing", "unpretentious", "modest", "diffident", "carefree", "even-tempered", "informal", "pitying", "self-indulgent", "lustful","salacious","licentious","indecent", "awestruck","stupefied","astounded","startled","mystified","stunned", "vigilant", "enlightened", "placid","stoic",
"depraved","maniacal", "decisive", "gloomy", "sympathetic", "supporting", "prudish", "low-class", "snooty", "cocksure","bold","certain","poised","composed","gung ho","unflappable", "peppy","upbeat","jovial","authoritarian","commanding","dictatorial","imperious","dogmatic","domineering","imposing","officious","peremptory","bossy", "suggestive", "tight", "tremulous", "wobbly", "sharp","cunning","wise", "sensible", "reasonable", "condescending","puffed-up","arrogant","aloof","bragging","lordly","pretentious","contemptuous","conceited","disdainful","haughty","egotistical","overbearing","proud","supercilious","swaggering","self-satisfied",
"smug","self-justifying", "pompous", "plummy", "grim", "menacing", "penetrating", "strident","forceful","pushy", "gravelly","deep", "resonant","aggressive","beligerant","forceful","assertive","strong-willed","brazen","strong", "purposeful", "classy", "foxy", "cutesy", "syrupy", "honeyed", "saccharine", "zealous", "virtuous","devout","righteous","saintly", "alluring", "lovely", "gracious", "charming", "demure", "mild", "gentle", "flirty", "sweet", "cute", "likable", "husky", "clear", "modulated", "silvery", "flirty", "warm", "musical", "motivating","captivating","hypnotic","beguiling","fascinating","pleasing","compelling","mellow","rich",
"smooth","soft","soothing","mellifluous","melodic","elegant", "sedate","composed","measured","reflective", "impartial","tactical","balanced","objective","lucid","contemplative","detached","dispassionate","neutral","even-handed","impersonal","distant", "logical","scholarly", "sophisticated", "inventive", "alert", "guarded", "tactless", "slick", "asute","discerning","clever","adroit","shrewd","judicious","subtle", "circumspect","profound","insightful","observant", "independent", "longwinded","soporific","carping", "breathless","restless","vigorous", "lively","vivacious", "lenient","merciful","indulgent","tractable","lax","pardoning",
"obliging", "tolerant", "permissive", "joyful", "docile", "compliant","tractable","flexible","adaptable","versatile","accomodating", "cowering","sniveling", "deferential","submissive","acquiescing","sycophantic","needy","adulatory","ingratiating","yielding","resigned", "bullying","harassing","hassling","needling","pestering","provoking","persecuting","irritating", "mortified","embarrassed","humiliated","ashamed","apologetic","penitent","regretful","reluctant","meek","stammering","uncomfortable","bashful","modest", "helpless","subservient", "nagging", "shrinking","subdued", "controlled","inobtrusive","steady","muted", "fastidious","finicky",
"mincing","stiff","stuffy","prim","precise","proper","squeamish","artificial","prissy","affronted","puritanical","exacting","forbidding","scrupulous","hypercritical", "meticulous","dutiful", "solicitous", "demanding","resentful", "hostile", "haughty","unapproachable", "frustrated","repressed","reticent","reserved","withdrawn", "inflexible","strict","rigid","sober", "infatuated", "trusting","dreamy", "timid","faltering"," hesitant"," shaking","timorous", "shy", "uneasy","wary"," irresolute","nervous","concerned","apprehensive","alarmed","worried","cautious", "suspecting", "skeptical","doubtful","dubious","incredulous","unconvinced",
"mistrustful", "rusty", "exhausted","lethargic", "insouciant","unconcerned", "relaxed","contented","serene","patient","temperate", "offhand", "indifferent","apathetic","passive","torpid", "confused","puzzled","baffled","befuddled","bewildered","dazed","distracted","flustered","disconcerted","addled", "inquisitive","speculative","probing","quizzical", "inquisitorial", "nosy","snooping","curious","prying", "scoffing", "obedient", "uncouth","unrefined", "oafish", "rustic", "passive-aggressive", "awkward", "mercurial","inconstant","flighty","temperamental","fickle","capricious", "vehement", "impetuous", "hasty", "impatient","restless",
"resolute","stubborn","obstinate", "stern","formidable", "rueful","pained","troubled","anguished","distraught", "bleak","somber","funereal","morose","melancholy","downcast","doleful","dismal","glum","grouchy","mournful","mopey","grumpy","dejected","desolate","despairing","woebegone","forlorn","hollow", "quarrelsome","argumentative", "insinuating", "fierce", "murderous", "outraged", "raging","enraged","furious","heated","fuming","incensed","wrathful", "incisive", "guilty","shamed","tormented", "merciless","pitiless","ruthless","remorseless","heartless", "feral","bestial", "temperamental","sullen","sulky", "dour","disapproving", "surly",
"ornery","sour","crotchety","cantankerous","irritable","truculent","huffy","irate","resentful","irascible","peevish","snippy", "gritty","gusty", "disenchanted", "suave","urbane", "mature","knowing","worldly", "cultivated","refined", "blase","bored", "heedless","reckless", "vapid","brainless","witless","dopey", "unreasonable", "featherbrained","giddy","puerile","foolish","silly","fatuous","illogical","insipid","ditsy","goofy","eccentric", "coy","glib","artful","sly","guileful", "skeptical", "dry", "wry", "witty", "derisive","insulting","jeering","mocking","taunting", "profane","insolent","irreverent","inappropriate","offensive", "cocky",
"joking", "teasing","impish","impertinent","flippant","frivolous","capering","sassy","comical","facetiou","whimsical","punny","audacious","cheeky","immature","unabashed","satirical","playful","provocative", "chilly", "rancorous", "suspicious", "whiny","fretful","fractious","petulant","querulous","obnoxious","pouting","bemoaning","plaintive","whimpering","ecstatic","enthusiastic","exhilarated","exultant", "nonchalant", "fanciful", "effusive","extravagant","exuberant","grand","unrestrained","wild","effervescent","light-hearted","merry","blithe","airy","expansive", "prudent", "snide", "withering", "outspoken", "sincere","guileless", "artless",
"frank", "candid", "naive", "straightforward", "direct", "innocent", "forthright","spontaneous", "devoted", "crisp", "sordid", "mischievous", "sneering", "bitter", "catty","acerbic","caustic","scathing","tart","acrid","vitriolic", "spiteful", "venomous", "cruel", "abusive","malicious","malevolent", "inflexible", "uncompromising", "censorious", "indignant","offended", "harsh", "severe", "strict", "reproachful", "denouncing", "waspish", "vengeful", "vindictive", "peaceable", "fawning", "flattering", "knightly", "easy", "reverent", "worshipful", "magnanimous", "amiable", "affable", "genial", "companionable", "benevolent", "benign","kind",
"civil", "diplomatic", "courtly", "obliging", "cordial", "helpful", "polite", "respectful", "dead", "sardonic", "sarcastic", "unnecessarily wordy", "determined", "eager", "chatty", "aggressive", "threatening", "hot-headed", "gruff", "rough", "taut","thin", "whispery","taciturn", "mysterious", "weary", "calm", "slow", "bouncy", "energetic", "fast", "flat", "analytical", "matter-of-fact","hard","pragmatic","cold","cool","serious","uncaring", "insensitive","tactless","thoughtless","callous", "languid","sluggish","indolent","passionless","coldhearted","impassive","unconcerned","dull", "affectionate","caring","tender","admiring","considerate",
"compassionate","sensitive", "romantic","ardent", "gushing", "brittle", "breathy", "hoarse", "thick with emotion", "intense", "throaty", "sentimental","nostalgic","affected","simpering","weepy","volatile","romantic","passionate","tearful", "nasal","croaky","monotonous","grating","gutteral","high-pitched","hoarse","shrill","strangled","wheezy","lisping","raucous","eerie","off-putting","macabre","sinister"]

var voiceoptions = []
for (each of Object.keys(character.traits)) {
	if (character.traits[each]===1 || character.traits[each]===0) {
		voiceoptions.push(listrand(voicetypo[each][character.traits[each]]));
		voiceoptions.push(listrand(voicetypo[each][character.traits[each]]));
		voiceoptions.push(listrand(voicetypo[each][character.traits[each]]));
	}
}



document.getElementById("stato").innerHTML+="<p>"+character.name+"</p>";

document.getElementById("stato").innerHTML+="<p>" +character.vagueAge+" "+character.gender+" "+character.race+" "+ character.class+"</p>";

document.getElementById("stato").innerHTML+="<p>"+character.age+"-years-old </p>";

document.getElementById("stato").innerHTML+="<p>"+character.alignment+"</p>";

for (a=0; a<6; a++) {
document.getElementById("stato").innerHTML+="<p>"+statlist[a]+": "+character.stats[statlist[a]]+" </p>";
}


// var descOptions = ["very occasionally", "sometimes", "slightly", "occasionally", "often", "always"]

for (a=0; a<traits.length; a++) {
	document.getElementById("desc").innerHTML+=traits[a];
}
document.getElementById("desc").innerHTML+="<p> speaks in a "+listrand(voiceoptions)+" voice</p>";

// for (i=0; i<statlist.length; i++) {
	// document.getElementById("stato").innerHTML+= numbers[1];
// }