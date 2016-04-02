# ![brooklyn-minecraft](https://raw.githubusercontent.com/johnmccabe/brooklyn-minecraft/gh-pages/images/brooklyn-minecraft.png)
An [Apache Brooklyn](http://brooklyn.apache.org) YAML Blueprint to deploy a [Cuberite](http://www.cuberite.org) [Minecraft](https://minecraft.net/) Server from a binary release.

Currently you can customise the following configuration parameters:

- **cuberite.url**: A URL pointing at a Cuberite release archive (defaults to latest)
- **cuberite.port**: The port which the Cuberite server will listen on, defaults to `25565` (the Minecraft default).
- **cuberite.webadmin.port**: The port which the Cuberite WebAdmin server will listen on, defaults to `8080`.
- **cuberite.webadmin.password**: Password for the WebAdmin `admin` user, defaults to `p455w0rd`. It is **STRONGLY RECOMMENDED** that you choose your own password.
- **cuberite.motd.url**: Optional URL pointing at motd.txt file with Message of the Day show to players on joining your server. If no URL is supplied a built-in default is used. 
