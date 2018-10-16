import * as CLI from 'cli';
import Library from "./Library";

CLI.parse(null, Library.commands);

const command = CLI.command;

if (!Library.isCommand(command)) {
    CLI.error(`Unknown command! (${command})`);
    CLI.info('Use --help to view a list of commands');
    process.exit(1);
}

try {
    Library.runCommand(command, CLI);
} catch (error) {
    CLI.fatal(error.message);
}