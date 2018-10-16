import * as CLI from 'cli';
import Library from "./Library";

const commandName = CLI.parse(null, Library.commands).command;

if (!Library.isCommand(commandName)) {
    CLI.error('Unknown command!');
    CLI.info('Use --help to view a list of commands');
    process.exit(1);
}

try {
    Library.runCommand(commandName, CLI);
} catch (error) {
    CLI.fatal(error.message);
}