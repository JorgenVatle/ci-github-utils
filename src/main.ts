import * as CLI from 'cli';
import Library from "./Library";

const command = process.argv[2];

if (!Library.isCommand(command)) {
    CLI.error(`Unknown command! (${command})`);
    CLI.info('Available commands:');
    Library.commands.forEach((name) => {
        CLI.info(name);
    });
    process.exit(1);
}

try {
    Library.runCommand(command, CLI);
} catch (error) {
    CLI.fatal(error.message);
}