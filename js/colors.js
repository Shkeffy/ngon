var _stylesheet = undefined;
var _leveljs = undefined;

var themeColors = {};// Empty until we set the theme
// We add the stuff down below

function use(name){
  if (!_stylesheet){
    _stylesheet = document.createElement("link");
    _stylesheet.setAttribute("rel", "stylesheet")
    document.head.appendChild(_stylesheet)
    console.log("Created new")
  }
  _stylesheet.setAttribute("href", name)
}

function useJS(name){
  if (!_leveljs){
    _leveljs = document.createElement("script");
    document.body.appendChild(_leveljs)
  }
  _leveljs.setAttribute("src", name)
}

function useTheme(themeElement){
  if (themeElement.checked){
    use("darkstyle.css"); // Background color is in here
    themeColors = {
      levelBackground: "grey", // Main background
      backgroundColor: "grey", // Background
      mapColor: "grey", // Map Color
      blockS: "#222", // Movable blocks color
      block: "rgba(140,140,140,0.85)", // Immovable block colors
      controlColor: "#808080", // Controls background
      labsBackground: "grey", // Labs background
      rooftopsBackground: "grey", // Rooftops background
      skyscrapersBackground: "grey", // Skyscrapers Background
      exit: "#cff", // Exit door color
      exitroom: '#f2f2f2', // Exit room color
      cursorColor: "white", // Color of the '+' cursor
      wireColor: "white", // Color of wires holding player at start
      pipeColor: "grey", // Pipes in the start
      moboutlineColor: "white", // Mob outline colors
      lightsColor: "#5c5c5c"//, // Light fixture colors
      //bulletColor: "#fff" // Bullet Color
    };
  }
  else{
    use("style.css"); // Background color is in here
    themeColors = {
      levelBackground: "#d4f4f4", // Main background
      backgroundColor: "#ddd", // Background
      mapColor: "#444", // Map Color
      blockS: "#222", // Movable blocks color
      block: "rgba(140,140,140,0.85)", // Immovable block colors
      controlColor: "#fff", // Controls background
      labsBackground: "#d4f4f4", // Labs background
      rooftopsBackground: "#d4f4f4", // Rooftops background
      skyscrapersBackground: "#d4f4f4", // Skyscrapers Background
      exit: "#cff", // Exit door color
      exitroom: "#f2f2f2", // Exit room color
      cursorColor: "black", // Color of the '+' cursor
      wireColor: "black", // Color of wires holding player at start
      pipeColor: "black", // Pipes in the start
      moboutlineColor: "black", // Mob outline colors
      lightsColor: "#444"//, // Light fixture colors
      //bulletColor: "#000" // Bullet Color
    }
  }
}

useTheme(document.getElementById('colors'));

/* 
To set a theme, remove "" if there is any, 
and replace it with 
themeColors.example. In 'themeColors = {',
you'll write exampleColor: "THEME"

WHAT YOU CAN PUT FOR THEMES:
Hexes: #ff0000, #fff, #000, etc.
Names: black, grey, pink, green, white, etc.
RGB, I think: rgba(0,0,0), rgba(255,255,255), etc.
*/
