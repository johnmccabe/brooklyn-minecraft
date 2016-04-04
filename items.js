{
  "entities" : [ {
    "name" : "Minecraft Server (Cuberite)",
    "type" : "minecraft-server-cuberite:0.0.6",
    "description" : "Cuberite Minecraft Server with a choice of plugins.\n",
    "iconUrl" : "http://images.wikia.com/yogbox/images/d/dd/Minecraft_Block.svg",
    "config" : [ {
      "name" : "cuberite.url",
      "type" : "java.lang.String",
      "description" : "URL pointing at the Cuberite release archive (defaults to latest)",
      "defaultValue" : "https://builds.cuberite.org/job/Cuberite%20Linux%20x64%20Master/lastSuccessfulBuild/artifact/Cuberite.tar.gz",
      "reconfigurable" : false,
      "label" : "Cuberite Download URL",
      "priority" : 0.0,
      "links" : { }
    }, {
      "name" : "cuberite.port",
      "type" : "java.lang.String",
      "description" : "Port number the Cuberite server will listen on",
      "defaultValue" : 25565,
      "reconfigurable" : false,
      "label" : "Cuberite Server Port",
      "priority" : 1.0,
      "links" : { }
    }, {
      "name" : "cuberite.webadmin.port",
      "type" : "java.lang.String",
      "description" : "Port number the Cuberite WebAdmin server will listen on",
      "defaultValue" : 8080,
      "reconfigurable" : false,
      "label" : "WebAdmin HTTP Port",
      "priority" : 2.0,
      "links" : { }
    }, {
      "name" : "cuberite.webadmin.password",
      "type" : "java.lang.String",
      "description" : "WebAdmin password",
      "defaultValue" : "p455w0rd",
      "reconfigurable" : false,
      "label" : "WebAdmin Password",
      "priority" : 3.0,
      "links" : { }
    }, {
      "name" : "cuberite.motd.url",
      "type" : "java.lang.String",
      "description" : "URL pointing at motd.txt file with Message of the Day show to players on joining your server",
      "reconfigurable" : false,
      "label" : "MOTD URL (optional)",
      "priority" : 4.0,
      "links" : { }
    }, {
      "name" : "plugin.worldedit",
      "type" : "java.lang.Boolean",
      "description" : "Install WorldEdit Plugin",
      "defaultValue" : true,
      "reconfigurable" : false,
      "label" : "Install WorldEdit Plugin",
      "priority" : 5.0,
      "links" : { }
    }, {
      "name" : "plugin.essentials",
      "type" : "java.lang.Boolean",
      "description" : "Install Essentials Plugin",
      "defaultValue" : true,
      "reconfigurable" : false,
      "label" : "Install Essentials Plugin",
      "priority" : 6.0,
      "links" : { }
    }, {
      "name" : "plugin.magiccarpet",
      "type" : "java.lang.Boolean",
      "description" : "Install MagicCarpet Plugin",
      "defaultValue" : true,
      "reconfigurable" : false,
      "label" : "Install MagicCarpet Plugin",
      "priority" : 7.0,
      "links" : { }
    }, {
      "name" : "plugin.hungergames",
      "type" : "java.lang.Boolean",
      "description" : "Install HungerGames Plugin",
      "defaultValue" : false,
      "reconfigurable" : false,
      "label" : "Install HungerGames Plugin",
      "priority" : 8.0,
      "links" : { }
    }, {
      "name" : "plugin.skyblock",
      "type" : "java.lang.Boolean",
      "description" : "Install SkyBlock Plugin",
      "defaultValue" : false,
      "reconfigurable" : false,
      "label" : "Install SkyBlock Plugin",
      "priority" : 9.0,
      "links" : { }
    }, {
      "name" : "plugin.login",
      "type" : "java.lang.Boolean",
      "description" : "Install Login Plugin",
      "defaultValue" : false,
      "reconfigurable" : false,
      "label" : "Install Login Plugin",
      "priority" : 10.0,
      "links" : { }
    } ]
  } ],
  "policies" : [ ],
  "enrichers" : [ ],
  "locations" : [ ],
  "locationResolvers" : [ ]
}
