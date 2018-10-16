import { Package } from "./src";

export default abstract class Command {

    /**
     * Object containing required fields from the args property.
     */
    static required?: any;

    /**
     * Object containing CLI arguments.
     *
     * @link https://github.com/node-js-libs/cli#command-line-arguments-parser
     */
    static args?: any;

    /**
     * Object containing the command name and description.
     */
    static details: {
        name: string,
        description: string,
    };

    /**
     * Parsed CLI arguments.
     */
    protected params: any;

    /**
     * Instance of package Library.
     */
    protected library: Package.Library;

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
    public abstract run(): void;

}