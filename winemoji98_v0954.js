/*
HungaromojiRetró v0.9.5.4
Copyright © 2025 Urbanmove 8 Qatar Sole Prop.
All rights reserved.

--- NOTICE ---
HungaromojiRetró is a forked version of the original Hungaromoji, 
designed specifically for our Windows 98 Web Simulator Beta. 
Interested in contributing? Join us and help improve the simulator!

--- FIGYELMEZTETÉS ---
A HungaromojiRetró a eredeti Hungaromoji egy módosított változata,
kifejezetten a Windows 98 Web Simulator Beta számára készült.
Szeretnél hozzájárulni? Csatlakozz, és segíts fejleszteni a szimulátort!

────────────────────────────────────────────
Emoji Assets:
• Original emoji artwork and base assets © Penguinmod.com — MIT License.
• All images, animations, and source code are distributed under the MIT License.
• Modification and redistribution are allowed under MIT terms, with proper credit.

────────────────────────────────────────────
Other Assets & References:
• Book excerpts © Móra Könyvkiadó & feketeistvan.hu — All rights reserved.
• OMSZ logo & STOP sign © Wikimedia Commons — Public domain / All rights reserved.
• 100 Hungarian Forint image © Magyar Nemzeti Bank — All rights reserved.
• Haragos Pista © Univer Csoport — All rights reserved.
• Hévíz boat photo © Balatoni Hajózás Zrt. (BAHART), via Hungarian Wikipedia — All rights reserved.
• Bus stop sign © KRESZ official materials — All rights reserved.
• Train images (e.g., Bzmot) © MÁV Zrt. — All rights reserved.
• Jászkeszeg fish image by Kristian Kostov, Wikipedia — CC BY 3.0 (modified)
• OMSZ logo by OMSZ (uploaded by Madboy74), Wikimedia Commons — CC BY 4.0
• Góbé Plane Emoji by Regasterios, Wikipedia — CC BY-SA 3.0
• Tu-154 Malév plane image by Fæ, Wikipedia — GFDL 1.2
• Negro image by Metsavend, Wikipedia — CC BY-SA 4.0
• Budgerigar image by Flickr Upload Bot, Wikipedia — CC BY-SA 2.0
• ...and more!

────────────────────────────────────────────
License:
This project is licensed under the Apache License, Version 2.0 (the “License”).  
You may not use this file except in compliance with the License.  
Obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0

Unless required by law or agreed to in writing, software distributed under 
the License is provided “AS IS”, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND.

────────────────────────────────────────────
*/


(function() {
    // Variables using modern 'const' for better code quality
    const emojiMap = {
        "👩": "https://library.penguinmod.com/files/emojis/woman.png",
        "👨": "https://library.penguinmod.com/files/emojis/man.png",
        "👧": "https://library.penguinmod.com/files/emojis/girl.png",
        "👦": "https://library.penguinmod.com/files/emojis/boy.png",
        "💀": "https://library.penguinmod.com/files/emojis/skull.png",
        "😀": "https://library.penguinmod.com/files/emojis/animatedsmile.png",
        "😭": "https://library.penguinmod.com/files/emojis/sobbing.png",
        "💻": "https://library.penguinmod.com/files/emojis/laptop.png",
        "🎉": "https://library.penguinmod.com/files/emojis/tada.png",
        "🥳": "https://library.penguinmod.com/files/emojis/party.png",
        "🚗": "https://urbanmove8.neocities.org/emojis/suzukiswift.png",
        "🤓": "https://library.penguinmod.com/files/emojis/nerd.png",
        "👉": "https://library.penguinmod.com/files/emojis/pointright.png",
        "👈": "https://library.penguinmod.com/files/emojis/pointleft.png",
        "👇": "https://library.penguinmod.com/files/emojis/pointdown.png",
        "🫵": "https://library.penguinmod.com/files/emojis/pointatyou.png",
        "☝️": "https://library.penguinmod.com/files/emojis/pointup.png",
        "🗿": "https://library.penguinmod.com/files/emojis/moai.png",
        "📱": "https://urbanmove8.neocities.org/emojis/kekfontelefon.png",
        "🪙": "https://urbanmove8.neocities.org/kekhegy/kepek/100-forintos.png",
        "🌉": "https://urbanmove8.neocities.org/kekhegy/kepek/lanchid.png",
        "📗": "https://www.feketeistvan.hu/wp-content/uploads/2024/07/konyborito_mora_tuskevar.png",
        "📙": "https://mora.hu/content/2021/3/Product/fekete_istvan_vuk.png",
        "📕": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Egricsillagok.jpg",
        "🙂": "https://library.penguinmod.com/files/emojis/smile.png",
        "🤡": "https://library.penguinmod.com/files/emojis/clown.png",
        "🤑": "https://library.penguinmod.com/files/emojis/money.png",
        "🙄": "https://library.penguinmod.com/files/emojis/rollingeyes.png",
        "😍": "https://library.penguinmod.com/files/emojis/hearteyes.png",
        "😞": "https://library.penguinmod.com/files/emojis/animatedfrown.png",
        "😫": "https://library.penguinmod.com/files/emojis/annoyed.png",
        "🇱🇺": "https://urbanmove8.neocities.org/images/flags/luxemburg.png",
        "🇭🇺": "https://urbanmove8.neocities.org/images/flags/hungary.png",
        /* "🇭🇺": "https://urbanmove8.neocities.org/images/flags/hungary1956.png", */ //It is important to remember about 1956 October 23...
        "🇵🇱": "https://urbanmove8.neocities.org/images/flags/poland.png",
        "🇨🇿": "https://urbanmove8.neocities.org/images/flags/czech.png",
        "🇦🇹": "https://urbanmove8.neocities.org/images/flags/austria.png",
        "🇪🇺": "https://urbanmove8.neocities.org/images/flags/eu.png",
        "🌃": "https://urbanmove8.neocities.org/kekhegy/kepek/orszaghaz.png",
        "⚕️": "https://upload.wikimedia.org/wikipedia/commons/3/34/Insignia_Hungary_OMSZ_v1.svg",
        "🤷": "https://library.penguinmod.com/files/emojis/idk.png",
        "🍫": "https://urbanmove8.neocities.org/kekhegy/kepek/sportcsoki.png",
        "🔞": "https://urbanmove8.neocities.org/kekhegy/kepek/18plusz.png",
        "🚌": "https://urbanmove8.neocities.org/kekhegy/kepek/ikarus260.png",
        "🚂": "https://urbanmove8.neocities.org/kekhegy/kepek/mav43.png",
        // "Ⓜ️": "https://upload.wikimedia.org/wikipedia/commons/f/fb/BKV_metro.svg",
        // "BPIM1": "https://urbanmove8.neocities.org/kekhegy/kepek/metro1.png",
        // "BPIM2": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/BKV_m_2_jms.svg/800px-BKV_m_2_jms.svg.png",
        // "BPIM3": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/BKV_m_3_jms.svg/800px-BKV_m_3_jms.svg.png",
        // "BPIM4": "https://urbanmove8.neocities.org/kekhegy/kepek/metro4.png",
        /* Due to issues with BKK, we need to ask their permission to use those :( */
        "🚇": "https://urbanmove8.neocities.org/kekhegy/kepek/budapestim3asmetroszerelveny.png",
        "💶": "https://urbanmove8.neocities.org/emojis/stackedeuros.png",
        "💵": "https://urbanmove8.neocities.org/emojis/stackeddollars.png",
        "💴": "https://urbanmove8.neocities.org/emojis/stackedyens.png",
        "☹️": "https://library.penguinmod.com/files/emojis/bigfrown.png",
        "😧": "https://library.penguinmod.com/files/emojis/scared.png",
        "🧐": "https://library.penguinmod.com/files/emojis/investigate.png",
        "😠": "https://library.penguinmod.com/files/emojis/angry.png",
        "😲": "https://library.penguinmod.com/files/emojis/astonishment.png",
        "😨": "https://library.penguinmod.com/files/emojis/shocked.png",
        "👶": "https://library.penguinmod.com/files/emojis/baby.png",
        "🏳️": "https://library.penguinmod.com/files/emojis/flagwhite.png",
        "🚩": "https://library.penguinmod.com/files/emojis/flagred.png",
        "🏁": "https://library.penguinmod.com/files/emojis/flagcheck.png",
        "🏴": "https://library.penguinmod.com/files/emojis/flagblack.png",
        "😎": "https://library.penguinmod.com/files/emojis/cool.png",
        "🥶": "https://library.penguinmod.com/files/emojis/cold.png",
        "😈": "https://library.penguinmod.com/files/emojis/devil.png",
        "😵": "https://library.penguinmod.com/files/emojis/expressivedead.png",
        "😶‍🌫️": "https://library.penguinmod.com/files/emojis/faceinclouds.png",
        "💪": "https://library.penguinmod.com/files/emojis/flex.png",
        "😡": "https://library.penguinmod.com/files/emojis/furious.png",
        "🎂": "https://library.penguinmod.com/files/emojis/cake.png",
        "🔔": "https://library.penguinmod.com/files/emojis/bell.png",
        "🔕": "https://library.penguinmod.com/files/emojis/bellno.png",
        "🤮": "https://library.penguinmod.com/files/emojis/barf.png",
        "🤢": "https://library.penguinmod.com/files/emojis/badtaste.png",
        "👋": "https://library.penguinmod.com/files/emojis/animatedwave.png",
        "👽": "https://library.penguinmod.com/files/emojis/alien.png",
        "🎆": "https://urbanmove8.neocities.org/kekhegy/kepek/szntistvannapjatuzijatekok.png",
        "📰": "https://urbanmove8.neocities.org/kekhegy/kepek/magyarnemzetujsagutolso.png",
        "😂": "https://library.penguinmod.com/files/emojis/laughing.png",
        "🚓": "https://urbanmove8.neocities.org/emojis/rendorseg.png",
        "😊": "https://library.penguinmod.com/files/emojis/blush.png",
        "🤠": "https://library.penguinmod.com/files/emojis/cowboy.png",
        "🍔": "https://library.penguinmod.com/files/emojis/burger.png",
        "🫧": "https://library.penguinmod.com/files/emojis/bubbles.png",
        "😄": "https://library.penguinmod.com/files/emojis/casualjoy.png",
        "😝": "https://library.penguinmod.com/files/emojis/bleh.png",
        "🫡": "https://library.penguinmod.com/files/emojis/salute.png",
        "😇": "https://library.penguinmod.com/files/emojis/angel.png",
        "😬": "https://library.penguinmod.com/files/emojis/grimacing.png",
        "😟": "https://library.penguinmod.com/files/emojis/worried.png",
        "🫤": "https://library.penguinmod.com/files/emojis/meh.png",
        "🔊": "https://urbanmove8.neocities.org/emojis/volumeloud.png",
        "🔇": "https://urbanmove8.neocities.org/emojis/volumeoff.png",
        "🙍": "https://urbanmove8.neocities.org/emojis/personfrown.png",
        "🙎": "https://urbanmove8.neocities.org/emojis/duzzogoember.png",
        "😾": "https://library.penguinmod.com/files/emojis/catangry.png",
        "😸": "https://library.penguinmod.com/files/emojis/cathappy.png",
        "😻": "https://library.penguinmod.com/files/emojis/cathearteyes.png",
        "🙀": "https://library.penguinmod.com/files/emojis/catscream.png",
        "🐶": "https://library.penguinmod.com/files/emojis/dog.png",
        "🚫": "https://library.penguinmod.com/files/emojis/ocross.png",
        "🪛": "https://library.penguinmod.com/files/emojis/screwdriver.png",
        "👍": "https://library.penguinmod.com/files/emojis/thumbsup.png",
        "👎": "https://library.penguinmod.com/files/emojis/thumbsdown.png",
        "😱": "https://library.penguinmod.com/files/emojis/gladlyshocked.png",
        "🫥": "https://library.penguinmod.com/files/emojis/dotted.png",
        "😕": "https://library.penguinmod.com/files/emojis/confused.png",
        "🥹": "https://library.penguinmod.com/files/emojis/holdingbacktears.png",
        "🤝": "https://library.penguinmod.com/files/emojis/handshake.png",
        "💥": "https://library.penguinmod.com/files/emojis/explode.png",
        "😮": "https://library.penguinmod.com/files/emojis/surprised.png",
        "🔓": "https://library.penguinmod.com/files/emojis/unlocked.png",
        "🔒": "https://library.penguinmod.com/files/emojis/lock.png",
        "😵‍💫": "https://library.penguinmod.com/files/emojis/dizzy.png",
        "🙃": "https://library.penguinmod.com/files/emojis/upsidedownsmile.png",
        "💎": "https://library.penguinmod.com/files/emojis/diamond.png",
        "✅": "https://library.penguinmod.com/files/emojis/check.png",
        "👏": "https://library.penguinmod.com/files/emojis/clap.png",
        "☁️": "https://library.penguinmod.com/files/emojis/cloud.png",
        "📈": "https://library.penguinmod.com/files/emojis/chartrising.png",
        "📉": "https://library.penguinmod.com/files/emojis/chartlowering.png",
        "🐻": "https://library.penguinmod.com/files/emojis/bear.png",
        "🐻‍❄️": "https://library.penguinmod.com/files/emojis/polarbear.png",
        "⬆️": "https://library.penguinmod.com/files/emojis/arrowup.png",
        "⬇️": "https://library.penguinmod.com/files/emojis/arrowdown.png",
        "⬅️": "https://library.penguinmod.com/files/emojis/arrowleft.png",
        "➡️": "https://library.penguinmod.com/files/emojis/arrowright.png",
        "🐝": "https://library.penguinmod.com/files/emojis/bee.png",
        "🦊": "https://library.penguinmod.com/files/emojis/fox.png",
        "🎄": "https://library.penguinmod.com/files/emojis/treechristmas.png",
        "🚦": "https://library.penguinmod.com/files/emojis/trafficlight.png",
        "🤔": "https://library.penguinmod.com/files/emojis/thinking.png",
        "🤧": "https://library.penguinmod.com/files/emojis/tissue.png",
        "😋": "https://library.penguinmod.com/files/emojis/tasty.png",
        "😅": "https://library.penguinmod.com/files/emojis/sweating.png",
        "🤩": "https://library.penguinmod.com/files/emojis/stars.png",
        /* "🌊": "https://library.penguinmod.com/files/emojis/stream.png", */ // No longer exists
        "🙏": "https://library.penguinmod.com/files/emojis/pray.png",
        "🗣️": "https://library.penguinmod.com/files/emojis/speaking.png",
        "😴": "https://library.penguinmod.com/files/emojis/sleeping.png",
        "🏃": "https://library.penguinmod.com/files/emojis/personrunning.png",
        "🚶": "https://library.penguinmod.com/files/emojis/personwalking.png",
        "✌️": "https://library.penguinmod.com/files/emojis/peace.png",
        "🌍": "https://library.penguinmod.com/files/emojis/earth.png",
        "💧": "https://library.penguinmod.com/files/emojis/droplet.png",
        "🎮": "https://library.penguinmod.com/files/emojis/controller.png",
        "🫠": "https://library.penguinmod.com/files/emojis/melting.png",
        "🫨": "https://library.penguinmod.com/files/emojis/shakingface.png",
        "🤫": "https://library.penguinmod.com/files/emojis/shhh.png",
        "🐧": "https://library.penguinmod.com/files/emojis/penguin.png",
        "🐱": "https://library.penguinmod.com/files/emojis/cat.png",
        "📄": "https://urbanmove8.neocities.org/emojis/paper.png",
        "⚠️": "https://urbanmove8.neocities.org/emojis/warning.png",
        "😷": "https://library.penguinmod.com/files/emojis/mask.png",
        "💰": "https://urbanmove8.neocities.org/emojis/moneybag.png",
        "🖐️": "https://library.penguinmod.com/files/emojis/openhand.png",
        "✋": "https://library.penguinmod.com/files/emojis/palm.png",
        "✏️": "https://library.penguinmod.com/files/emojis/pencil.png",
        "👻": "https://library.penguinmod.com/files/emojis/ghost.png",
        "📝": "https://library.penguinmod.com/files/emojis/pencilonpaper.png",
        "🗨️": "https://library.penguinmod.com/files/emojis/speech.png",
        "💭": "https://library.penguinmod.com/files/emojis/thought.png",
        "🖖": "https://library.penguinmod.com/files/emojis/vulcan.png",
        "❌": "https://library.penguinmod.com/files/emojis/xsimple.png",
        "🤐": "https://library.penguinmod.com/files/emojis/zipper.png",
        "🥱": "https://library.penguinmod.com/files/emojis/yawn.png",
        "🐼": "https://library.penguinmod.com/files/emojis/panda.png",
        "🔨": "https://library.penguinmod.com/files/emojis/hammer.png",
        "🛠️": "https://library.penguinmod.com/files/emojis/hammerandwrench.png",
        "🔍": "https://library.penguinmod.com/files/emojis/magnify.png",
        "🤥": "https://library.penguinmod.com/files/emojis/lying.png",
        "📊": "https://urbanmove8.neocities.org/emojis/charthungarianstyle.png",
        "🛑": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Vienna_Convention_road_sign_B2a.svg/1024px-Vienna_Convention_road_sign_B2a.svg.png",
        "🧑‍💼": "https://urbanmove8.neocities.org/emojis/businessman_businesswoman.png",
        "👔": "https://urbanmove8.neocities.org/emojis/necktie.png",
        "⛏️": "https://urbanmove8.neocities.org/emojis/Pickaxe.png",
        "🐀": "https://library.penguinmod.com/files/emojis/rat.png",
        "🌕": "https://library.penguinmod.com/files/emojis/moon.png",
        "🤖": "https://library.penguinmod.com/files/emojis/robot.png",
        "🎁": "https://urbanmove8.neocities.org/emojis/magyarajandek.png",
        "🧩": "https://library.penguinmod.com/files/emojis/puzzle.png",
        "🧑‍🎤": "https://library.penguinmod.com/files/emojis/singing.png",
        "✈️": "https://urbanmove8.neocities.org/emojis/malev.png",
        "💼": "https://urbanmove8.neocities.org/emojis/businessbag.png",
        "🐥": "https://library.penguinmod.com/files/emojis/chick.png",
        "🤯": "https://library.penguinmod.com/files/emojis/mindblown.png",
        "🌈": "https://library.penguinmod.com/files/emojis/rainbow.png",
        "🏳️‍🌈": "https://library.penguinmod.com/files/emojis/pride.png",
        "😓": "https://library.penguinmod.com/files/emojis/nervous.png",
        "📖": "https://urbanmove8.neocities.org/emojis/openedbook.png",
        "🛩️": "https://urbanmove8.neocities.org/emojis/smallplane.png",
        "🛫": "https://urbanmove8.neocities.org/emojis/planetakeoff.png",
        "🛬": "https://urbanmove8.neocities.org/emojis/planeland.png",
        "🧏": "https://raw.githubusercontent.com/PenguinMod/PenguinMod-ObjectLibraries/refs/heads/main/assets/deaf.png",
        "💸": "https://urbanmove8.neocities.org/emojis/forintszarnyakkal.png",
        "❤️": "https://library.penguinmod.com/files/emojis/heart.png",
        "🧡": "https://urbanmove8.neocities.org/emojis/heartorange.png",
        "📚": "https://urbanmove8.neocities.org/emojis/stackedbooks.png",
        "🎓": "https://urbanmove8.neocities.org/emojis/studentscap.png",
        "📣": "https://urbanmove8.neocities.org/emojis/megaphone.png",
        "🧑‍🦳": "https://urbanmove8.neocities.org/emojis/oszhajufelnott.png",
        "🧑": "https://urbanmove8.neocities.org/emojis/felnott.png",
        "👱": "https://urbanmove8.neocities.org/emojis/szokefelnott.png",
        "🧑‍🦰": "https://urbanmove8.neocities.org/emojis/voroshajufelnott.png",
        "🧑‍🦲": "https://urbanmove8.neocities.org/emojis/kopaszfelnott.png",
        "🦃": "https://urbanmove8.neocities.org/emojis/pulyka.png",
        "🍉": "https://urbanmove8.neocities.org/emojis/felbevagottdinnye.png",
        "🍈": "https://urbanmove8.neocities.org/emojis/dinnye.png",
        "🐌": "https://library.penguinmod.com/files/emojis/snail.png",
        "👥": "https://urbanmove8.neocities.org/emojis/2persons.png",
        "👤": "https://library.penguinmod.com/files/emojis/person.png",
        "☺": "https://library.penguinmod.com/files/emojis/smile.png",
        "✈": "https://urbanmove8.neocities.org/emojis/malev.png",
        "⛄": "https://urbanmove8.neocities.org/emojis/hoember.png",
        "🍡": "https://library.penguinmod.com/files/emojis/dango.png",
        "penguinmod:jeremygamer13": "https://urbanmove8.neocities.org/emojis/jeremygamer13.png",
        "🛡": "https://urbanmove8.neocities.org/emojis/shield.png",
        "penguinmod:joe": "https://library.penguinmod.com/files/emojis/joe.png",
        "🔋": "https://urbanmove8.neocities.org/emojis/akkumlator.png",
        "🪫": "https://urbanmove8.neocities.org/emojis/gyengeakkumlator.png",
        "🐔": "https://urbanmove8.neocities.org/emojis/tyuk.png",
        "🌧️": "https://urbanmove8.neocities.org/emojis/eso.png",
        "⛈️": "https://urbanmove8.neocities.org/emojis/zaporzivataresokkel.png",
        "🌩️": "https://urbanmove8.neocities.org/emojis/zaporzivatar.png",
        "🌬️": "https://urbanmove8.neocities.org/emojis/szelfujoarc.png",
        "🫙": "https://urbanmove8.neocities.org/emojis/haragospista.png",
        "🗓": "https://urbanmove8.neocities.org/emojis/naptar.png",
        "📅": "https://urbanmove8.neocities.org/emojis/naptar.png",
        "🌶": "https://urbanmove8.neocities.org/emojis/szegedipaprika.png",
        "☕": "https://urbanmove8.neocities.org/emojis/bogre.png",
        "🚥": "https://urbanmove8.neocities.org/emojis/trafficlightvertical.png",
        "🚍": "https://urbanmove8.neocities.org/emojis/induloikarus260.png",
        "🚘": "https://urbanmove8.neocities.org/emojis/indulosuzuki.png",
        "⏩": "https://urbanmove8.neocities.org/emojis/fastforward.png",
        "⏪": "https://urbanmove8.neocities.org/emojis/fastrewind.png",
        "↕️": "https://urbanmove8.neocities.org/emojis/updownarrow.png",
        "↔️": "https://urbanmove8.neocities.org/emojis/leftrightarrow.png",
        "↙️": "https://urbanmove8.neocities.org/emojis/arrowdownleft.png",
        "↘️": "https://urbanmove8.neocities.org/emojis/arrowdownright.png",
        "↖️": "https://urbanmove8.neocities.org/emojis/arrowupleft.png",
        "↗️": "https://urbanmove8.neocities.org/emojis/arrowupright.png",
        "▶️": "https://urbanmove8.neocities.org/emojis/play.png",
        "🚔": "https://urbanmove8.neocities.org/emojis/indulorendorauto.png",
        "🚖": "https://urbanmove8.neocities.org/emojis/indulotaxi.png",
        "🚕": "https://urbanmove8.neocities.org/emojis/taxi.png",
        "🚊": "https://urbanmove8.neocities.org/emojis/tatravillamos.png",
        "🚃": "https://urbanmove8.neocities.org/emojis/vasutikocsi.png",
        "🏎️": "https://urbanmove8.neocities.org/emojis/mclarenf1.png",
        "💦": "https://urbanmove8.neocities.org/emojis/cseppek.png",
        "🩸": "https://urbanmove8.neocities.org/emojis/ver.png",
        "💔": "https://urbanmove8.neocities.org/emojis/brokenheart.png",
        "💙": "https://urbanmove8.neocities.org/emojis/heartblue.png",
        "💛": "https://urbanmove8.neocities.org/emojis/heartyellow.png",
        "🖤": "https://urbanmove8.neocities.org/emojis/heartblack.png",
        "🤍": "https://urbanmove8.neocities.org/emojis/heartwhite.png",
        "🤎": "https://urbanmove8.neocities.org/emojis/heartbrown.png",
        "💚": "https://urbanmove8.neocities.org/emojis/heartgreen.png",
        "💜": "https://urbanmove8.neocities.org/emojis/heartpurple.png",
        "aaa": "/image/brokenimage.png",
        "🚑": "https://urbanmove8.neocities.org/emojis/mentoauto.png",
        "🚒": "https://urbanmove8.neocities.org/emojis/tuzoltoauto.png",
        "🧑‍🎓": "https://urbanmove8.neocities.org/emojis/student.png",
        "🇶🇦": "https://urbanmove8.neocities.org/images/flags/qatar.png",
        "🇩🇪": "https://urbanmove8.neocities.org/images/flags/germany.png",
        "🧑🏻": "https://urbanmove8.neocities.org/emojis/felnott2.png",
        "🧑🏼": "https://urbanmove8.neocities.org/emojis/felnott3.png",
        "🧑🏽": "https://urbanmove8.neocities.org/emojis/felnott4.png",
        "🧑🏾": "https://urbanmove8.neocities.org/emojis/felnott5.png",
        "🧑🏿": "https://urbanmove8.neocities.org/emojis/felnott6.png",
        "🚽": "https://library.penguinmod.com/files/emojis/toilet.png",
        "🌵": "https://library.penguinmod.com/files/emojis/cactus.png",
        "🧑‍💻": "https://library.penguinmod.com/files/emojis/developer.png",
        "🎃": "https://library.penguinmod.com/files/emojis/pumpkin.png",
        "◀️": "https://urbanmove8.neocities.org/emojis/playback.png",
        "🪼": "https://library.penguinmod.com/files/emojis/jellyfish.png",
        "😁": "https://library.penguinmod.com/files/emojis/allsmile.png",
        "❗": "https://library.penguinmod.com/files/emojis/exclamation.png",
        "❓": "https://library.penguinmod.com/files/emojis/question.png",
        "🌸": "https://library.penguinmod.com/files/emojis/flower.png",
        "urbanmove8:idióta": "https://urbanmove8.neocities.org/emojis/1418694146486702121.webp",
        "😜": "https://urbanmove8.neocities.org/emojis/winkingface.png",
        "🚆": "https://urbanmove8.neocities.org/emojis/bzmot.png",
        "📂": "https://urbanmove8.neocities.org/emojis/mappa.png",
        "🤭": "https://urbanmove8.neocities.org/emojis/handovermouth.png",
        "🙂‍↕️": "https://library.penguinmod.com/files/emojis/nodvertical.png",
        "🤨": "https://library.penguinmod.com/files/emojis/suspicious.png",
        "😢": "https://library.penguinmod.com/files/emojis/tear.png",
        "🏳️‍⚧️": "https://library.penguinmod.com/files/emojis/transgender.png",
        "🚎": "https://urbanmove8.neocities.org/emojis/solaristrollino12trolibusz.png",
        "🪦": "https://urbanmove8.neocities.org/emojis/s%C3%ADrhely.png",
        "🤣": "https://urbanmove8.neocities.org/emojis/rofl.png",
        "🚞": "https://urbanmove8.neocities.org/emojis/budapestifogaskerekuvasut.png",
        "🚄": "https://urbanmove8.neocities.org/emojis/stadlerflirt.png",
        "🍰": "https://urbanmove8.neocities.org/emojis/dobostorta.png",
        "🍪": "https://urbanmove8.neocities.org/emojis/pilotakeksz.png",
        "🍞": "https://urbanmove8.neocities.org/emojis/magyarokkenyere.png",
        "🧛": "https://urbanmove8.neocities.org/emojis/felnottkisvampir.png",
        "🚈": "https://urbanmove8.neocities.org/emojis/magyartramtrain.png",
        "🚏": "https://urbanmove8.neocities.org/emojis/buszmeg%C3%A1llokresz.png",
        "🛣️": "https://urbanmove8.neocities.org/emojis/m7esautopalya.png",
        "😉": "https://urbanmove8.neocities.org/emojis/kacsintosarc.png",
        "🫩": "https://urbanmove8.neocities.org/emojis/faradtarctaskasszemekkel.png",
        "🛳": "https://urbanmove8.neocities.org/emojis/hajo.png",
        "🦜": "https://urbanmove8.neocities.org/emojis/hullamospapagajok.png",
        "🐟": "https://urbanmove8.neocities.org/emojis/jaszkeszeg.png",
        "🍬": "https://urbanmove8.neocities.org/emojis/negrocukor.png",
        "⛽": "https://urbanmove8.neocities.org/emojis/benzinkut.png",
        "🔌": "https://urbanmove8.neocities.org/emojis/europlug.png",
        "💁": "https://urbanmove8.neocities.org/emojis/nyitotttenyeruember.png",
        "💁‍♀️": "https://urbanmove8.neocities.org/emojis/nyitotttenyeruno.png",
        "🤬": "https://urbanmove8.neocities.org/emojis/furiouswithcensorbar.png",
        "🫢": "https://library.penguinmod.com/files/emojis/handovermouth.png",
        "👩‍💼": "https://urbanmove8.neocities.org/emojis/noiirodista.png",
        "🚣": "https://urbanmove8.neocities.org/emojis/kishajozofelnott.png",
        "🤳": "https://urbanmove8.neocities.org/emojis/selfie.png", 
        "🧑‍🎄": "https://urbanmove8.neocities.org/emojis/felnottmikulas.png",
        "🚶‍➡️": "https://urbanmove8.neocities.org/emojis/personwalkingright.png",
        "🏃‍➡️": "https://urbanmove8.neocities.org/emojis/personrunningright.png",
        "🧍": "https://urbanmove8.neocities.org/emojis/allofelnott.png",
        "🧑‍🦯": "https://urbanmove8.neocities.org/emojis/setalofelnottfeherbottal.png",
        "🧑‍🦯‍➡️": "https://urbanmove8.neocities.org/emojis/setalofelnottfeherbottalright.png",
        "🧑‍❤️‍👩": "https://urbanmove8.neocities.org/emojis/felnottesnoszerelmespar.png",
        "👩‍❤️‍🧑": "https://urbanmove8.neocities.org/emojis/noesfelnottszerelmespar.png",
        "🧑‍👩": "https://urbanmove8.neocities.org/emojis/felnottesno.png",
        "🤕": "https://library.penguinmod.com/files/emojis/hurt.png",
        "🍀": "https://library.penguinmod.com/files/emojis/lucky.png",
        "💯": "https://library.penguinmod.com/files/emojis/hundred.png",
        "👿": "https://library.penguinmod.com/files/emojis/imp.png",
        "😑": "https://library.penguinmod.com/files/emojis/sigh.png",
        "🪏": "https://library.penguinmod.com/files/emojis/shovel.png",
        "😮‍💨": "https://library.penguinmod.com/files/emojis/relief.png",
        "😔": "https://library.penguinmod.com/files/emojis/pensive.png",
        "😒": "https://library.penguinmod.com/files/emojis/bummed.png",
        "🤤": "https://library.penguinmod.com/files/emojis/drooling.png",
        "🙂‍↔️": "https://library.penguinmod.com/files/emojis/nodhorizontal.png", 
        "�": "https://urbanmove8.neocities.org/emojis/idk-modified.png",
        "🙎🏻": "https://urbanmove8.neocities.org/emojis/duzzogoemberfeherbor.png",
        "👑": "https://urbanmove8.neocities.org/emojis/szentkorona.png",
        "🗑️": "https://urbanmove8.neocities.org/emojis/magyarkuka.png",
        "🦢": "https://urbanmove8.neocities.org/emojis/hattyu.png",
        "🦆": "https://urbanmove8.neocities.org/emojis/vadkacsak.png",
        "⏸️": "https://urbanmove8.neocities.org/emojis/pause.png",
    };

    const SECRET_HUNGARIAN_MESSAGE_TITLE = "1956. Október 23. - Forradalom";
    const SECRET_HUNGARIAN_EMOJI_SAGA_1956 = "🇭🇺 Szabadság és függetlenség! 1956. október 23. A forradalom lángja fellobbant a kommunista zsarnokság ellen. Budapest és a nemzet felkiáltott.️ A szovjet tankok eltiporták az ellenállást, de a lélek nem tört meg.️ Több mint 2500 magyar áldozat halt meg.😞💔 Emlékezzünk a hősökre, akiket a megtorlás kivégzett: Nagy Imre (miniszterelnök) 👨‍⚖️, Maléter Pál (honvédelmi miniszter) 🎖️, Gimes Miklós (újságíró) ✍️, Losonczy Géza (államminiszter) 🏛️, Mansfeld Péter (a legfiatalabb mártír) 🧑‍🍼, Tóth Ilona (orvostanhallgató) 👩‍⚕️, Bánátiné 👵, Lukács Pál 👨‍🌾, Gyöngyösi Miklós 🧑‍🎓, és a Corvin köz 'pesti srácai' 🧑. Tisztelet a Mártíroknak! 🙏 Az '56-os szellem örökké él.";

    const EASTER_EGG_DAY = 23;
    const EASTER_EGG_MONTH = 9; // October (0-indexed)

    // --- UTILITY FUNCTIONS ---

    function getEmojiUrl(emojiMatch) {
        if (emojiMatch === "🇭🇺") {
            const today = new Date();
            if (today.getMonth() === EASTER_EGG_MONTH && today.getDate() === EASTER_EGG_DAY) {
                return "https://urbanmove8.neocities.org/emojis/hungary1956.png";
            }
        }
        return emojiMap[emojiMatch] || null;
    }

    function triggerSecretMessageBox() {
        if (typeof playSound === 'function') {
            playSound('ding');
        }
        
        if (typeof showMessageBox === 'function') {
             showMessageBox({
                title: SECRET_HUNGARIAN_MESSAGE_TITLE,
                message: SECRET_HUNGARIAN_EMOJI_SAGA_1956,
                icon: 'info', 
                buttons: ['OK']
            });
        }
    }

    /**
     * 🌟 REVISED: Applies aggressive CSS filters to force a low-color/rastered look.
     * This simulates the limited 256-color palette (8-bit, 16-bit was 65,536 colors, but 256 is the iconic low-color look).
     */
    function applyOldSchoolImageStyles(imgElement) {
        // 1. Force sharp, pixelated edges
        imgElement.style.imageRendering = 'pixelated';
        
        // 2. Adjust size slightly higher to make the pixels more visible
        imgElement.style.width = '1.1em';
        imgElement.style.height = '1.1em';

        // 3. Apply harsh color filters to simulate limited palette and dither/raster effect
        // Grayscale reduces color information, then contrast boosts the difference, simulating "banding."
        imgElement.style.filter = 'grayscale(20%) contrast(1.5) brightness(1.1) saturate(1.8) hue-rotate(5deg)';
        
        // 4. Subtle Windows 98 3D element styling
        imgElement.style.border = '1px solid #c0c0c0';
        imgElement.style.boxShadow = '1px 1px 0px 0px #808080'; 
    }

    // --- REGEX SETUP ---
    const sortedEmojiKeys = Object.keys(emojiMap).sort((a, b) => b.length - a.length);
    
    const escapedKeys = sortedEmojiKeys.map(key => {
        const escapedKey = key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        if (key.length > 2 && key.match(/[a-zA-Z0-9]/)) {
            return `\\b${escapedKey}\\b`;
        }
        return escapedKey;
    });

    const emojiRegex = new RegExp(`(${escapedKeys.join('|')})`, 'g');

    // --- CORE REPLACEMENT LOGIC ---

    function walk(node) {
        let child, next;
        
        switch(node.nodeType) {
            case 1: 
            case 9:
            case 11:
                if (node.tagName && (node.tagName.toLowerCase() === 'script' || node.tagName.toLowerCase() === 'style' || node.tagName.toLowerCase() === 'img')) {
                    return;
                }
                
                child = node.firstChild;
                while(child) {
                    next = child.nextSibling;
                    walk(child);
                    child = next;
                }
                break;
            case 3:
                replaceInTextNode(node);
                break;
        }
    }

    function replaceInTextNode(textNode) {
        const parent = textNode.parentNode;
        if (!parent) return;
        let text = textNode.nodeValue;

        if (emojiRegex.test(text)) {
            emojiRegex.lastIndex = 0; 
            let lastIndex = 0;
            const fragment = document.createDocumentFragment();

            let match;
            while ((match = emojiRegex.exec(text)) !== null) {
                const matchString = match[0];
                const matchIndex = match.index;

                if (matchIndex > lastIndex) {
                    fragment.appendChild(document.createTextNode(text.substring(lastIndex, matchIndex)));
                }

                const imageUrl = getEmojiUrl(matchString);

                if (imageUrl) {
                    const img = document.createElement('img');
                    img.src = imageUrl;
                    img.alt = matchString; 
                    img.style.verticalAlign = 'middle';
                    img.style.display = 'inline';
                    
                    // Apply REVISED 16-bit style effects here!
                    applyOldSchoolImageStyles(img);

                    img.onerror = function() { 
                        this.src = "https://urbanmove8.neocities.org/emojis/idk-modified.png";
                        this.onerror = null;
                    };

                    // 🌟 EASTER EGG LOGIC (🇭🇺 Flag) 🌟
                    if (matchString === "🇭🇺") {
                        const today = new Date();
                        const isOctober23 = today.getMonth() === EASTER_EGG_MONTH && today.getDate() === EASTER_EGG_DAY;

                        if (isOctober23) {
                            img.title = "Kattintson az üzenetért (Click for message)";
                            img.style.cursor = 'pointer'; 
                            img.onclick = triggerSecretMessageBox;

                        } else {
                            img.title = "A Magyar Köztársaság zászlója (Hungarian Flag)"; 
                            img.style.cursor = 'default';
                        }
                        
                        img.removeAttribute('data-tooltip-text');
                        img.classList.remove('hungary-flag-tooltip');
                    }
                    // 🌟 END OF EASTER EGG LOGIC 🌟

                    fragment.appendChild(img);
                } else {
                    fragment.appendChild(document.createTextNode(matchString));
                }

                lastIndex = matchIndex + matchString.length;
            }

            if (lastIndex < text.length) {
                fragment.appendChild(document.createTextNode(text.substring(lastIndex)));
            }

            parent.replaceChild(fragment, textNode);
        }
    }

    // --- STYLES INJECTION ---
    function injectStyles() {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.textContent = `
             /* --- GENERAL STYLES --- */
             /* The CSS list styles are kept as they clean up the appearance of emojis in lists */
             .sc-list-item,
             .sc-menu-item,
             .sc-dropdown-item,
             ul > li,
             ol > li {
                 display: flex !important;
                 align-items: center !important;
                 flex-wrap: wrap;
                 list-style: none !important;
             }
             .sc-list-item img,
             .sc-menu-item img,
             ul > li img,
             ol > li img {
                 vertical-align: middle !important;
                 margin-right: 5px;
             }
        `;
        document.head.appendChild(style);
    }

    // --- INITIALIZATION ---
    injectStyles();
    walk(document.body);

    // Mutation Observer
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                 if (node.nodeType === 1 && (node.tagName.toLowerCase() === 'img' || node.tagName.toLowerCase() === 'script' || node.tagName.toLowerCase() === 'style')) {
                    return;
                }
                walk(node);
            });
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });

})();
