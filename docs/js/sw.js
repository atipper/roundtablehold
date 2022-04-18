
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('roundtable-store').then((cache) => cache.addAll([
            '/CNAME',
            '/index.html',
            '/manifest.webmanifest',
            '/options.html',
            '/checklists/achievements.html',
            '/checklists/ancient_dragon_smithing_stones.html',
            '/checklists/armor.html',
            '/checklists/ashesof_war.html',
            '/checklists/bell_bearings.html',
            '/checklists/bosses.html',
            '/checklists/caves_catacombsand_tunnels.html',
            '/checklists/cookbooks.html',
            '/checklists/dragon_hearts_deathroots.html',
            '/checklists/evergaols.html',
            '/checklists/flaskof_wondrous_physick.html',
            '/checklists/gestures.html',
            '/checklists/golden_seeds_sacred_tears.html',
            '/checklists/great_runes.html',
            '/checklists/illusory_walls_invisible_paths.html',
            '/checklists/incantations.html',
            '/checklists/legacy_dungeons.html',
            '/checklists/legendaries.html',
            '/checklists/memory_stones_talisman_pouches.html',
            '/checklists/npc_questlines.html',
            '/checklists/paintings.html',
            '/checklists/pots_bottles.html',
            '/checklists/remembrances_mausoleums.html',
            '/checklists/scrollsand_prayerbooks.html',
            '/checklists/sorceries.html',
            '/checklists/spirit_ashes.html',
            '/checklists/talismans.html',
            '/checklists/tldr_all_npc_quest_stepsin_order.html',
            '/checklists/walkthrough.html',
            '/checklists/weapons.html',
            '/checklists/whetstones.html',
            '/css/bootstrap.min.css',
            '/css/bootstrap.min.css.map',
            '/css/main.css',
            '/css/themes/cerulean/bootstrap.css',
            '/css/themes/cerulean/bootstrap.min.css',
            '/css/themes/cerulean/_bootswatch.scss',
            '/css/themes/cerulean/_variables.scss',
            '/css/themes/cosmo/bootstrap.css',
            '/css/themes/cosmo/bootstrap.min.css',
            '/css/themes/cosmo/_bootswatch.scss',
            '/css/themes/cosmo/_variables.scss',
            '/css/themes/cyborg/bootstrap.css',
            '/css/themes/cyborg/bootstrap.min.css',
            '/css/themes/cyborg/_bootswatch.scss',
            '/css/themes/cyborg/_variables.scss',
            '/css/themes/darkly/bootstrap.css',
            '/css/themes/darkly/bootstrap.min.css',
            '/css/themes/darkly/_bootswatch.scss',
            '/css/themes/darkly/_variables.scss',
            '/css/themes/flatly/bootstrap.css',
            '/css/themes/flatly/bootstrap.min.css',
            '/css/themes/flatly/_bootswatch.scss',
            '/css/themes/flatly/_variables.scss',
            '/css/themes/journal/bootstrap.css',
            '/css/themes/journal/bootstrap.min.css',
            '/css/themes/journal/_bootswatch.scss',
            '/css/themes/journal/_variables.scss',
            '/css/themes/litera/bootstrap.css',
            '/css/themes/litera/bootstrap.min.css',
            '/css/themes/litera/_bootswatch.scss',
            '/css/themes/litera/_variables.scss',
            '/css/themes/lumen/bootstrap.css',
            '/css/themes/lumen/bootstrap.min.css',
            '/css/themes/lumen/_bootswatch.scss',
            '/css/themes/lumen/_variables.scss',
            '/css/themes/lux/bootstrap.css',
            '/css/themes/lux/bootstrap.min.css',
            '/css/themes/lux/_bootswatch.scss',
            '/css/themes/lux/_variables.scss',
            '/css/themes/materia/bootstrap.css',
            '/css/themes/materia/bootstrap.min.css',
            '/css/themes/materia/_bootswatch.scss',
            '/css/themes/materia/_variables.scss',
            '/css/themes/minty/bootstrap.css',
            '/css/themes/minty/bootstrap.min.css',
            '/css/themes/minty/_bootswatch.scss',
            '/css/themes/minty/_variables.scss',
            '/css/themes/morph/bootstrap.css',
            '/css/themes/morph/bootstrap.min.css',
            '/css/themes/morph/_bootswatch.scss',
            '/css/themes/morph/_variables.scss',
            '/css/themes/pulse/bootstrap.css',
            '/css/themes/pulse/bootstrap.min.css',
            '/css/themes/pulse/_bootswatch.scss',
            '/css/themes/pulse/_variables.scss',
            '/css/themes/quartz/bootstrap.css',
            '/css/themes/quartz/bootstrap.min.css',
            '/css/themes/quartz/_bootswatch.scss',
            '/css/themes/quartz/_variables.scss',
            '/css/themes/regent/bootstrap.css',
            '/css/themes/regent/bootstrap.min.css',
            '/css/themes/regent/_bootswatch.scss',
            '/css/themes/regent/_variables.scss',
            '/css/themes/sandstone/bootstrap.css',
            '/css/themes/sandstone/bootstrap.min.css',
            '/css/themes/sandstone/_bootswatch.scss',
            '/css/themes/sandstone/_variables.scss',
            '/css/themes/simplex/bootstrap.css',
            '/css/themes/simplex/bootstrap.min.css',
            '/css/themes/simplex/_bootswatch.scss',
            '/css/themes/simplex/_variables.scss',
            '/css/themes/sketchy/bootstrap.css',
            '/css/themes/sketchy/bootstrap.min.css',
            '/css/themes/sketchy/_bootswatch.scss',
            '/css/themes/sketchy/_variables.scss',
            '/css/themes/slate/bootstrap.css',
            '/css/themes/slate/bootstrap.min.css',
            '/css/themes/slate/_bootswatch.scss',
            '/css/themes/slate/_variables.scss',
            '/css/themes/solar/bootstrap.css',
            '/css/themes/solar/bootstrap.min.css',
            '/css/themes/solar/_bootswatch.scss',
            '/css/themes/solar/_variables.scss',
            '/css/themes/spacelab/bootstrap.css',
            '/css/themes/spacelab/bootstrap.min.css',
            '/css/themes/spacelab/_bootswatch.scss',
            '/css/themes/spacelab/_variables.scss',
            '/css/themes/superhero/bootstrap.css',
            '/css/themes/superhero/bootstrap.min.css',
            '/css/themes/superhero/_bootswatch.scss',
            '/css/themes/superhero/_variables.scss',
            '/css/themes/united/bootstrap.css',
            '/css/themes/united/bootstrap.min.css',
            '/css/themes/united/_bootswatch.scss',
            '/css/themes/united/_variables.scss',
            '/css/themes/vapor/bootstrap.css',
            '/css/themes/vapor/bootstrap.min.css',
            '/css/themes/vapor/_bootswatch.scss',
            '/css/themes/vapor/_variables.scss',
            '/css/themes/yeti/bootstrap.css',
            '/css/themes/yeti/bootstrap.min.css',
            '/css/themes/yeti/_bootswatch.scss',
            '/css/themes/yeti/_variables.scss',
            '/css/themes/zephyr/bootstrap.css',
            '/css/themes/zephyr/bootstrap.min.css',
            '/css/themes/zephyr/_bootswatch.scss',
            '/css/themes/zephyr/_variables.scss',
            '/img/android-chrome-192x192.png',
            '/img/android-chrome-512x512.png',
            '/img/apple-touch-icon.png',
            '/img/favicon-16x16.png',
            '/img/favicon-32x32.png',
            '/img/favicon.ico',
            '/img/site.webmanifest',
            '/js/bootstrap.bundle.min.js',
            '/js/bootstrap.bundle.min.js.map',
            '/js/checklists.js',
            '/js/index.js',
            '/js/item_links.js',
            '/js/jets.min.js',
            '/js/jquery.highlight.js',
            '/js/jquery.min.js',
            '/js/jstorage.min.js',
            '/js/options.js',
            '/js/scroll.js',
            '/js/sw.js',

        ])),
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request)),
    );
});