import * as CLI from 'cli';
import Library from "./Library";

declare module Package {
    type CLI = typeof CLI;
    type Library = typeof Library;

    interface Command {
        run: (cli: CLI, lib: Library) => void,
        details: {
            name: string,
            description: string,
            path?: string,
        },
        args: any,
    }
}