import * as Path from 'path';
import { readdirSync } from 'fs';
import Command from "../Command";

const commandsLocation = './';

const files = readdirSync(commandsLocation).filter((path) => {
    if (path.match(/index\.js/)) {
        return false;
    }

    return !!path.match(/^.*.js$/);
});

const paths = files.map((path: string) => {
    return Path.format({
        root: commandsLocation,
        base: path,
    });
});

const commands: Array<typeof Command> = paths.map((path) => {
    const command = require(path).default;
    command.details.path = path;

    return command;
});

export default commands;