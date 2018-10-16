import * as CLI from 'cli';
import Library from "./Library";

const commandName = CLI.parse(null, Library.commands).command;

if (!Library.isCommand(commandName)) {
    throw Library.exception('Command not found!');
}

Library.runCommand(commandName, CLI);