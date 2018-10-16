import * as CLI from 'cli';
import Library from "./Library";

declare module Package {
    type CLI = typeof CLI;
    type Library = typeof Library;
    type CliArgs = any;

    interface Command {
        run: (args: CliArgs, lib: Library) => void,
        details: {
            name: string,
            description: string,
            path?: string,
        },
        args: any,
        required?: any,
    }
}