# ![brooklyn-minecraft](https://raw.githubusercontent.com/johnmccabe/brooklyn-minecraft/gh-pages/images/brooklyn-minecraft.png)
An [Apache Brooklyn](http://brooklyn.apache.org) YAML Blueprint to deploy a [Cuberite](http://www.cuberite.org) [Minecraft](https://minecraft.net/) Server from a binary release.

**Note**: Cuberite currently supports Minecraft `1.8.x` clients only, so you should create or update your profile in the Minecraft launcher to use the latest `1.8.x` version.

The following plugins may be optionally installed with default configuration:

- **MagicCarpet** - https://github.com/mc-server/MagicCarpet
- **WorldEdit** - https://github.com/cuberite/WorldEdit
- **Essentials** - https://github.com/mc-server/Essentials
- **HungerGames** - https://github.com/mc-server/HungerGames
- **SkyBlock** - https://github.com/Seadragon91/SkyBlock
- **Login** - https://github.com/NiLSPACE/Login

Currently you can customise the following configuration parameters:

- **cuberite.url**: A URL pointing at a Cuberite release archive (defaults to latest)
- **cuberite.port**: The port which the Cuberite server will listen on, defaults to `25565` (the Minecraft default).
- **cuberite.webadmin.port**: The port which the Cuberite WebAdmin server will listen on, defaults to `8080`.
- **cuberite.motd.url**: Optional URL pointing at motd.txt file with Message of the Day show to players on joining your server. If no URL is supplied a built-in default is used. 
- **plugin.worldedit**: Flag controlling whether to install the WorldEdit Plugin, defaults to `true`.
- **plugin.essentials**: Flag controlling whether to install the Essentials Plugin, defaults to `true`.
- **plugin.magiccarpet**: Flag controlling whether to install the MagicCarpet Plugin, defaults to `true`.
- **plugin.hungergames**: Flag controlling whether to install the HungerGames Plugin, defaults to `false`.
- **plugin.skyblock**: Flag controlling whether to install the SkyBlock Plugin, defaults to `false`.
- **plugin.login**: Flag controlling whether to install the Login Plugin, defaults to `false`.
- **cuberite.maintenance.duration**: Time, in seconds, during which the absense of a running Cuberite daemon will be ignored. Used when the server is stopped to perform a backup. Defaults to `300` seconds.
- **cuberite.maintenance.warning.duration**: Time, in seconds, during which shutdown warning messages are broadcast to the server. Defaults to `300` seconds.
- **cuberite.server.post.launch.delay**: Initial delay, in seconds, to allow server startup to complete, defaults to `5` seconds.
- **cuberite.server.command.delay**: Delay, in seconds, between WebAdmin curl requests, defaults to `2` seconds.
- **cuberite.backup.directory**: Directory where backup archives will be stored, defaults to `/var/cuberite/backup`.
- **cuberite.maintenance.warning.interval`: Frequency, in seconds, with which shutdown warning messages are broadcast to the server, defaults to `10` seconds.

The following effectors are available:

- **backupWorld**: Creates a `tar.gz` of the current worlds.
- **backupFull**: Creates a `tar.gz` of the current config and worlds.
- **listBackups**: Lists backups on the server.
- **restoreBackup**: Restores a backup, use the `listBackups` effector to see what backup files are available.
- **deleteBackups**: Deletes the specified backup file, can take a wildcard to delete multiple backups.
- **regenerateWorlds**: Deletes the current world before regenerating a fresh one.
- **showLogs**: Shows the last n-lines of the current Cuberite log.
- **broadcastMessage**: Broadcast a message to everyone on the Minecraft server.


## Connecting to the WebAdmin pages

You can connect to the WebAdmin pages from the `main.uri` URL displayed on the Minecraft Server (Cuberite) entity, for example:

![webadmin-url](https://raw.githubusercontent.com/johnmccabe/brooklyn-minecraft/gh-pages/images/webadmin_url.png)

The `admin` users password can be found in the Minecraft Server (Cuberite) entity's `cuberite.webadmin.password` sensor (see the Sensor tab in the screenshot above).

## Connecting to the Minecraft server

You should connect using the IP address shown in the webadmin URL above, if you have specified a custom `cuberite.port` then you should specify that (no port is necessary if you have used the default value).