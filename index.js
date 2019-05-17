require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()
var messages = [
"Mmm",
"I don't want to be his queen. I want to go home.",
"I don't know.",
"Thank you ser...",
"Are you... from my country?",
"Thank you, Magister.",
"Ser Jorah I... I don't know how to say 'Thank you' in Dothraki.",
"Do you know the Common Tongue?",
"Is 'No' the only word that you know?",
"Have you ever seen a dragon?",
"Everywhere? Even in the East?",
"The Moon?",
"Leave me with her.",
"Why did the trader from Qarth tell you these stories?",
"How old were you?",
"Nine?!",
"Can you teach me how to make the Khal happy?",
"Will it take 3 years?",
"Well she... sounds like an interesting woman!",
"I... I don't think Drogo will like it with me on top..",
"*shakes head*",
"I... I don't think that this is the Dothraki way..",
"No!",
"Ajjalan anha zalat vitiherat yer hatif", //"Tonight I would look upon your face.",
"Do the Dothraki buy their slaves?",
"From who?",
"Tell them all to stop.",
"Until I command them otherwise.",
"Not a Queen... A Khaleesi.",
"No!",
"Please! Please, don't hurt him! Tell him: I don't want my brother harmed!",
"At.. jaka",
"Ath jahakar..",
"Athjahakar",
"Ooh... W-what are you doing?",
"Me rakh", //"It's a boy.",
"Anha sekke nesa.", //"I know."
"Hush now, it's alright. Irri, take her and leave us.",
"Why did you hit her?",
"I wasn't commanding you! I just wanted to invite you to supper!",
"It's a gift. I had it made for you",
"Please..",
"Stop.",
"You've no right to a braid, you've won no victories yet.",
"I am a Khaleesi of the Dothraki! I am the wife of the great Khal and I carry his son inside me! The next time you raise a hand to me, will be the last time you have hands.",
"Khalakka dothrae mr'anha", //"A prince rides inside me."
"Ma me nem ahakee ma Rhaego!", //"And he shall be called Rhaego.
"Viserys, please!",
"He says yes. You shall have a golden crown, that men shall tremble to behold.",
"No.",
"He was no dragon. Fire cannot kill a dragon.",
"K'asi assikhqoyisiri vezh adothrae nakhaan rhaesheseri", //"According to the prophecy the stallion will ride to the ends of the world."
"Sorfosor nakho vosecchi. Sani sorfi vekha yomme. Sorfo athyolari anni.", //"The Earth never ends. There are many dirts. The dirts of my birth."
"Rhaeshi, sek.", //"Lands, yes"
"Dalen rhaggat eveth ma ale: ido fini ovethi yomme.", //"There are thousands of ships. Wooden that fly across the sea."
"Me vos ador. Me...me...throne.", //"It's not a chair. It's...it's...throne."
"Ador finaan khal nevasoe...che khaleesi.", //"A chair for a king to sit upon...or a queen."
"Can't you help me make him understand?",
"My brother.. was a fool, I know, but he was the rightful heir to the Seven Kingdoms.",
"Have I said something funny, Ser?",
"And because he had dragons.",
"You don't believe it!",
"Well, I'll come with you.",
"Rise.",
"I'd still like to taste that wine.",
"You honor me, ser!",
"I hope to repay your kindness someday",
"Something wrong?",
"Do as he says.",
"You will drink.",
"Ti mae k'asi, che Khal Drogo anesa valzerikh.", //"Do as I command or Khal Drogo will know the reason why."
"Mago asta k'athjilari, zhey shekh ma shieraki anni. Anha ray qoraso san ohari asshekh majin mori nem vos osaji.", //"Mago speaks the truth, my sun and stars. I have claimed many daughters this day so they cannot be mounted."
"Anha nem allayafak vassandik mora. Hash dothraki shafki'th saji mora hash mori jif kemoe ma moroa.", //"It pleases me to keep them safe. If your riders would mount them, let them take them as wives."
"Zhavvorsa vadakhera ma hrazef ma vaf akkate. ", //"The dragon feeds on horse and lamb alike. "
"Anha Khaleesi. Anha assok yera sekosshi.", //"I am Khaleesi. I do command you."
"Shekh ma shieraki anni zisa.", //"My sun and stars is hurt."
"Finne koalaki?", //"Where are the healers."
"Who are you?",
"Me anni. Me vastoe.", //She's mine. Let her speak."
"Azhas maan affisat zis yeri, shekh ma shieraki anni. Me azzisa anna jin tihat meyer qiyae.", //"Let her clean your wound my sun and stars. It makes me hurt to see you bleed."
"Save him, and I will free you I swear it.",
"You must know a way! Some... some magic..",
"Do it. Save him.",
"Gold! Whatever you want!",
"My death.",
"*nods*",
"Kill her, and you kill your Khal!",
"I am your Khaleesi! I tell you what is forbidden!",
"Take her and leave. Take her!",
"No one will enter.",
"Bring him back to me.",
"I have to save him...",
"Jini vee", //This must be."
"Vos! Yer laz vos", //"No, you can't."
"The baby... is coming!",
"*moans*",
"Where is Khal Drogo?",
"Show me what I have bought with my son's life.",
"This is not life! When will he be as he was?",
"Leave us.",
"I have nothing more to fear from this woman. Go!",
"You knew what I was buying, and you knew the price.",
"This is not God's work! My child was innocent!",
"I spoke for you! I *saved* you!",
"Your life.",
"Shekh ma shieraki anni!", //"My sun and stars."
"Hash yer vineseri dothrakh ataki kishi, zhey shekh ma shieraki anni?", //"Do you remember our first ride, my sun and stars?"
"Hash yer laz chari anna; hash yer ray vos o, attihas anna.", //"If you are still in there, if you haven't gone away, show me."
"Yer lajak. Yer ayyeyoon lajakoon. Anha zigerek yeroon lajat ajjin.", //"You're a fighter. You've always been a fighter. I need you to fight now."
"Affin shekh yola she jimma ma drivoe she titha...Arrek yer ajadi save, shekh ma shieraki anni.", //"I know you're very far away. but come back to me, my sun and stars."
"They were not given to me to sell.",
"I must. You don't understand.",
"Is that what you fear?",
"You will be my Khalasar!",
"I see the faces of slaves! I free you!",
"Take off your collars, go if you wish, no one will stop you. But if you stay, it will be as brothers and sisters. As husbands and wives.",
"Ser Jorah, bind this woman to the pyre.",
"You swore to obey me.",
"I am Danaerys Stormborn, of House Targaryen, of the blood of Old Valyria. I *am* the Dragon's Daughter! And I swear to you, that those who would harm you would die screaming!",
"I will. But it's not your screams I want. Only your life.",
"He said they ate meat.",
"My brother didn't know anything about dragons. He didn't know anything about anything.",
"E",
"She was Drogo's first gift to me.",
"I promised to protect them. I promised them their enemies would die screaming. How do I make starvation scream?",
"Does it ever end?",
"And you're sure there's no other way.",
"No one will take my dragons.",
"As you are mine.",
"Zhey qoy qoyi!", //"Blood of my blood"
"Zhey Rakharo, zhey Aggo, zhey Kovarro. Fichi hrazef zinayi kishi.", //"Rakaro, Aggo, Kovarro. Take our remaining horses."
"Ma yer adothrae tith; ma yer heshtith; ma yer valshtith.", //"You ride east; you southeast; and you northeast."
"Vaes, che thiri che drivi. Ma verakasaris ma voji. Che ashefaes che tozaraes che Havazzhife Zhokwa. Ezo athchilar Athasaroon Virzetha hatif kishi, ma reki vekha yomme moon.", //"Cities, living or dead. Caravans and people. Rivers, or lakes, or the Great Salt Sea. Find how far the Red Waste extends before us, and what lies on the other side."
"Rakharo. Yer athzalar nakhoki anni, zhey qoy qoyi.", //"Rakharo. You are my last hope, blood of my blood."
"Blood of my blood...",
"Who did this?",
"They will like it far less when I am done with them.",
"Affa, affa. Mori laz vos atthi oakah vosecchi.", //"Shh… They cannot kill his soul."
"Affa. Kisha amariki vorsqoy ha maan. Majin anha astak yeraan asqoy, me-Rakharo adothrae kimi mae ajjalan.", //"Shh. We will build him a funeral pyre. And I promise you, Rakharo will ride with his ancestors tonight."
"Jin vos sajo yeri.", //"This is not your horse."
"Zhey Qarth?", //"Qarth?"
"Hash mori vazhi kishaan emralat?", //"Will they let us in?"
"What do you know of this place?",
"I thought we were welcome here.",
"Horde?",
"My name is Danaerys-",
"You know me, my Lord?",
"And what should I call you?",
"The beauty of Quarth is legenda-",
"Qarth.",
"My... friend. We have travelled very far. We have no food, no water. Once I see my people fed I would be honored-",
"I am not a liar.",
"Where I come from, guests are treated with respect, not insulted at the gates.",
"What are you doing? You promised to receive me!",
"If you do not let us in, all of us *will* die!",
"Thirteen!",
"When my dragons are grown, we will take back what was stolen from me, and *destroy* those who have wronged me! We will lay waste to armies and burn cities to the ground! Turn us away, and we will burn you first.",
"It sounds wonderful.",
"Please excuse me for a moment",
"What are they doing?",
"Kisha nevaki mae! Yer laz vos vefenari mae, vos tavi mae, vos ivvisi mae.", //"We are his guests! You can not pry it, nor chop it, nor melt it."
"Kash athezar kishi vos akka.", //"During our departure, not even."
"Hash idrik kishi vijazero kisha Athasaroon Virzetha hash yer zali zifichelat moon? Anha acharak vos alikh.", //"Our host saved us from the Red Waste and you want to steal from him? I will hear no more."
"My brother used to say the only thing the Dothraki know how to do is steal the things better men have built.",
"That's not the kind of Queen I'm going to be.",
"What is the House of the Undying?",
"*laughs*",
"The Seven Kingdoms are at war with one another! Four false kings destroying the country-",
"The Usurper is dead! The Starks fight the Lannisters! The Baratheons fight each other!",
"The time to strike is now! We need to find ships and an army, or we'll spend the rest of our lives rotting away at the edge of the world.",
"And if I'd listened to that advice outside the gates of Qarth, we'd all be dead by now.",
"Do not speak to me like I'm a child!",
"What do you want? Tell me.",
"Why?",
"So what would you have me do, as my advisor?",
"And how do I get this ship?",
"I look forward to meeting him.",
"The Spice King refuses me because I'm a bad investment, the Silk King won't supprt me because of his business with the Lannisters- why offend his best customer? And the Copper King offers me a single ship on the condition that I lie with him for a night. Does he think I will whore myself for a boat?",
"Where are they?",
"WHERE ARE MY DRAGONS?!",
"You came back.",
"Irri is dead.",
"She's dead. She died alone, she died for me, and I couldn't protect her.",
"We can't find her. She must be dead too.",
"I lead my people out of the Red Waste and into the slaughterhouse.",
"You went to find me a ship.",
"These people?",
"And who is to be trusted? Who are my people? The Targaryens? I only knew one, my brother, and he would've let a thousand men rape me if it would've gotten him a crown. The Dothraki? Most of them turned from me the day Khal Drogo fell from his horse.",
"The people in Westeros don't know I'm alive.",
"And then what? They'll pray for my return? They'll wave dragon banners and shout for my name? That's what my brother believed and he was a fool.",
"There it is, 'trust me'. And it's you I should trust, Ser Jorah? Only you?",
"I don't *need* trust any longer. I don't want it and I don't have room for it.",
"And you are too familiar.",
"Find my dragons.",
"Astapor?",
"They have my dragons. A mother does not flee without her children.",
"You should sail to Astapor, I'm sure you'll be safe there.",
"Then serve me. If my dragons are in the House of the Undying, then take me there.",
"And what of my magic? You saw me step into the fire, you watched the witch burn! What did the flames do to me? Do you remember?",
"They are my children. And they are the only children I will ever have. Take me to them.",
"Azhi morea kis tat.", //"Let them try."
"Jini athmovezar qoyi ven athmovezar fini fich yera anhoon—fini fich yera anhoon hatif…", //"This is dark magic, like the magic that took you from me. Took you from before I could even…"
"Ishish anha drivak vosma anha ray nesok mae vos. Ishish anha ma yeroon she Rhaeshi Ajjalani.", //"Maybe I am dead and I just don’t know it yet. Maybe I am with you in the Night Lands."
"Jini vena tikh meyer jif ti.", //"That sounds like something that you would do."
"This is not my home. My home is across the sea where my people are waiting for me.",
"Dracarys.", //"Dragonfire"
"Not fast enough. I can't wait that long.",
"I need an army.",
"The greatest *slave* soldiers in the world. The distinction means a great deal to some people.",
"It's too beautiful a day to argue.",
"Don't mock them. They're the first Dothraki who've ever been on a ship. They followed me across the poison water. If they'll do it, others will. And with a proper Khalasar-",
"They may suit my needs. Tell me of their training.",
"Tell the Good Master, there is no need-",
"You take a babe, from it's mothers eyes, kill it as she watches, and pay for her pain with a silver coin?",
"How many do you have to sell?",
"8000 *thousand* dead babies.",
"Once I own an army of slaves, what will I be?",
"*giggles*",
"The Warlocks.",
"I owe you my life, Ser.",
"You know this man?",
"",
];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', message => {
    if (message.isMentioned(client.user)) {
		var rand = messages[Math.floor(Math.random() * messages.length)];
		
		message.channel.send(rand);
	}	
});

client.login(process.env.BOT_TOKEN)