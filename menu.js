/* eslint-disable no-dupe-keys */
"use strict";
// Цвета
const c = {
	w: "#ffffff", // белый
	br: "#bc8f8f", // коричневый
	o: "#ffc6d00", // оранжевый
	p: "#FF1493", // розовый
	lp: "#FF69B4", // светло-розовый
	r: "#FF0000", // красный
	lr: "#FA8072", // светло-красный
	g: "#f04ff1c", // зеленый
	lg: "#f4ee35d", // светло-зеленый
	v: "#f9f00d4", // фиолетовый
	lv: "#BA55D3", // светло-фиолетовый
	b: "#f004eff", // синий
	lb: "#08b3e5", // светло-синий
	gr: "#778899", // серый
	y: "#fdff00", // желтый
	ly: "#FFFDFF20" // светло-желтый
};

// Доступные ключи записи:
//   name    -- Название пункта меню
//   color   -- Цвет пункта меню
//   keybind -- Установка горячей клавиши
//   ifcmd   -- Фильтр (отображение) пункта меню, если указанная команда найдена
//   ifnocmd -- Фильтр (отображение) пункта меню, если указанная команда не найдена
//   class   -- Фильтр (отображение) пункта меню по игровому классу:
//                  warrior, lancer, slayer, berserker, sorcerer, archer, priest,
//                  elementalist, soulless, engineer, fighter, assassin, glaiver
//
// Встроенный команды:
//   mm et  [quest] [instance] -- Телепортация по Авангарду
//   mm use [id предмета]      -- Использовать предмет из инвентаря

// Настройка премиум-слотов
module.exports.premium = [
	{ command: "m", id: 45381 },
	{ command: "m $dang", id: 154901 }
	// { command: "bank", id: 60264 },
	// { command: "broker", id: 60265 },
	// { command: "store", id: 60262 },
];

// Настройка меню
module.exports.categories = {
	"Merchants": [
		{ command: "m bank", name: "Bank", color: c.lp },
		{ command: "m pbank", name: "Spec. storage", color: c.lp },
		{ command: "m cbank", name: "Wardrobe", color: c.lp },
		{ command: "m gbank", name: "Guild bank", color: c.lp },
		{ command: "ab", name: "Autobank", color: c.p, ifcmd: "ab", ifnocmd: "banker" },
		{ command: "banker", name: "Autobank", color: c.p, ifcmd: "banker", ifnocmd: "ab" },
		{},
		{ command: "m broker", name: "Broker", color: c.lb },
		{ command: "m store", name: "Merchant", color: c.g },
		{ command: "m sstore", name: "S.store", color: c.g },
		{ command: "m ssstore", name: "Magic supl.", color: c.lg },
		{ command: "m bel", name: "Bellicarium", color: c.v },
		{},
		{ command: "m vng", name: "Vanguard", color: c.b },
		{ command: "m vgc", name: "Crystals", color: c.b },
		{ command: "m guard", name: "Guardian", color: c.lb },
		{ command: "m ffstore", name: "Fish", color: c.w },
		{ command: "m vstore", name: "Peddler's", color: c.lb },
		{},
		{ command: "m acraft", name: "Alchemy", color: c.y },
		{ command: "m scraft", name: "Smelting", color: c.y },
		{ command: "m pcraft", name: "Processing", color: c.y },		
		{ command: "m fstore", name: "Cooking", color: c.y },
		{ command: "m jcraft", name: "Tailoring", color: c.y },
		{ command: "m varraz", name: "Varraz", color: c.v },
		{},		
	],
	"Nexus merchants": [
		{ command: "mm", name: "Resp. time", color: c.y, ifcmd: "bh" },
		{ command: "mm scan", name: "Scan", color: c.g, ifcmd: "bh" },
		{ command: "mm stop", name: "Stop", color: c.r, ifcmd: "bh" },
		{ command: "mm loc", name: "Location", color: c.b, ifcmd: "bh" },
	],
	"Main": [		
		{ command: "m tohw", name: "Balderon", color: c.o },
		{ command: "m $dang", name: "Dungeon's (Ctrl+Alt+H)", color: c.y, keybind: "ctrl+alt+h" },
		{},
		{ command: "clear", name: "Clear chat", color: c.w },
		{},
		{ command: "m $Loger", name: "$$$$$$$$", color: c.r, ifcmd: "logc", keybind: "ctrl+shift+n" },
		{ command: "fish", name: "Fishing", color: c.w, ifcmd: "fish" },
		{ command: "fish ui", name: "Fishing menu", color: c.w, ifcmd: "fish" },
		{ ifcmd: "seller" },
		{ command: "seller", name: "Seller Auto", color: c.o, ifcmd: "seller" },
		{ command: "seller open", name: "Open", color: c.g, ifcmd: "seller" },
		{ command: "seller sell", name: "Sell", color: c.p, ifcmd: "seller" },
		{ command: "seller del", name: "Delete trash", color: c.lr, ifcmd: "seller" },
		{ ifcmd: "seller" },
		{ command: "seller show", name: "Syntheses (Ctrl+Shift+S)", color: c.y, ifcmd: "seller" },
		{ command: "m $autogather", name: "Autogather", color: c.g, ifcmd: "ag" },
		{},
		{ command: "mb ui", name: "Mystic bot", color: c.lp, ifcmd: "mb", class: "elementalist" },
		{ command: "pb ui", name: "Priest bot", color: c.lp, ifcmd: "pb", class: "priest" },
		{ command: "bers ui", name: "Auto Zerk", color: c.lv, ifcmd: "bers", class: "berserker" },
		{ command: "sorc ui", name: "Auto Sorc", color: c.lv, ifcmd: "sorc", class: "sorcerer" },
		{ command: "ninj ui", name: "Auto Ninja", color: c.lv, ifcmd: "ninj", class: "assassin" },
		{ command: "braw ui", name: "Auto Brawler", color: c.lv, ifcmd: "braw", class: "fighter" },
		{ command: "valk ui", name: "Auto Valk", color: c.lv, ifcmd: "valk", class: "glaiver" },
		{ command: "warr ui", name: "Auto Warrior", color: c.lv, ifcmd: "warr", class: "warrior" },
		{ command: "reap ui", name: "Auto Reaper", color: c.lv, ifcmd: "reap", class: "reaper" },
		{ command: "slay ui", name: "Auto Slayer", color: c.lv, ifcmd: "slay", class: "slayer" },
		{ command: "arch ui", name: "Auto Archer", color: c.lv, ifcmd: "arch", class: "archer" },
		{ command: "lanc ui", name: "Auto Lancer", color: c.lv, ifcmd: "lanc", class: "lancer" },
		{ command: "gunn ui", name: "Auto Gunner", color: c.lv, ifcmd: "gunn", class: "engineer" },
		{ ifcmd: "fast" },
		{ command: "fast", name: "Fast On/off", color: c.v, ifcmd: "fast" },
		{ command: "fast ui", name: "Fast menu", color: c.lv, ifcmd: "fast" },
		{ command: "fast reload", name: "Fast reload", color: c.r, ifcmd: "fast" },
		{ command: "back ui", name: "Bacstab menu", color: c.lv, ifcmd: "back" },
		{ ifcmd: "macro" },
		{ command: "proxy reload macro-maker", name: "reload macro", color: c.r },
		{ command: "macro", name: "macro on/off", color: c.y },
		{},		
		{ command: "pr", name: "PR on/off", color: c.y, ifcmd: "pr"},		
		{ command: "pinger toggle", name: "pinger on/off", color: c.y, ifcmd: "pinger"},
		{ command: "pinger color", name: "pinger color toggle", color: c.y, ifcmd: "pinger"},
		{},
		{ command: "u ui", name: "Unicast", color: c.p, ifcmd: "u" },
		{ command: "fps", name: "FPS Menu", color: c.y, ifcmd: "fps" },
		{ command: "fps 0", name: "FPS 0", color: c.w, ifcmd: "fps" },
		{ command: "fps 1", name: "FPS 1", color: c.w, ifcmd: "fps" },
		{ command: "fps 2", name: "FPS 2", color: c.w, ifcmd: "fps" },
		{ command: "fps 3", name: "FPS 3", color: c.w, ifcmd: "fps" },
		{ ifcmd: "fps", ifcmd: "box" },
		{ command: "box", name: "OpenBox", color: c.v, ifcmd: "box" },
		{ command: "translate send", name: "Auto translation", color: c.lb, ifcmd: "translate" },
		{ ifcmd: "auto" },
		{ command: "auto gq", name: "Auto Guild Quest", color: c.lv, ifcmd: "auto" },
		{ command: "auto vq", name: "Auto Vanguard", color: c.lv, ifcmd: "auto" },
		{ command: "auto gl", name: "Auto Guard", color: c.lv, ifcmd: "auto" },
		{ ifcmd: "invg", ifcmd: "lfg", ifcmd: "drk" },
		{ command: "invg", name: "Autoaccept guild", color: c.lb, ifcmd: "invg" },
		{ command: "lfg", name: "Autoaccept LFG", color: c.lb, ifcmd: "lfg" },
		{},
		{ command: "loot auto", name: "Autoloot", color: c.p, ifcmd: "loot" },
		{ command: "bb", name: "BodyBlock", color: c.lp, ifcmd: "bb" },		
		{ ifcmd: "drk" },
		{ command: "drk", name: "Darkan Wings", color: c.p, ifcmd: "drk" },		
		{},
		{ command: "m drop", name: "Leave party", color: c.y },
		{ command: "m disband", name: "Disband", color: c.o },
		{ command: "m reset", name: "Reset", color: c.g },
		{ command: "m lobby", name: "Characters", color: c.p },
		{},
		{ command: "m exit", name: "Fast Exit Game", color: c.r }
	],
	"Гайд (tera-guide)": [
		{ command: "guide", name: "On/Off", color: c.o },
		{ command: "guide ui", name: "Settings", ifcmd: "guide" },
		{ command: "guide voice", name: "Voice", color: c.y, ifcmd: "guide" },
		{ command: "guide spawnObject", name: "Objects", color: c.y, ifcmd: "guide" },
		{ command: "guide stream", name: "Stream", color: c.lb, ifcmd: "guide" },
		{ command: "guide debug ui", name: "Debug", color: c.b, ifcmd: "guide" },
		{},
		{},
		{ command: "m $setting", name: "Others Menu Settings (Ctrl+Alt+S)", color: c.v, keybind: "ctrl+alt+s" }
	]
};
module.exports.pages = {
	dang: {
		"Teleport to Dungeons": [
			{ command: "m et 2190 9981", name: "Velik's Sanctuary (Hard)", color: c.p },
			{},
			{ command: "m et 2173 3102", name: "Draakon Arena", color: c.v },
			{},
			{ command: "m et 2168 3023", name: "Akalath Quarantine", color: c.b },
			{},
			{ command: "m et 1900 9750", name: "Rift Edge", color: c.y },
			{},
			{ command: "m et 2166 3101", name: "Gossamer Vault", color: c.g },
			{},
			{ command: "m et 2147 9794", name: "Thaumetal Refinery", color: c.o },
			{},
			{ command: "m et 2152 9735", name: "RK-9 Kennel", color: c.g },
			{},
			{ command: "m et 2150 9055", name: "Ravenous Gorge", color: c.y }
		],
		"Low lvl": [
			{ command: "m tohw", name: "Balderon", color: c.o },
			{ command: "m et 98311 9069", name: "Training ground(Balderon)", color: c.y },
			{},
			{ command: "m et 2101 9809", name: "Macellarius Catacombs", color: c.g },
			{},
			{ command: "m et 800010 9073", name: "Ebon Tower", color: c.lb },
			{},
			{ command: "m et 800009 9076", name: "Labyrinth of Terror", color: c.lb },
			{},
			{ command: "m et 800006 9072", name: "Golden Labyrinth", color: c.lb },
			{},
			{ command: "m et 800005 9071", name: "Necromancer Tomb", color: c.lb },
			{},
			{ command: "m et 800004 9089", name: "Cultists' Refuge", color: c.lb },
			{},
			{ command: "m et 800003 9979", name: "Saravash's Ascent", color: c.lb },
			{},
			{ command: "m et 800002 9088", name: "Sinestral Manor", color: c.lb }
		],
		"Events": [
			{ command: "m et 7001 230", name: "Sun Feslival", color: c.o },
			{},
			{ command: "m et 7003 210", name: "Beach Party", color: c.o }
		]
	},
	
	Loger: {
		Mods: [
			{ command: "proxy reload packetslogger", name: "Logger reload", color: c.p, ifcmd: "logs" },
			{ ifcmd: "logs" },
			{ command: "logc", name: "LOG C", color: c.bl, ifcmd: "logc" },
			{ command: "logs", name: "LOG S", color: c.o, ifcmd: "logs" },
			{ ifcmd: "ten" },
			{ command: "ten on", name: "Auto Nostrum on", color: c.g, ifcmd: "ten" },
			{ command: "ten off", name: "Auto Nostrum off", color: c.r, ifcmd: "ten" },
			{ command: "ten ui", name: "Auto Nostrum menu", color: c.y, ifcmd: "ten" }
		],
		Teleport: [
			{ command: "tp zone", name: "Teleport", color: c.b, ifcmd: "tp" },
			{ command: "tp to", name: "Zone", color: c.r, ifcmd: "tp" },
			{ ifcmd: "tp" },
			{ command: "just blink 100", name: "Blink forward", keybind: "ctrl+alt+w" },
			{ command: "just up 500", name: "Blink UP" },
			{ command: "just down 250", name: "Blink DOWN" },
			{ command: "tp drop -1", name: "Kill yourself", color: c.r, ifcmd: "tp" },
			{ ifcmd: "tp" },
			{ command: "tp drop 1", name: "1%", color: c.r, ifcmd: "tp" },
			{ command: "tp drop 10", name: "10%", color: c.r, ifcmd: "tp" },
			{ command: "tp drop 20", name: "20%", color: c.o, ifcmd: "tp" },
			{ command: "tp drop 30", name: "30%", color: c.o, ifcmd: "tp" },
			{ command: "tp drop 40", name: "40%", color: c.y, ifcmd: "tp" },
			{ command: "tp drop 50", name: "50%", color: c.y, ifcmd: "tp" },
			{ command: "tp drop 60", name: "60%", color: c.lb, ifcmd: "tp" },
			{ command: "tp drop 70", name: "70%", color: c.lb, ifcmd: "tp" },
			{ command: "tp drop 80", name: "80%", color: c.lg, ifcmd: "tp" },
			{ command: "tp drop 90", name: "90%", color: c.g, ifcmd: "tp" }
		],
		Channels: [
			{ command: "m cha 1", name: "(_1_)", color: c.g },
			{ command: "m cha 2", name: "(_2_)", color: c.g },
			{ command: "m cha 3", name: "(_3_)", color: c.g },
			{ command: "m cha 4", name: "(_4_)", color: c.g },
			{ command: "m cha 5", name: "(_5_)", color: c.lv },
			{ command: "m cha 6", name: "(_6_)", color: c.lv },
			{ command: "m cha 7", name: "(_7_)", color: c.lb },
			{ command: "m cha 8", name: "(_8_)", color: c.lb }
		],		
	},
	setting: {
		Settings: [
			{ command: "m premium", name: "Add. buttons VIP-panel", color: c.y },
			{},
			{ command: "m scene", name: "Skipping video intros", color: c.lp },
			{},
			{ command: "m drunk", name: "Disabling drunk screen", color: c.lg },
			{},
			{ command: "m brooch", name: "Disabling brooch animations", color: c.lp },
			{},
			{ command: "m build", name: "Hiding Trees. Signs. Calendar", color: c.g },
			{},
			{ command: "m fix", name: "JustSpam F", color: c.lv },
			{},
			{ command: "m autoaccept", name: "Auto accept party", color: c.lg },
			{},
			{ command: "m autoreset", name: "Auto Accept (Dungeon Reset / Party Disband)", color: c.g },
			{},
			{ command: "m tolobby", name: "Disabling the timer when exiting to select characters", color: c.y },
			{},
			{ command: "m ggreset", name: "Auto reset of the Gillieglade", color: c.lp },
			{},
			{ command: "m autobox", name: "Automatic opening of boxes in one click", color: c.v },
			{},
			{ command: "m rebuff", name: "Auto rebuff self-res and buff after reset bomb(priest)", color: c.g },
			{},
			{ command: "m backwalk", name: "Walk backwards (only others can see)", color: c.y },
			{},
			{ command: "m circlewalk", name: "Walk while spinning (only visible to others)", color: c.o },
			{},
			{ command: "m $Loger", name: "$$$$$$$$", color: c.r }
		]
	},
	autogather: {
		Commands: [
			{ command: "ag", name: "Start | Stop Autogather", color: c.p, ifcmd: "ag" },
			{ command: "ag ui", name: "Menu", color: c.lb, ifcmd: "ag" }
		],
		Plants: [
			{ command: "ag setid 1", name: " Harmony Grass", color: c.g },
			{},
			{ command: "ag setid 2", name: " Wild Cobseed", color: c.g },
			{},
			{ command: "ag setid 3", name: " Veridia Root", color: c.g },
			{},
			{ command: "ag setid 4", name: " Mushroom Cap", color: c.g },
			{},
			{ command: "ag setid 5", name: " Moongourd", color: c.g },
			{},
			{ command: "ag setid 6", name: " Apple", color: c.g }
		],
		Ore: [
			{ command: "ag setid 101", name: " Plain Stone", color: c.o },
			{},
			{ command: "ag setid 102", name: " Cobala Ore", color: c.o },
			{},
			{ command: "ag setid 103", name: " Shadmetal Ore", color: c.o },
			{},
			{ command: "ag setid 104", name: " Xermetal Ore", color: c.o },
			{},
			{ command: "ag setid 105", name: " Normetal Ore", color: c.o },
			{},
			{ command: "ag setid 106", name: " Galborne Ore", color: c.o },
			{},
			{ command: "ag setid 301", name: " Duranium Ore", color: c.o },
			{},
			{ command: "ag setid 814", name: " Exodor Ore", color: c.lv }
		],
		Essence: [
			{ command: "ag setid 201", name: " Achoromic Essence", color: c.lb },
			{},
			{ command: "ag setid 202", name: " Crimson Essence", color: c.lb },
			{},
			{ command: "ag setid 203", name: " Earth Essence", color: c.lb },
			{},
			{ command: "ag setid 204", name: " Azure Essence", color: c.lb },
			{},
			{ command: "ag setid 205", name: " Opal Essence", color: c.lb },
			{},
			{ command: "ag setid 206", name: " Obsidian Essence", color: c.lb },
			{},
			{ command: "ag setid 601", name: " Duranium Essence", color: c.lb }
		]
	}
};