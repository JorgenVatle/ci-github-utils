import * as Path from 'path';
import { readdirSync } from 'fs';

const files = readdirSync('./commands').filter((path) => {
    if (path.match(/index\.js/)) {
        return false;
    }

    return !!path.match(/^.*.js$/);
});

const paths = files.map((path: string) => {
    return Path.format({
        root: './commands/',
        base: path,
    });
});

const commands = paths.map((path) => {
    const command = require(path).default;
    command.details.path = path;
});

export default commands;