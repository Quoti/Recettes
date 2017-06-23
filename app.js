angular.module("Recettes", [ "ngSanitize" ])
.controller("RecettesCtrl", function($scope, $location) {
	
	$scope.dossiers = [
		{ value: "ENTREES", label: 'Entrées', recette: [
			{ id: 4, nom: "Chèvre en feuilleté", temps: "15 min", difficulte: "Facile", ingredients: "Buche de chevre, pate feuilleté, oeuf", content: "Préchauffer le four à 210°C (thermostat 7). Couper la bûche en 8 rondelles égales.Avec un verre, couper 16 ronds dans la pâte feuilletée. Poser chaque rondelle de fromage sur un rond de pâte feuilletée, parsemer de basilic. Recouvrir avec la pâte feuilletée restante. Fermer tout autour les petits pâtés ainsi réalisés. Dorer au jaune d'oeuf avant de passer au four 15 min. Se marie très bien avec une salade verte." },
		
		]  }, 
		{ value: "PLATS", label: "Plats", recette: [
			{ id: 3, nom: "Lasagnes à la bolognaise", temps: "90 min", difficulte: "Moyen", ingredients: "Pates, oignons, ail, viande de boeuf, purée de tomate", content: "Emincer les oignons. Ecraser les gousses d'ail. Hacher finement carotte et céleri. Faire revenir gousses d'ail et oignons dans un peu d'huile d'olive. Ajouter la carotte et la branche de céleri hachée puis la viande et faire revenir le tout. Au bout de quelques minutes, ajouter le vin rouge. Laisser cuire jusqu'à évaporation. Ajouter la purée de tomates, l'eau et les herbes. Saler, poivrer, puis laisser mijoter à feu doux 45 minutes. Préparer la béchamel : faire fondre le beurre, puis, hors du feu, ajouter la farine d'un coup. Remettre sur le feu et remuer avec un fouet jusqu'à l'obtention d'un mélange bien lisse. Ajouter le lait peu à peu. Remuer sans cesse, jusqu'à ce que le mélange s'épaississe. Ensuite, parfumer avec la muscade, saler, poivrer. Laisser cuire environ 5 minutes, à feu très doux, en remuant. Réserver. Préchauffer le four à 200°C (thermostat 6-7). Huiler le plat à lasagnes. Poser une fine couche de béchamel puis : des feuilles de lasagnes, de la bolognaise, de la béchamel et du parmesan, et cela 3 fois de suite.Sur la dernière couche de lasagnes, ne mettre que de la béchamel et recouvrir de fromage râpé. Parsemer quelques noisettes de beurre. Enfourner pour environ 25 minutes de cuisson." },
		]  },
		{ value: "DESSERTS", label: "Desserts", recette: [
		
		] },
		{ value: "PETITSDEJEUNERS", label: "Petits déjeuners", recette: [
			{ id: 1, nom: "Granola", temps: "45 min", difficulte: "Facile", ingredients: "Flocons d'avoine, amandes, sirop d'agave", content: "Préchgauffer le four à 160°. Tout mélanger, dans un grand bol, mettre dans dans un plat, mettre au four pendant 3 fois 15 min. Entre chaque fois, mélanger le tout." },
			{ id: 2, nom: "Porridge", temps: "30 min", difficulte: "Facile", ingredients: "Flocons d'avoine, lait, sucre roux", content: "Faites bouillir le lait et faites-y tomber les flocons d'avoine en pluie, en remuant tout le temps. Baissez le feu et remuez jusqu'à reprise de l'ébullition. Couvrez et laissez mijoter de 15 à 20 min, en remuant de temps en temps.  Sevez dans une assiette creuse, avec une cuillèrée de sucre roux ou vanillé, ou encore du miel." },
		] }
	];

	$scope.dossierCourant = null;
	$scope.recetteSelectionne = null;

	$scope.versRecette = function(dossier, recette) {
		$location.path("/" + dossier.value + "/" + recette.id);
	}

	$scope.selectionDossier = function(dossier) {
		$scope.dossierCourant = dossier;
		$scope.recetteSelectionne = null;
	}

	$scope.selectionRecette = function(recette) {
		$scope.recetteSelectionne = recette;
	};

	$scope.$watch(function() {
		return $location.path();
	}, function(newPath) {
		var tabPath = newPath.split("/");
		if (tabPath.length > 1) {
			var valDossier = tabPath[1];
			$scope.dossiers.forEach(function(item) {
				if (item.value == valDossier) {
					$scope.selectionDossier(item);
				}
			});
			if (tabPath.length > 2) {
				var idRecette = tabPath[2];
				$scope.dossierCourant.recette.forEach(function(item) {
					if (item.id == idRecette) {
						$scope.selectionRecette(item);
					}
				});
			}
		}
	});

	
});