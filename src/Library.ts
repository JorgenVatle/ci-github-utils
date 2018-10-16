import Commands from "./commands";
import { Package } from "./src";

export default {

    /**
     * Find command by name.
     *
     * @param name
     */
    findCommand(name: string) {
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
        command.run(cli.parse(command.args));
    },

    /**
     * Available commands.
     */
    get commands() {
        return Commands.map((command: Package.Command) => {
            return command.details.name;
        })
    }
}