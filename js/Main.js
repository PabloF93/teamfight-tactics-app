var console = document.getElementById("console");
var createButton = document.getElementsByName("submit")[0].addEventListener('click', createComp);

var teamCollection = new TeamCollection();

function initPrexistingTeams() {
	var compName, compTier, compDescription;
	var champsString = [];
	
	compName = 'Cybernetics Blademasters';
	champsString = ['Leona','Fiora','Lucian', 'Vi', 'Irelia', 'Kayle', 'Ekko', 'Miss Fortune'];
	compTier = 'S';
	compDescription = '6 cybernetic, 2 valkirie, 3 blademaster, 2 blaster, 2 infiltrator';
	createTeam(champsString, compName, compTier, compDescription);

	compName = 'Brawler Blasters';
	champsString = ['Malphite', 'Blitzcrank', 'Lucian', 'Ezreal', 'Vi', 'Chogath', 'Jinx', 'Miss Fortune'];
	compTier = 'S';
	compDescription = '4 blaster, 4 brawler, 1 mercenary, 3 rebel, 2 chrono';
	createTeam(champsString, compName, compTier, compDescription);

	compName = 'Mech Infiltrators';
	champsString = ['Annie','Kaisa','Rumble','Shaco','Fizz','Soraka','Ekko','Lulu'];
	compTier = 'S';
	compDescription = '4 infiltrator, 3 mech pilot, 2 demolitionist, 2 mystic';
	createTeam(champsString, compName, compTier, compDescription);

	compName = 'Vanguard Mystic';
	champsString = ['Poppy','Mordekaiser','Sona','Jayce','Karma','Soraka','Wukong','Lulu'];
	compTier = 'S';
	compDescription = '4 vanguard, 4 mystic, 3 dark star';
	createTeam(champsString, compName, compTier, compDescription);

	compName = 'Protector Infiltrators';
	champsString = ['Jarvan IV','Kaisa','Rakan','Xin Zhao','Karma','Shaco','Fizz','Ekko'];
	compTier = 'A';
	compDescription = '4 protector, 4 infiltrator, 3 dark star, 2 celestial';
	createTeam(champsString, compName, compTier, compDescription);

	compName = 'Rebel Blademasters';
	champsString = ['Malphite','Sona','Yasuo','Master Yi','Jinx','Aurelion Sol','Lulu','Miss Fortune'];
	compTier = 'A';
	compDescription = '6 rebel, 1 mercenary, 3 blademaster, 2 blaster, 2 mystic';
	createTeam(champsString, compName, compTier, compDescription);

	compName = 'Chrono Snipers';
	champsString = ['Caitlyn','Blitzcrank','Shen','Ashe','Ezreal','Jhin','Wukong','Thresh'];
	compTier = 'A';
	compDescription = '6 chrono, 3 sniper';
	createTeam(champsString, compName, compTier, compDescription);

	compName = 'Mech Sorcerers';
	champsString = ['Zoe','Ahri','Annie','Lux','Rumble','Syndra','Fizz','Velkoz'];
	compTier = 'A';
	compDescription = '6 sorcerer, 3 mech pilot, 3 star guardian';
	createTeam(champsString, compName, compTier, compDescription);

	compName = 'Rebel Demolitionists';
	champsString = ['Malphite','Ziggs','Sona','Master Yi','Jinx','Lulu','Aurelion Sol','Gankplank'];
	compTier = 'B';
	compDescription = '6 rebel, 2 demolitionist, 1 mercenary, 2 mystic';
	createTeam(champsString, compName, compTier, compDescription);

	compName = 'Brawler Sorcerers';
	champsString = ['Khazix','Malphite','Twisted Fate','Blitzcrank','Vi','Chogath','Velkoz'];
	compTier = 'B';
	compDescription = '4 brawler, 3 void, 2 chrono, 2 sorcerer';
	createTeam(champsString, compName, compTier, compDescription);

	compName = 'Dark Star Snipers';
	champsString = ['Jarvan IV','Mordekaiser','Ashe','Karma','Lux','Shaco','Jinx','Lulu'];
	compTier = 'B';
	compDescription = '6 dark star, 2 sniper, 2 celestial, 2 mystic';
	createTeam(champsString, compName, compTier, compDescription);

	compName = 'Hyper Roll Protectors';
	champsString = ['Jarvan IV','Rakan','Sona','Xin Zhao','Karma','Neeko','Jhin'];
	compTier = 'B';
	compDescription = '4 protector, 3 dark star, 2 celestial, 2 mystic';
	createTeam(champsString, compName, compTier, compDescription);

	compName = 'Valkyrie Blademasters';
	champsString = ['Shen','Karma','Kassadin','Irelia','Kayle','Wukong','Lulu','Miss Fortune'];
	compTier = 'B';
	compDescription = '2 valkyrie, 1 mercenary, 3 blademaster, 2 celestial, 2 chrono, 2 mana-reaver, 2 mystic';

	compName = 'Star Guardian Sorcerers';
	champsString = ['Poppy','Zoe','Ahri','Annie','Neeko','Syndra','Soraka','Lulu'];
	compTier = 'B';
	compDescription = '6 star guardian, 4 sorcerer, 2 mystic';
	createTeam(champsString, compName, compTier, compDescription);

	compName = 'Vanguard Infiltrators';
	champsString = ['Leona','Mordekaiser','Jayce','Shaco','Irelia','Jhin','Wukong','Ekko'];
	compTier = 'B';
	compDescription = '4 vanguard, 3 cybernetic, 3 dark star, 2 infiltrator';
	createTeam(champsString, compName, compTier, compDescription);

	compName = 'Chrono Pirates';
	champsString = ['Graves','Blitzcrank','Darius','Ezreal','Jayce','Wukong','Gankplank','Thresh'];
	compTier = 'C';
	compDescription = '4 space pirate, 1 mercenary, 4 chrono, 2 blaster, 2 vanguard, 2 mana-reaver';
	createTeam(champsString, compName, compTier, compDescription);
}

function createTeam(champsString, compName, compTier, compDescription) {
	var champs = [];
	for(let i=0; i < champsString.length; i++) {
		champs.push(new Champion(champsString[i]));
	}
	var team = new Team(compName, champs);
	team.addTier(compTier);
	team.addDescription(compDescription);
	teamCollection.addTeam(team);

}

initPrexistingTeams();

function createComp() {
	console.innerHTML = "";
	var selectedChampions = document.getElementsByName("champions[]")[0];
	var currentComp = [];

	for(let i=0; i < selectedChampions.length; i++) {
		if(selectedChampions[i].selected == true) {
			var champion = new Champion(selectedChampions[i].value);
			currentComp.push(champion);
			//alert('nuevo campeon: '+champion.getName());
		}
	}

	var currentTeam = new Team('myTeam', currentComp);
	var aux = '';
	for(let j=0; j < currentTeam.champions.length; j++) {
		if(j != currentTeam.champions.length-1) {
			aux += currentTeam.champions[j].getName()+', ';
		} else {
			aux += currentTeam.champions[j].getName();
		}
	}
	console.innerHTML += '<div class="alert alert-info"><p>Equipo Actual: '+aux+'</p></div>';

	compareComps(currentTeam);
	
	
}

function compareComps(currentTeam) {
	var match = 0;
	var isMsg = false;
	var msg = '';
	for(let i=0; i < teamCollection.teams.length; i++) {
		var team1 = teamCollection.teams[i];

		match = 0;
		for(let j=0; j < currentTeam.champions.length; j++) {
			for(let k=0; k < team1.champions.length; k++) {
				//alert("Comparando: "+team1.champions[k].getName()+", "+currentTeam.champions[j].getName());
				if(team1.champions[k].getName() == currentTeam.champions[j].getName()) {
					match++;
					break;
				}
			}
		}

		msg = '';

		if(match == currentTeam.champions.length) {
			if(!isMsg) {
				isMsg = true;
			}

			msg += '<div class="card mb-4">';
			msg += '<div class="card-header"><h4>'+team1.name+'</h4></div>';
			msg += '<div class="card-body">';
			msg += '<h5 class="card-title"> Rank: '+team1.tier+'</h5>';
			msg += '<div class="card-text">';
			msg += '<div><strong>Sinergias: </strong>'+team1.description+'</div>';
			msg += '<strong>Campeones: </strong>';

			for(let p=0; p < team1.champions.length; p++) {
				if(p != team1.champions.length-1) {
					msg += team1.champions[p].name+', ';
				} else {
					msg += team1.champions[p].name;
				}
				
			}

			msg += '</div></div></div>';
			console.innerHTML += msg;
		}

		
	}

	if(!isMsg) {
		console.innerHTML += '<p>No se han encontrado composiciones para tu equipo actual</p>';
	}
}