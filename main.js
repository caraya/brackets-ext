/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50, browser: true */
/*global $, define, brackets */

define(function (require, exports, module) {
    "use strict";

    var   CommandManager = brackets.getModule("command/CommandManager"),
        Menus = brackets.getModule("command/Menus");

    // Function to run when the compile menu item is clicked
    function handleCompile() {
        window.alert("Hello, compile world!");
    }

    function handlePackage() {
        window.alert("Hello, package world!");
    }

    function handleConvert()) {
        window.alert("Hello, convertworld!");
    }

    // First, register a command - a UI-less object associating an id to a handler
    var COMPILE_COMMAND = "epub.compile";   // package-style naming to avoid collisions
    CommandManager.register("Hello World", COMPILE_COMMAND, handleCompile);

    var PACKAGE_COMMAND = "epub.package";   // package-style naming to avoid collisions
    CommandManager.register("Hello World", PACKAGE_COMMAND, handlePackage);

    var CONVERT_COMMAND = "epub.convert";   // package-style naming to avoid collisions
    CommandManager.register("Hello World", COMPILE_COMMAND, handleConvert);

    // Then create a menu item bound to the command
    // The label of the menu item is the name we gave the command (see above)
    var menu = Menus.getMenu(Menus.AppMenuBar.FILE_MENU);
    // Compile Command
   menu.addMenuItem(COMPILE_COMMAND);
   menu.addMenuItem(COMPILE_COMMAND, "Ctrl-Alt-H");
   // Package Command
   menu.addMenuItem(PACKAGE_COMMAND);
   menu.addMenuItem(COMPILE_COMMAND, "Ctrl-Alt-P");
   // Convert Command
   menu.addMenuItem(COMPILE_COMMAND);
   menu.addMenuItem(COMPILE_COMMAND, "Ctrl-Alt-G");
});
