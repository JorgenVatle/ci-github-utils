import { Package } from "./src";

export default abstract class Command {

    /**
     * Object containing required fields from the args property.
     */
    required?: any;

    /**
     * Object containing CLI arguments.
     *
     * @link https://github.com/node-js-libs/cli#command-line-arguments-parser
     */
    args?: any;

    /**
     * Parsed CLI arguments.
     */
    params: any;

    /**
     * Object containing the command name and description.
     */
    details: {
        name: string,
        description: string,
    };

    /**
     * Instance of package Library.
     */
    library: Package.Library;

    /**
     * Command constructor.
     *
     * @param params    // `CLI.parse()`d commands.
     * @param library   // Instance of Library
     */
    constructor(params: any, library: Package.Library) {
        this.params = params;
        this.library = library;
    }

    /**
     * Run the command.
     */
    run: () => void;

}