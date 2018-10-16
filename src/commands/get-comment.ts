import { Package } from "../src";

export default {
    run(cli: Package.CLI, lib: Package.Library) {

    },

    details: {
        name: 'get-comment',
        description: 'Fetch the comment of the given Git commit.'
    },

    args: {
        repo: ['r', 'GitHub repository'],
        hash: ['h', 'GitHub commit hash/sha'],
        owner: ['o', 'GitHub repository owner username'],
    }
}