function show() {

  var options = [
    "agate.min.css",
    "androidstudio.min.css",
    "arduino-light.min.css",
    "arta.min.css",
    "ascetic.min.css",
    "atelier-cave-dark.min.css",
    "atelier-cave-light.min.css",
    "atelier-dune-dark.min.css",
    "atelier-dune-light.min.css",
    "atelier-estuary-dark.min.css",
    "atelier-estuary-light.min.css",
    "atelier-forest-dark.min.css",
    "atelier-forest-light.min.css",
    "atelier-heath-dark.min.css",
    "atelier-heath-light.min.css",
    "atelier-lakeside-dark.min.css",
    "atelier-lakeside-light.min.css",
    "atelier-plateau-dark.min.css",
    "atelier-plateau-light.min.css",
    "atelier-savanna-dark.min.css",
    "atelier-savanna-light.min.css",
    "atelier-seaside-dark.min.css",
    "atelier-seaside-light.min.css",
    "atelier-sulphurpool-dark.min.css",
    "atelier-sulphurpool-light.min.css",
    "atom-one-dark.min.css",
    "atom-one-light.min.css",
    "brown-paper.min.css",
    "brown-papersq.png",
    "codepen-embed.min.css",
    "color-brewer.min.css",
    "darcula.min.css",
    "dark.min.css",
    "darkula.min.css",
    "default.min.css",
    "docco.min.css",
    "dracula.min.css",
    "far.min.css",
    "foundation.min.css",
    "github-gist.min.css",
    "github.min.css",
    "googlecode.min.css",
    "grayscale.min.css",
    "gruvbox-dark.min.css",
    "gruvbox-light.min.css",
    "hopscotch.min.css",
    "hybrid.min.css",
    "idea.min.css",
    "ir-black.min.css",
    "kimbie.dark.min.css",
    "kimbie.light.min.css",
    "magula.min.css",
    "mono-blue.min.css",
    "monokai-sublime.min.css",
    "monokai.min.css",
    "obsidian.min.css",
    "ocean.min.css",
    "paraiso-dark.min.css",
    "paraiso-light.min.css",
    "pojoaque.min.css",
    "pojoaque.jpg",
    "purebasic.min.css",
    "qtcreator_dark.min.css",
    "qtcreator_light.min.css",
    "railscasts.min.css",
    "rainbow.min.css",
    "routeros.min.css",
    "school-book.min.css",
    "school-book.png",
    "solarized-dark.min.css",
    "solarized-light.min.css",
    "sunburst.min.css",
    "tomorrow-night-blue.min.css",
    "tomorrow-night-bright.min.css",
    "tomorrow-night-eighties.min.css",
    "tomorrow-night.min.css",
    "tomorrow.min.css",
    "vs.min.css",
    "vs2015.min.css",
    "xcode.min.css",
    "xt256.min.css",
    "zenburn.min.css",
  ];

  var names = options.map(function(item) {
    return item.replace(".min.css", ".css");
  });

  $ui.menu(options).then(function(selected) {
    $cache.set("theme", options[selected.index]);
  });
}

module.exports = {
  show: show
}