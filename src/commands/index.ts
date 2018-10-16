import * as Path from 'path';
import { readdirSync } from 'fs';
import { Package } from "../src";

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

const commands: Array<Package.Command> = paths.map((path) => {
    const command = require(path).default;
    command.details.path = path;

    return command;
});

export default commands;