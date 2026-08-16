// Résumés de règles écrits par nos soins — pas une reproduction des règles
// officielles (protégées par le droit d'auteur des éditeurs). Objectif :
// donner l'idée générale de "comment on joue" en quelques phrases, pas
// remplacer la boîte.

export const RULES = {
  cascadia:
    "À chaque tour, prenez une paire tuile-animal parmi celles proposées et ajoutez-la à votre plateau personnel. Chaque espèce d'animal marque des points selon un motif différent (en ligne, en groupe, isolé...), tandis que les tuiles rapportent des points si les mêmes types de terrain se touchent. Le jeu se termine quand tout le monde a posé ses 20 tuiles ; le meilleur score total l'emporte.",
  "the-crew":
    "Coopératif à cartes : chaque manche impose une mission (« tel joueur doit remporter telle carte », dans un ordre parfois précis). Vous jouez à la couleur comme à la belote, mais sans jamais parler de votre jeu à voix haute — seuls quelques signaux limités sont autorisés. Réussissez la mission pour passer à la suivante, de plus en plus corsée.",
  "7-wonders":
    "Un draft de cartes en trois âges : à chaque tour, choisissez une carte dans votre main puis passez le reste à votre voisin. Les cartes construisent ressources, bâtiments militaires, scientifiques ou commerciaux qui rapportent des points en fin de partie. Le conflit militaire avec vos deux voisins directs se résout à chaque âge.",
  codenames:
    "Deux équipes, un espion par équipe. L'espion donne un mot et un chiffre reliant plusieurs mots-codes de sa couleur sur la grille ; son équipe doit deviner lesquels sans toucher les mots adverses ni surtout le mot assassin. La première équipe à faire deviner tous ses mots gagne.",
  heat:
    "Un jeu de course où gérer son moteur compte autant que sa position. Chaque tour, jouez des cartes vitesse pour avancer, gérez votre surchauffe et anticipez virages et dépassements. Premier à franchir la ligne d'arrivée après le nombre de tours prévus.",
  azul:
    "Piochez des carreaux colorés dans les présentoirs communs et rangez-les sur votre plateau, ligne par ligne, avant de les transférer sur votre mosaïque en fin de manche. Les carreaux mal placés ou en trop pénalisent votre score. La partie se termine dès qu'une ligne de la mosaïque est complétée par un joueur.",
  "7-wonders-duel":
    "Version à deux de 7 Wonders : les cartes sont disposées en pyramide visible, et chacun choisit alternativement une carte accessible. Trois façons de gagner immédiatement : domination militaire, avance scientifique, ou simplement le meilleur score de civilisation à la fin des trois âges.",
  "sky-team":
    "À deux, sans se parler : chacun lance ses dés en cachette derrière un paravent puis les pose un par un sur son propre plateau (altitude, direction, freins...) pour faire atterrir l'avion en douceur. Une campagne de plusieurs aéroports de plus en plus difficiles.",
  splendor:
    "Achetez des cartes de développement avec des jetons de pierres précieuses ; chaque carte achetée réduit ensuite le coût de vos futurs achats de la même couleur. Attirez aussi des mécènes qui rapportent des points bonus. Premier à 15 points de prestige déclenche la fin de partie.",
  "just-one":
    "Coopératif pur : un joueur doit deviner un mot secret, les autres écrivent chacun un seul indice en simultané. Les indices identiques sont automatiquement retirés avant que le devineur ne les découvre — il faut donc anticiper ce que les autres vont écrire.",
  skull:
    "Chacun pose une carte face cachée devant soi (trois fleurs, une tête de mort). Au fil des tours, misez sur le nombre de fleurs que vous pensez pouvoir retourner sans tomber sur une tête de mort — la vôtre ou celle d'un adversaire. Deux mises réussies dans la partie et vous gagnez.",
  dixit:
    "Le conteur choisit une carte illustrée dans sa main et annonce une phrase, un mot ou un son évoquant l'image, sans la montrer. Les autres joueurs choisissent secrètement une carte de leur propre main correspondant à l'indice ; toutes les cartes sont mélangées et il faut deviner laquelle était celle du conteur.",
  wavelength:
    "Un joueur voit où se situe la cible sur un curseur caché (par exemple entre « froid » et « chaud ») et donne un indice évoquant ce point précis. Le reste du groupe doit placer le curseur au bon endroit en se basant uniquement sur cet indice et son ressenti collectif.",
  wingspan:
    "Un jeu de placement d'ouvriers à quatre manches où chaque action possible correspond à un habitat (forêt, prairie, zones humides). Jouer un oiseau dans un habitat déclenche les pouvoirs des oiseaux déjà présents dans cette rangée. Les points viennent des oiseaux, des œufs, de la nourriture stockée et des objectifs de manche.",
  "star-realms":
    "Un deckbuilding à deux : achetez des cartes vaisseau ou base dans un marché commun avec l'argent généré par vos propres cartes, et utilisez leur puissance de combat pour réduire l'influence adverse. Premier à ramener l'influence de l'autre à zéro remporte le duel.",
  catan:
    "Placez vos deux premiers villages puis, à chaque tour, un lancer de dés détermine quelles régions produisent des ressources pour tout le monde. Échangez ces ressources entre joueurs ou avec la banque pour construire routes, villages et villes. Premier à 10 points de victoire gagne.",
  carcassonne:
    "À chaque tour, piochez une tuile et posez-la en la raccordant aux tuiles déjà en jeu (routes, villes, prés, abbayes), puis placez éventuellement un de vos meeples dessus pour en revendiquer la propriété. Les éléments complétés rapportent des points immédiatement, les prés et abbayes en fin de partie.",
  "ticket-to-ride":
    "Collectionnez des cartes wagon de couleur pour vous en défausser et poser vos wagons sur les routes du plateau reliant deux villes. Chaque route posée rapporte des points, tout comme la réalisation de vos objectifs secrets de destination — mais les échouer coûte des points.",
  pandemic:
    "Coopératif : chaque joueur a un rôle avec une capacité unique. À chaque tour, déplacez-vous, soignez des cubes de maladie ou construisez des stations de recherche, puis piochez des cartes qui font apparaître de nouvelles infections. L'équipe gagne en trouvant les remèdes des quatre maladies avant que le monde ne devienne incontrôlable.",
  "king-of-tokyo":
    "Lancez six dés à la façon d'un Yahtzee pour infliger des dégâts, gagner de l'énergie ou récupérer des points de vie. Celui qui occupe Tokyo encaisse les attaques des autres mais marque des points bonus. Dernier monstre en vie, ou premier à 20 points de victoire, l'emporte.",
  "sushi-go":
    "Chacun reçoit une main de cartes, en choisit une à jouer face visible puis passe le reste de sa main à son voisin — et ainsi de suite jusqu'à épuisement des mains. Certaines cartes se combinent bien entre elles (makis, puddings, sashimis) : composez la meilleure assiette possible.",
  concept:
    "Un joueur combine des pictogrammes sur un plateau thématique (couleur, taille, catégorie...) pour faire deviner un mot ou une expression aux autres, sans parler ni écrire. Les devineurs proposent des hypothèses au fur et à mesure que les indices se précisent.",
  bang: "Chaque joueur reçoit un rôle secret (sauf le Shérif, connu de tous) et un objectif différent : le Shérif doit survivre, les Hors-la-loi doivent l'éliminer, le Renégat doit être le dernier survivant. On joue des cartes d'attaque, de défense et d'objets à chaque tour jusqu'à ce qu'un camp remporte la victoire.",
  "exploding-kittens":
    "Piochez à tour de rôle ; si vous tirez un chaton explosif sans carte de désamorçage, vous êtes éliminé. Les autres cartes permettent d'éviter de piocher, de voir l'avenir ou de replacer discrètement le chaton dans le paquet pour le refiler à quelqu'un d'autre.",
  qwirkle:
    "Posez des tuiles de formes et de couleurs pour former des lignes où toutes les tuiles partagent soit la même forme, soit la même couleur, jamais les deux mélangées sans logique. Plus une ligne est longue au moment où vous la complétez, plus elle rapporte de points.",
  patchwork:
    "À deux joueurs, sur une piste temporelle commune : à votre tour, achetez une pièce de tissu disponible avec vos boutons, puis placez-la sur votre plateau personnel façon tétris. Le joueur le plus en retard sur la piste rejoue ; celui qui a le plus beau patchwork (et le moins de trous) à la fin gagne.",
  hanabi:
    "Vous voyez les cartes de tout le monde sauf les vôtres. Chacun son tour, donnez un indice limité (couleur ou valeur) à un coéquipier, jouez une carte de votre main à l'aveugle, ou défaussez-en une pour récupérer un jeton d'indice. Le groupe gagne en réussissant à poser les feux d'artifice dans le bon ordre de couleur et de valeur.",
  cluedo:
    "Déplacez-vous dans le manoir, entrez dans une pièce et émettez une supposition (suspect, arme, lieu) pour forcer les autres joueurs à vous montrer discrètement une carte qui la contredit. Recoupez les indices récoltés pour être le premier à accuser correctement dans la pièce centrale.",
  exit: "Un jeu à usage unique : la boîte contient indices, objets et un système de cadenas à code. En équipe, résolvez les énigmes dans l'ordre pour obtenir des combinaisons à trois chiffres ou lettres et progresser dans l'histoire jusqu'à la sortie.",
  "magic-maze":
    "Coopératif en temps réel et sans un mot : chaque joueur contrôle une action pour tous les héros (déplacement dans une direction, escalier, achat...), jamais l'ensemble d'un seul héros. Guidez-les tous jusqu'à l'objectif avant l'épuisement du sablier.",
  "sea-salt-and-paper":
    "Piochez ou récupérez des cartes en défausse pour composer une main de combinaisons (paires, familles) tout en décidant à quel moment arrêter votre pioche pour sécuriser vos points, avant qu'un autre joueur n'appelle la fin de la manche.",
  skyjo:
    "Vos 12 cartes sont posées face cachée devant vous ; à votre tour, piochez ou prenez la défausse pour échanger une carte et en révéler une nouvelle, dans le but d'obtenir le total le plus bas. Dès qu'un joueur retourne toutes ses cartes, la manche se termine pour tout le monde.",
  "loup-garou":
    "Un maître du jeu narre les tours : chaque nuit, les loups-garous se réveillent en secret pour désigner une victime, puis le village se réveille et débat pour éliminer un suspect par vote. Le village gagne en éliminant tous les loups, les loups gagnent en égalant leur nombre à celui des villageois restants.",
  "times-up":
    "Faites deviner les mêmes personnages ou objets à votre équipe en trois manches successives : d'abord en autant de mots que vous voulez, puis en un seul mot, puis en mime pur. La mémorisation des manches précédentes accélère la troisième.",
  uno: "Défaussez une carte correspondant en couleur ou en valeur à la précédente, ou piochez si vous ne pouvez pas jouer. Certaines cartes forcent l'adversaire à piocher, inversent le sens de jeu ou changent la couleur. Premier à ne plus avoir de cartes en main remporte la manche.",
  "trivial-pursuit":
    "Déplacez votre pion sur le plateau et répondez à des questions de culture générale dans la catégorie de la case où vous atterrissez. Chaque bonne réponse sur une case camembert vous fait gagner un quartier ; le premier à collecter les six catégories et à répondre juste au centre gagne.",
  "jungle-speed":
    "Chacun retourne une carte de sa pile en même temps que les autres. Dès que deux joueurs révèlent le même symbole, ils doivent attraper le totem central avant l'autre — le perdant récupère des cartes supplémentaires. Premier à vider sa pile gagne.",
  "colt-express":
    "Chaque joueur programme secrètement une série d'actions (se déplacer, tirer, voler) sur ses propres cartes, puis toutes les actions de tout le monde se révèlent et s'exécutent dans l'ordre, souvent avec des surprises. Le braqueur qui amasse le plus de butin à la fin des manches gagne.",
  kingdomino:
    "À chaque tour, choisissez un domino territoire-population parmi ceux proposés (votre choix détermine aussi votre ordre de passage au tour suivant) et raccordez-le à votre royaume en respectant les types de terrain adjacents. Le royaume le mieux organisé en fin de partie l'emporte.",
  abalone:
    "Sur un plateau hexagonal, déplacez vos billes en ligne ou en formation pour pousser celles de l'adversaire hors du plateau — vous ne pouvez pousser que si vous êtes en supériorité numérique dans l'alignement. Le premier à faire tomber six billes adverses gagne.",
  "machi-koro":
    "Lancez un ou deux dés à votre tour : le résultat active les bâtiments de tous les joueurs correspondant à ce chiffre, générant des revenus. Utilisez cet argent pour construire de nouveaux bâtiments et des monuments. Premier à construire tous ses monuments gagne.",
  bohnanza:
    "Vous devez planter vos cartes haricot dans l'ordre où vous les recevez, jamais les réorganiser en main. Négociez librement avec les autres joueurs pour échanger des haricots et compléter vos champs, que vous récoltez ensuite contre des pièces.",
  "mille-bornes":
    "Jouez des cartes kilométrage pour avancer vers 1000 bornes, tout en infligeant des attaques (panne, accident, feu rouge) aux adversaires et en jouant des parades pour vous en protéger. Premier à atteindre exactement 1000 bornes gagne la manche.",
  "zombie-kidz":
    "Coopératif simple et évolutif : déplacez-vous dans l'école et éliminez les zombies ensemble avant qu'ils n'atteignent la salle des maîtres. Chaque victoire permet d'ouvrir une enveloppe scellée qui ajoute une nouvelle règle, rendant les parties suivantes différentes.",
  "terraforming-mars":
    "Chaque joueur incarne une corporation qui joue des cartes projet pour augmenter température, oxygène et océans sur Mars, tout en développant sa propre production de ressources. La partie se termine quand les trois paramètres planétaires atteignent leur maximum ; le meilleur score total gagne.",
  agricola:
    "Sur 14 tours, placez vos ouvriers sur des actions limitées (récolter du bois, agrandir la ferme, avoir des enfants...) pour nourrir votre famille à chaque phase de récolte et développer votre exploitation. Un jeu dense où chaque action manquée peut coûter cher.",
  "puerto-rico":
    "À chaque tour, un joueur choisit un rôle (marchand, capitaine, colon...) que tout le monde exécute, mais celui qui l'a choisi en tire un léger avantage. Gérez plantations, production et expéditions vers l'Europe pour accumuler le plus de points de victoire.",
  dominion:
    "Chaque joueur commence avec un deck identique et l'améliore en achetant des cartes dans une réserve commune avec l'argent généré par son propre deck. Les decks se mélangent et se piochent en continu ; la partie se termine quand certaines piles de cartes sont épuisées.",
  root: "Chaque faction (Marquisat félin, Alliance de la forêt, Corvidés conspirateurs...) a ses propres règles et sa propre façon de marquer des points, dans un même monde partagé. Premier à atteindre le seuil de points de victoire fixé par le nombre de joueurs déclenche la fin de partie.",
  scythe:
    "Développez votre territoire, votre production et vos mechs de combat dans une Europe alternative d'après-guerre. Chaque action possible avance simultanément deux jauges de votre plateau, obligeant à équilibrer efficacité et polyvalence. Fin de partie déclenchée dès qu'un joueur pose sa sixième étoile.",
  photosynthesis:
    "Placez et faites grandir vos arbres sur un plateau circulaire ; le soleil tourne à chaque tour et détermine quels arbres captent la lumière (et donc gagnent des points de croissance) selon les ombres portées. Récoltez vos arbres les plus matures pour marquer des points.",
  everdell:
    "Sur quatre saisons, placez des ouvriers pour récolter des ressources, construisez des cartes qui peuplent votre village d'animaux et enchaînez les effets de cartes déjà en jeu. Le joueur avec le village le plus développé et le plus prestigieux à la fin de l'année gagne.",
  "small-world":
    "Choisissez une combinaison peuple + pouvoir spécial et envahissez les territoires voisins pour marquer des points selon le nombre de régions occupées. Quand votre peuple s'essouffle, déclarez-le en déclin et lancez-en un nouveau par-dessus.",
  dobble:
    "Entre deux cartes quelconques du jeu, un seul symbole est toujours identique. Selon le mini-jeu choisi, soyez le plus rapide à repérer et nommer ce symbole commun pour gagner la carte ou vous en débarrasser.",
  perudo:
    "Chacun cache ses dés sous un gobelet et les regarde secrètement. À tour de rôle, misez sur le nombre total de dés d'une valeur donnée présents sur toute la table, en misant toujours plus haut que le joueur précédent, ou doutez de son annonce.",
  "6-qui-prend":
    "Posez simultanément une carte numérotée sur l'une des quatre rangées dont la valeur est la plus proche par en dessous. Si votre carte est la sixième d'une rangée, vous ramassez toute la rangée (et ses points négatifs, les têtes de bœuf).",
  rummikub:
    "Formez des suites de même couleur ou des groupes de même valeur avec vos plaques numérotées, en piochant ou en réorganisant les combinaisons déjà posées sur la table. Premier à se débarrasser de toutes ses plaques gagne la manche.",
  scrabble:
    "Posez des lettres sur la grille pour former des mots valides, en vous connectant aux mots déjà présents. Les cases bonus multiplient la valeur d'une lettre ou d'un mot entier ; le score s'accumule mot après mot jusqu'à épuisement des lettres.",
  monopoly:
    "Déplacez-vous selon les dés, achetez les propriétés où vous atterrissez et faites payer un loyer aux adversaires qui s'y arrêtent. Construisez maisons et hôtels pour augmenter vos loyers. Dernier joueur encore solvable remporte la partie.",
  risk: "Placez vos armées sur le plateau mondial puis, à chaque tour, renforcez vos territoires et attaquez vos voisins aux dés pour conquérir de nouveaux territoires. L'objectif classique : éliminer toutes les armées adverses et dominer le monde.",
  "puissance-4":
    "À tour de rôle, faites tomber un jeton de votre couleur dans l'une des colonnes de la grille verticale. Premier à aligner quatre jetons de sa couleur (horizontalement, verticalement ou en diagonale) gagne.",
  quoridor:
    "À votre tour, avancez votre pion d'une case ou posez une barrière pour ralentir un adversaire — sans jamais bloquer complètement son chemin vers l'autre bord. Premier pion à atteindre le côté opposé du plateau gagne.",
  draftosaurus:
    "Un dé impose une contrainte de placement, puis chacun choisit un dinosaure dans sa main et le place dans un enclos de son zoo en respectant cette contrainte, avant de faire circuler le reste de sa main. Le zoo qui marque le plus de points selon les règles de chaque enclos gagne.",
  decrypto:
    "Deux équipes ont chacune quatre mots-clés secrets associés aux chiffres 1 à 4. Le donneur d'indice de chaque équipe donne trois indices correspondant à un code de trois chiffres pour que son équipe le retrouve, tout en essayant de brouiller l'équipe adverse qui écoute.",
  "spirit-island":
    "Coopératif asymétrique : chaque esprit a des pouvoirs uniques qu'il active en jouant des cartes en même temps que les autres joueurs, pour repousser les colons avant qu'ils ne ravagent l'île. Le jeu se termine par une victoire collective ou par l'invasion complète du territoire.",
  "dune-imperium":
    "Envoyez vos agents sur des emplacements d'action pour récolter ressources et influence, tout en construisant un deck de cartes qui déterminent vos capacités de combat. Accumulez des points de victoire par la voie diplomatique ou militaire jusqu'au seuil fixé.",
  "the-mind":
    "Chacun doit jouer sa carte au bon moment sans jamais communiquer verbalement ni montrer sa main, en se basant uniquement sur son intuition du rythme collectif, pour poser toutes les cartes de la manche en ordre croissant.",
  "camel-up":
    "Lancez le dé pyramidal pour faire avancer un chameau (les chameaux portés grimpent sur ceux qu'ils rattrapent), et pariez à chaque manche sur celui qui sera en tête. Les paris rapportent gros s'ils sont faits tôt et corrects.",
  "forbidden-island":
    "Coopératif : l'île s'enfonce progressivement sous l'eau, tuile par tuile. Déplacez-vous, asséchez des tuiles menacées et récupérez les quatre trésors avant qu'ils ne soient engloutis ou que l'hélisurface ne disparaisse.",
  clank:
    "Un deckbuilding d'exploration où piocher certaines cartes fait du bruit (« clank ! ») et attire l'attention du dragon qui garde le donjon. Explorez, récupérez des trésors et ressortez avant que le dragon ne vous repère trop souvent.",
  "point-salad":
    "Draftez des cartes légumes ou des cartes de score qui définissent comment chaque légume rapportera des points en fin de partie. Composez la meilleure combinaison possible avant que les cartes ne s'épuisent.",
  coup: "Chacun a deux cartes personnage cachées donnant accès à des pouvoirs (voler, assassiner, se protéger). Bluffez en utilisant des pouvoirs que vous n'avez pas forcément, ou dénoncez le bluff d'un adversaire. Dernier joueur avec au moins une carte en jeu gagne.",
  mascarade:
    "Chacun a un personnage secret placé face cachée devant lui, mais les masques s'échangent en douce à chaque tour — vous ne savez bientôt plus qui vous êtes vraiment. Utilisez le pouvoir du personnage que vous pensez avoir, au risque de vous tromper.",
  "ark-nova":
    "Gérez des cartes animaux et des projets de conservation pour développer un zoo moderne, tout en équilibrant votre réputation et vos revenus. Un jeu dense à l'ambiance calme mais aux choix stratégiques serrés, jusqu'à atteindre le seuil de réputation final.",
  "twilight-struggle":
    "Deux joueurs incarnent les États-Unis et l'URSS et jouent des cartes historiques pour gagner de l'influence région par région, tout en gérant la tension nucléaire mondiale. Domination d'une région, score final ou victoire automatique en cas d'escalade extrême.",
  "brass-birmingham":
    "Sur deux ères (canaux puis chemins de fer), construisez des industries reliées par un réseau de transport, en gérant un flux de ressources tendu. Les revenus et les points de victoire ne s'obtiennent pas de la même façon selon les deux moitiés de la partie.",
  gloomhaven:
    "Une campagne coopérative où chaque personnage joue des cartes d'action à l'aveugle pour déterminer sa vitesse d'initiative et ses capacités du tour. Enchaînez les scénarios de donjon, développez votre personnage et laissez vos choix influencer la campagne sur le long terme.",
  "lords-of-waterdeep":
    "Placement d'ouvriers où chaque emplacement rapporte des ressources ou de l'argent permettant de compléter des quêtes, qui rapportent à leur tour points et bonus. Un plateau d'intrigue additionnel permet de perturber discrètement les adversaires.",
  betrayal:
    "Explorez le manoir pièce par pièce en révélant des tuiles au fur et à mesure, jusqu'à ce qu'un événement désigne un joueur comme traître caché. La partie bascule alors en un scénario asymétrique tiré au sort parmi des dizaines de possibilités.",
  avalon:
    "Les joueurs Loyaux d'Arthur doivent faire réussir des quêtes votées collectivement, tandis que les agents de Mordred, cachés parmi eux, tentent de les faire échouer. Merlin connaît les agents du mal mais ne peut parler qu'en énigmes, sous peine d'être démasqué et assassiné.",
  saboteur:
    "Les chercheurs d'or posent des tuiles galerie pour creuser vers le trésor, tandis que les saboteurs (rôle secret) bloquent discrètement le chemin ou sabotent les outils des autres. Plusieurs manches, puis répartition de l'or trouvé selon les rôles.",
  "forbidden-desert":
    "Coopératif : une tempête de sable redessine le désert à chaque tour et ensevelit les tuiles. Retrouvez les pièces de la machine volante, dégagez le sable et gardez tout le monde hydraté avant que la tempête n'engloutisse la dernière issue.",
  sagrada:
    "Draftez des dés de couleur et de valeur pour construire votre propre vitrail, en respectant des contraintes de voisinage (pas deux dés identiques adjacents, par exemple) et des objectifs publics et privés à la fin de la partie.",
  "welcome-to":
    "Un jeu de tuiles sans dé où trois cartes numéro/effet sont révélées à chaque tour : chaque joueur choisit d'en utiliser une pour agrandir une de ses trois rues, en respectant l'ordre croissant des numéros de maison. Le meilleur quartier selon les objectifs remportés gagne.",
  cartographers:
    "Chaque manche révèle une carte à dessiner (forêt, village, rivière...) sur votre grille personnelle, en respectant sa forme imposée. À la fin de chaque saison, des objectifs différents notent votre carte ; gérez aussi les incursions de monstres qui grignotent votre territoire.",
  tsuro:
    "Posez une tuile chemin devant votre pion, prolongeant automatiquement votre trajectoire (et parfois celle des autres) sur le plateau. Sortir du plateau ou percuter un autre pion vous élimine ; dernier pion encore en jeu gagne.",
  blokus:
    "À tour de rôle, posez une de vos pièces polyomino sur le plateau en la faisant toujours toucher une de vos pièces précédentes par un coin, jamais par un côté. Quand plus personne ne peut jouer, celui qui a posé le plus de cases gagne.",
  "bunny-kingdom":
    "Draftez des cartes territoire et ressource pour étendre votre royaume sur la carte commune, sans savoir à l'avance quelles missions compteront le plus à la fin. Le meilleur équilibre entre expansion et objectifs remplis l'emporte.",
  karuba:
    "Chaque joueur pose ses tuiles simultanément sur son propre plateau identique pour tracer un chemin vers les temples, tout en avançant discrètement ses explorateurs. Premier arrivé à un temple en récupère le trésor.",
  takenoko:
    "Chaque tour, réalisez deux actions parmi irriguer une parcelle, faire pousser du bambou, déplacer le jardinier ou le panda... mais le panda affamé mange le bambou récolté par le jardinier. Remplissez vos objectifs secrets d'irrigation, de croissance et du panda pour marquer des points.",
  citadelles:
    "Chaque tour, choisissez secrètement un rôle parmi ceux disponibles (Assassin, Voleur, Roi, Marchand...) ; chaque rôle donne un pouvoir spécifique et un ordre de jeu. Construisez des quartiers de votre ville pour marquer des points, jusqu'à ce qu'un joueur atteigne huit quartiers.",
  tokaido:
    "Déplacez-vous le long de la route du Tokaido, en vous arrêtant dans les villages pour admirer les paysages, manger, faire des rencontres ou acheter des souvenirs. Le joueur toujours le plus en retard sur la route choisit son prochain arrêt en premier.",
  labyrinthe:
    "Faites glisser un couloir dans une rangée ou une colonne du plateau pour modifier le tracé du labyrinthe, puis déplacez votre pion aussi loin que possible dans les couloirs connectés vers le trésor visé. Premier à collecter tous ses trésors et à revenir à son point de départ gagne.",
  similo:
    "Un joueur pense à un personnage secret parmi une grille commune. À chaque tour, il révèle une carte indice de sa main pour orienter les autres, qui éliminent progressivement les personnages qui ne correspondent pas jusqu'à ne garder que la bonne réponse.",
  boggle:
    "Secouez le boîtier de dés-lettres puis, en un temps limité, notez tous les mots que vous parvenez à former en reliant des lettres adjacentes. Les mots trouvés par plusieurs joueurs ne comptent pas ; seuls les mots uniques rapportent des points.",
  "res-arcana":
    "Chaque tour, activez vos artefacts et lieux de pouvoir pour produire des essences magiques, que vous dépensez pour lancer des sorts ou invoquer des créatures. Premier joueur à atteindre le seuil de points de victoire déclenche la dernière manche.",
  "lost-ruins-of-arnak":
    "Explorez une île en combinant deckbuilding (les cartes achetées enrichissent votre main future) et placement d'ouvriers sur un plateau commun. Fouillez des sites, affrontez des gardiens et progressez sur les pistes de recherche pour marquer des points.",
  kemet:
    "Déplacez vos troupes entre les territoires du plateau, invoquez des créatures mythologiques et améliorez vos pouvoirs au temple. Les combats se jouent aux cartes plutôt qu'aux dés. Premier à accumuler assez de points de victoire (via des objectifs variés) gagne.",
  inis:
    "Un draft de cartes détermine vos actions possibles chaque saison (déplacement, récolte, combat...). Devenez Haut Roi en remplissant en même temps trois conditions de territoire, de clans et d'épopées lors d'une même phase d'évaluation.",
  "7-wonders-architects":
    "Version accessible de 7 Wonders : à chaque tour, prenez une carte visible dans la réserve commune (parfois en payant un supplément pour la carte du dessus) et ajoutez-la à votre civilisation. Construisez la merveille la plus prestigieuse en fin de partie.",
  alhambra:
    "Achetez des tuiles bâtiment avec l'une de quatre monnaies disponibles pour agrandir votre palais, en respectant les règles de connexion aux murs et portes déjà posés. Des décomptes de points réguliers récompensent la plus grande diversité de bâtiments.",
  "chronicles-of-crime":
    "Avec l'aide d'une application dédiée, explorez des scènes de crime en réalité virtuelle, interrogez des témoins en scannant leurs cartes et recoupez les indices pour résoudre l'enquête avant la fin du temps imparti.",
  concordia:
    "Envoyez des colons dans les provinces de l'Empire romain pour produire des ressources, en jouant des cartes qui déterminent vos actions disponibles. Rachetez ces cartes en fin de partie pour un bonus final basé sur votre expansion. Pas de conflit direct entre joueurs.",
  barrage:
    "Sur cinq tours, planifiez vos actions à l'avance sur une roue de construction (elles ne se déclenchent qu'après un tour complet), tout en captant l'eau des rivières partagées pour alimenter vos barrages et centrales. Le plus grand empire hydroélectrique gagne.",
};
