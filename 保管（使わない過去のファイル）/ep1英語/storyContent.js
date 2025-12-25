// ========== RYO-CHAN's Adventure - Complete Audio Coverage Story Content ==========
console.log('📚 [storyContent] Complete Audio Coverage Story Content Loading...');

const storyContent = [
    // ========== Scene 1: The Awakening ==========
    { 
        text: "<span>EPISODE 1: <span class='emphasis'>THE AWAKENING</span>", 
        bg: "bg1", 
        speed: 0.5,
        position: "center", 
        audio: "mushi.m4a",
        scene: "scene1",
        sceneTitle: "The Awakening"
    },
    { 
        text: "A night dominated by a full moon that illuminated the stone steps of an ancient shrine.", 
        bg: "bg1", 
        speed: 0.5,
        audio: "mushi.m4a", // 継続
        scene: "scene1_content"
    },
    { 
        text: "Beyond the weathered torii gate, a single beam of light crept along the moss-covered stone pavement.", 
        bg: "bg1", 
        speed: 0.5,
        audio: "mushi.m4a" // 継続
    },
    { 
        text: "The light stopped at the main hall, revealing a small figure sleeping there.", 
        bg: "bg1", 
        speed: 0.5,
        audio: "mushi.m4a" // 継続
    },
    { 
        text: "As if guided by fate, a dog had wandered into this shrine and fallen asleep from exhaustion.", 
        bg: "bg1", 
        speed: 0.5,
        audio: "mushi.m4a" // 継続
    },
    { 
        text: "This was RYO-CHAN, a Miniature Schnauzer.", 
        bg: "bg1", 
        speed: 0.5,
        audio: "mushi.m4a" // 継続
    },
    { 
        text: "The small samurai armor covering his body faintly glowed, reflecting the moonlight.", 
        bg: "bg1", 
        speed: 0.5,
        audio: "mushi.m4a" // 継続
    },
    { 
        text: "Despite the windless night, the cherry trees began to sway, and blossoms danced in the air.", 
        bg: "bg11", 
        speed: 0.5, 
        audio: "moon.m4a" // 音楽変更点
    },
    { 
        text: "The moment the full moon reached its zenith, a strong beam of light struck RYO-CHAN.", 
        bg: "bg11", 
        speed: 0.5,
        audio: "moon.m4a" // 継続
    },
    { 
        text: "This wasn't ordinary moonlight—it was bluish-white and pulsating as if alive.", 
        bg: "bg2", 
        speed: 0.5, 
        audio: "moon.m4a", // 継続
        scene: "scene2",
        sceneTitle: "Awakening Moment"
    },
    { 
        text: "RYO-CHAN's body trembled, and blue light began to leak through the gaps in his armor.", 
        bg: "bg2", 
        speed: 0.5,
        audio: "moon.m4a" // 継続
    },
    { 
        text: "Slowly, his eyes opened...", 
        bg: "bg2", 
        speed: 0.5,
        audio: "moon.m4a" // 継続
    },

    // ========== Scene 2: First Consciousness ==========
    { 
        speaker: "RYO-CHAN", 
        text: "Ugh... where am I...?", 
        bg: "bg2", 
        speed: 0.5,
        audio: "moon.m4a" // 継続
    },
    { 
        text: "RYO-CHAN looked around with a dazed mind.", 
        bg: "bg2", 
        speed: 0.5,
        audio: "moon.m4a" // 継続
    },
    { 
        text: "An unfamiliar shrine. Cherry blossoms that had begun falling without notice.", 
        bg: "bg2", 
        speed: 0.5,
        audio: "moon.m4a" // 継続
    },
    { 
        text: "And a strange warmth welling up from within his body.", 
        bg: "bg2", 
        speed: 0.5,
        audio: "moon.m4a" // 継続
    },
    { 
        speaker: "RYO-CHAN", 
        text: "Why am I here?", 
        bg: "bg2", 
        speed: 0.5,
        audio: "moon.m4a" // 継続
    },
    { 
        text: "There was no one to answer. Only cherry blossoms continued to dance around him.", 
        bg: "bg2", 
        speed: 0.5,
        audio: "moon.m4a" // 継続
    },
    { 
        text: "Suddenly, the petals began to gather, swirling into a vortex.", 
        bg: "bg2", 
        speed: 0.5,
        audio: "moon.m4a" // 継続
    },
    { 
        text: "From the light emerged an old man with a mystical aura, eyes reflecting deep wisdom, and a warm smile.", 
        bg: "bg2", 
        speed: 0.5,
        audio: "moon.m4a" // 継続
    },

    // ========== Scene 3: The Guardian Appears ==========
    { 
        speaker: "OLD MAN", 
        text: "It seems you have awakened from your long slumber, RYO-CHAN.", 
        bg: "bg8", 
        speed: 0.5,
        position: "bottom", 
        audio: "oldman.m4a", // 音楽変更点
        scene: "scene3",
        sceneTitle: "The Guardian Appears"
    },
    { 
        text: "His voice was deep and resonant, like the sound of ancient wood.", 
        bg: "bg8", 
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },
    { 
        text: "RYO-CHAN tensed, alert.", 
        bg: "bg8", 
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },
    { 
        speaker: "RYO-CHAN", 
        text: "Who are you? How do you know my name?", 
        bg: "bg8", 
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },
    { 
        text: "The old man smiled gently.", 
        bg: "bg8", 
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },
    { 
        speaker: "OLD MAN", 
        text: "I am the guardian of this shrine, and I have been waiting for you.", 
        bg: "bg8", 
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },
    { 
        speaker: "RYO-CHAN", 
        text: "Waiting? For me?", 
        bg: "bg8", 
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },

    // ========== Scene 4: The Power of the Full Moon ==========
    { 
        text: "The old man nodded and spread his hands toward the moon.", 
        bg: "bg3", 
        speed: 0.5, 
        audio: "oldman.m4a", // 継続
        scene: "scene4",
        sceneTitle: "The Power of the Full Moon"
    },
    { 
        speaker: "OLD MAN", 
        text: "Tonight is a special night.", 
        bg: "bg3", 
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },
    { 
        speaker: "OLD MAN", 
        text: "A night when the power of the full moon is strongest.", 
        bg: "bg3", 
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },
    { 
        speaker: "OLD MAN", 
        text: "And the time when the power sleeping within you awakens.", 
        bg: "bg3", 
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },
    { 
        speaker: "RYO-CHAN", 
        text: "Power? Inside me?", 
        bg: "bg3", 
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },
    { 
        speaker: "OLD MAN", 
        text: "Yes.", 
        bg: "bg3", 
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },
    { 
        text: "The old man approached quietly.", 
        bg: "bg3", 
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },

    // ========== Scene 5: The Teaching of Ki ==========
    { 
        speaker: "OLD MAN", 
        text: "Japan once had an awesome power called 'Ki'.", 
        bg: "bg3", 
        speed: 0.5,
        audio: "oldman.m4a", // 継続
        scene: "scene5",
        sceneTitle: "The Teaching of Ki"
    },
    { 
        speaker: "OLD MAN", 
        text: "A force that connected all things, full of life.", 
        bg: "bg3", 
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },
    { 
        text: "The old man tapped his staff on the ground.", 
        bg: "bg4", 
        speed: 0.5, 
        audio: "oldman.m4a" // 継続
    },
    { 
        text: "The character '氣' appeared in blue light in the air.", 
        bg: "bg4", 
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },
    { 
        speaker: "OLD MAN", 
        text: "Look at this character. It is composed of '米' and '气'.", 
        bg: "bg4",
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },
    { 
        speaker: "OLD MAN", 
        text: "The form of earth's bounty and sky's energy combined.", 
        bg: "bg4",
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },
    { 
        speaker: "OLD MAN", 
        text: "Japanese people have felt and lived with this power.", 
        bg: "bg4",
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },
    { 
        text: "His expression darkened.", 
        bg: "bg4",
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },
    { 
        speaker: "OLD MAN", 
        text: "But after the war, many characters were simplified.", 
        bg: "bg4", 
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },
    { 
        speaker: "OLD MAN", 
        text: "'氣' became '気', and its essence was lost.", 
        bg: "bg4", 
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },
    { 
        speaker: "OLD MAN", 
        text: "This wasn't just a change in characters. A part of the Japanese soul was erased.", 
        bg: "bg4", 
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },
    { 
        text: "RYO-CHAN listened silently.", 
        bg: "bg4",
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },
    { 
        text: "Strangely, he could feel the word 'Ki' that the old man spoke resonating within his body.", 
        bg: "bg4",
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },

    // ========== Scene 6: The Chosen Guardian ==========
    { 
        speaker: "RYO-CHAN", 
        text: "What does this have to do with me?", 
        bg: "bg4", 
        speed: 0.5,
        audio: "oldman.m4a", // 継続
        scene: "scene6",
        sceneTitle: "The Chosen Guardian"
    },
    { 
        speaker: "OLD MAN", 
        text: "A great deal.", 
        bg: "bg4",
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },
    { 
        text: "The old man's eyes gleamed.", 
        bg: "bg4", 
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },
    { 
        speaker: "OLD MAN", 
        text: "You have been chosen as a guardian with the power to see 'Ki'.", 
        bg: "bg4", 
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },
    { 
        speaker: "OLD MAN", 
        text: "Tonight, that power has awakened.", 
        bg: "bg4", 
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },

    // ========== Scene 7: Vision of Malevolent Ki ==========
    { 
        text: "At that moment, RYO-CHAN's vision changed.", 
        bg: "bg5", 
        speed: 0.5, 
        audio: "shadow1.m4a", // 音楽変更点
        position: "center",
        scene: "scene7",
        sceneTitle: "Vision of Malevolent Ki",
        stopAllAudio: true
    },
    { 
        text: "The world looked different.", 
        bg: "bg5", 
        speed: 0.5,
        audio: "shadow1.m4a" // 継続
    },
    { 
        text: "Blue streams of light surrounded the shrine.", 
        bg: "bg5", 
        speed: 0.5,
        audio: "shadow1.m4a" // 継続
    },
    { 
        text: "Ominous red lines extended from the direction of the city.", 
        bg: "bg5", 
        speed: 0.5,
        audio: "shadow1.m4a" // 継続
    },
    { 
        speaker: "RYO-CHAN", 
        text: "What is... that?", 
        bg: "bg5", 
        speed: 0.5,
        audio: "shadow1.m4a" // 継続
    },
    { 
        text: "RYO-CHAN pointed toward the city.", 
        bg: "bg5", 
        speed: 0.5,
        audio: "shadow1.m4a" // 継続
    },
    { 
        speaker: "OLD MAN", 
        text: "You see, that is malevolent 'Ki' in the modern world.", 
        bg: "bg5", 
        speed: 0.5, 
        audio: "shadow1.m4a", // 継続
     
    },
    { 
        speaker: "OLD MAN", 
        text: "It takes different forms to threaten & harm people.", 
        bg: "bg5", 
        speed: 0.5,
        audio: "shadow1.m4a" // 継続
    },

    // ========== Scene 8: The Blockchain Threat ==========
    { 
        text: "The old man waved his staff.", 
        bg: "bg6", 
        speed: 0.5, 
        position: "bottom", 
        audio: "shadow1.m4a", // 継続
        scene: "scene8",
        sceneTitle: "The Blockchain Threat"
    },
    { 
        text: "An image appeared in RYO-CHAN's mind.", 
        bg: "bg6", 
        speed: 0.5,
        audio: "shadow1.m4a" // 継続
    },
    { 
        text: "A figure hunched over a computer in a dark room.", 
        bg: "bg6", 
        speed: 0.5,
        audio: "shadow1.m4a" // 継続
    },
    { 
        text: "Complex code flowed across the screen, surrounded by swirling red mist.", 
        bg: "bg6", 
        speed: 0.5,
        audio: "shadow1.m4a" // 継続
    },
    { 
        speaker: "OLD MAN", 
        text: "This person is misusing a new technology called blockchain.", 
        bg: "bg6", 
        speed: 0.5,
        audio: "shadow1.m4a" // 継続
    },
    { 
        speaker: "OLD MAN", 
        text: "They steal people's assets. Ordinary eyes cannot see it, but your eyes can.", 
        bg: "bg6", 
        speed: 0.5,
        audio: "shadow1.m4a" // 継続
    },
    { 
        speaker: "RYO-CHAN", 
        text: "Blockchain?", 
        bg: "bg6", 
        speed: 0.5,
        audio: "shadow1.m4a" // 継続
    },
    { 
        text: "The term was unfamiliar to RYO-CHAN.", 
        bg: "bg6", 
        speed: 0.5,
        audio: "shadow1.m4a" // 継続
    },

    // ========== Scene 9: The Mission ==========
    { 
        speaker: "OLD MAN", 
        text: "It's a technology that will change the future.", 
        bg: "bg6", 
        speed: 0.5, 
        audio: "shadow1.m4a", // 継続
        position: "bottom",
        scene: "scene9",
        sceneTitle: "The Mission"
    },
    { 
        speaker: "OLD MAN", 
        text: "But where there is light, there is also darkness.", 
        bg: "bg6", 
        speed: 0.5,
        audio: "shadow1.m4a" // 継続
    },
    { 
        speaker: "OLD MAN", 
        text: "Your role is to find and expose the darkness and protect people from it.", 
        bg: "bg6", 
        speed: 0.5,
        audio: "shadow1.m4a" // 継続
    },
    { 
        speaker: "OLD MAN", 
        text: "You are the bridge that connects ancient wisdom with new technology.", 
        bg: "bg6", 
        speed: 0.5,
        audio: "shadow1.m4a" // 継続
    },
    { 
        text: "RYO-CHAN gazed toward the city with complex emotions.", 
        bg: "bg6", 
        speed: 0.5,
        audio: "shadow1.m4a" // 継続
    },
    { 
        text: "Indeed, he could see the flow of red 'Ki'.", 
        bg: "bg6", 
        speed: 0.5,
        audio: "shadow1.m4a" // 継続
    },
    { 
        text: "And he could sense the danger lurking beyond it.", 
        bg: "bg6", 
        speed: 0.5,
        audio: "shadow1.m4a" // 継続
    },
    { 
        speaker: "RYO-CHAN", 
        text: "But... can I really do such a thing?", 
        bg: "bg6", 
        speed: 0.5,
        audio: "shadow1.m4a" // 継続
    },
    { 
        text: "The old man smiled.", 
        bg: "bg4", 
        speed: 0.5, 
        audio: "shadow1.m4a", // 継続
        position: "bottom" 
    },

    // ========== Scene 10: The Promise of Help ==========
    { 
        speaker: "OLD MAN", 
        text: "You won't be alone.", 
        bg: "bg4", 
        speed: 0.5,
        audio: "shadow1.m4a", // 継続
        scene: "scene10",
        sceneTitle: "The Promise of Help"
    },
    { 
        speaker: "OLD MAN", 
        text: "Tomorrow, you will meet my granddaughter.", 
        bg: "bg4", 
        speed: 0.5,
        audio: "shadow1.m4a" // 継続
    },
    { 
        speaker: "OLD MAN", 
        text: "She is a blockchain researcher.", 
        bg: "bg4", 
        speed: 0.5,
        audio: "shadow1.m4a" // 継続
    },
    { 
        speaker: "OLD MAN", 
        text: "When your power combines with her skills, true protection will begin.", 
        bg: "bg4", 
        speed: 0.5,
        audio: "shadow1.m4a" // 継続
    },
    { 
        text: "RYO-CHAN contemplated deeply.", 
        bg: "bg4", 
        speed: 0.5, 
        position: "bottom", 
        audio: "shadow1.m4a" // 継続
    },
    { 
        text: "There were things only he could see.", 
        bg: "bg4", 
        speed: 0.5,
        audio: "shadow1.m4a" // 継続
    },
    { 
        text: "And with that power, he might be able to help many.", 
        bg: "bg4", 
        speed: 0.5,
        audio: "shadow1.m4a" // 継続
    },

    // ========== Scene 11: The Decision ==========
    { 
        speaker: "RYO-CHAN", 
        text: "I understand. I'll try.", 
        bg: "bg7", 
        speed: 0.5, 
        position: "bottom", 
        audio: "shadow1.m4a", // 継続
        scene: "scene11",  
        position: "bottom", 
        sceneTitle: "The Decision", 

    },
    { 
        speaker: "OLD MAN", 
        text: "There is no trying… only doing.", 
        bg: "bg7", 
        speed: 0.5,
        audio: "shadow1.m4a" // 継続
    },
    { 
        speaker: "OLD MAN", 
        text: "You must bark with courage, bite with honor!", 
        bg: "bg7", 
        speed: 0.5,
        audio: "shadow1.m4a" // 継続
    },
    { 
        text: "RYO-CHAN courageously barks!", 
        bg: "bg7", 
        speed: 0.5, 
        audio: "shadow1.m4a", // 継続
        position: "bottom" 
    },
    { 
        text: "A look of satisfaction spread across the old man's face.", 
        bg: "bg7", 
        speed: 0.5,
        audio: "shadow1.m4a" // 継続
    },
    { 
        speaker: "OLD MAN", 
        text: "Thank you, RYO-CHAN. Your journey has only just begun.", 
        bg: "bg7", 
        speed: 0.5, 
        audio: "shadow1.m4a" // 継続
    },

    // ========== Scene 12: The Departure ==========
    { 
        text: "The old man starts transforming into cherry blossoms that scatter in the wind.", 
        bg: "bg8", 
        speed: 0.5, 
        audio: "oldman.m4a", // 音楽変更点
        scene: "scene12",
        sceneTitle: "The Departure",
        stopAllAudio: true
    },
    { 
        speaker: "OLD MAN", 
        text: "Sakura will find you.", 
        bg: "bg8", 
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },
    { 
        speaker: "OLD MAN", 
        text: "'Ki' will connect the two of you...", 
        bg: "bg8", 
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },
    { 
        text: "The final words vanished in the wind.", 
        bg: "bg9", 
        speed: 0.5, 
        audio: "oldman.m4a" // 継続
    },
    { 
        text: "The shrine returned to its original stillness.", 
        bg: "bg9", 
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },
    { 
        text: "But RYO-CHAN's world had changed forever.", 
        bg: "bg9", 
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },
    { 
        text: "His armor glowed blue, and his eyes were filled with determination.", 
        bg: "bg9", 
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },

    // ========== Scene 13: The Journey Begins ==========
    { 
        text: "RYO-CHAN stands up and looks toward the evil 'Ki' flowing up from the city.", 
        bg: "bg5", 
        speed: 0.5, 
        audio: "oldman.m4a", // 継続
        scene: "scene13",
        sceneTitle: "The Journey Begins"
    },
    { 
        speaker: "RYO-CHAN", 
        text: "If this is my destiny, I'll accept it.", 
        bg: "bg5", 
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },
    { 
        text: "RYO-CHAN could see the 'Ki' flowing everywhere.", 
        bg: "bg5", 
        speed: 0.5, 
        audio: "oldman.m4a" // 継続
    },
    { 
        text: "With small paws, he runs down the shrine steps toward the city.", 
        bg: "bg5", 
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },
    { 
        text: "Guided by an ominous aura in the distance.", 
        bg: "bg5", 
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },
    { 
        text: "His figure melts into the darkness in the moonlight.", 
        bg: "bg5", 
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },
    { 
        text: "And so began The Adventures Of RYO-CHAN, the warrior guardian of 'Ki'.", 
        bg: "bg5", 
        speed: 0.5,
        audio: "oldman.m4a" // 継続
    },

    // ========== Scene 14: The Shadow's Observation ==========
   { 
        speaker: "???", 
        text: "...", 
        bg: "bg10", 
        speed: 0.1, 
        audio: "shadow2.m4a", // 音楽変更点
        scene: "scene14",
        sceneTitle: "The Shadow's Observation",
    },
    { 
        speaker: "???", 
        text: "Interesting...", 
        bg: "bg10", 
        speed: 0.2, 
        audio: "shadow2.m4a", // 音楽変更点

    },
    { 
        text: "The Japanese 'Ki' that we have been weakening for over 70 years since the war...", 
        bg: "bg10", 
        speed: 0.3,
        audio: "shadow2.m4a" // 継続
    },
    { 
        text: "To think it would attempt to revive through a single dog...", 
        bg: "bg10", 
        speed: 0.3,
        audio: "shadow2.m4a" // 継続
    },

    // ========== Final Scene: To Be Continued ==========
    { 
        text: "<span class='emphasis'>To be continued...</span>", 
        bg: "bg10", 
        speed: 0.5, 
        audio: "shadow2.m4a", // 継続
        scene: "scene_final",
        sceneTitle: "To Be Continued"
    }
];