import * as CLI from 'cli';
import * as Path from 'path';
import { readdirSync } from 'fs';
import Library from "../Library";

export interface Command {
    run: (cli: typeof CLI, lib: typeof Library) => void,
    details: {
        name: string,
        description: string,
        path?: string,
    },
    args: any,
}

const files = readdirSync('./commands').filter((path) => {
    if (path.match(/index\.js/)) {
        return false;
    }

    return !!path.match(/^.*.js$/);
});

const paths = files.map((path: string) => {
    return Path.format({
        root: './',
        base: path,
    });
});

const commands: Array<Command> = paths.map((path) => {
    const command = require(path).default;
    command.details.path = path;

    return command;
});

export default commands;