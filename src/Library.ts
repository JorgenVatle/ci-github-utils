import Commands from "./commands";
import { Package } from "./src";
import Command from "./Command";

export default {

    /**
     * Find command by name.
     *
     * @param name
     */
    findCommand(name: string): typeof Command {
        return Commands.find((command) => {
            return command.details.name === name;
        });
    },

    /**
     * Checks if the given command exists.
     *
     * @param name
     */
    isCommand(name: string) {
        return !!this.findCommand(name);
    },

    /**
     * Prepare new exception.
     *
     * @param message
     */
    exception(message: string) {
        return new Error(message);
    },

    /**
     * Run the given named command.
     *
     * @param name
     * @param cli
     */
    runCommand(name: string, cli: Package.CLI) {
        const command = this.findCommand(name);
        new command(cli.parse(command.args, this.commands), this).run();
    },

    /**
     * Exit with the given message.
     *
     * @param message
     */
    complete(message: any) {
        console.log(message);
        process.exit(0);
    },

    /**
     * Available commands.
     */
    get commands() {
        return Commands.map((command: typeof Command) => {
            return command.details.name;
        })
    },

    /**
     * Package user agent.
     */
    get userAgent() {
        const npm = require('../package.json');
        return `CI-Github-Utils v${npm.version} (${npm.homepage})`;
    },

    /**
     * Build path to the given endpoint.
     *
     * @param to
     * @param base
     */
    buildPath(to: string, base = 'https://api.github.com/') {
        return (base + '/').replace(/\/+$/, '') +
            to.replace(/^\/+/, '/');
    }
}