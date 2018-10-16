import * as CLI from "cli";

const cli = CLI.parse({
    repo: ['r', 'GitHub repository'],
    hash: ['h', 'GitHub commit hash/sha'],
    owner: ['o', 'GitHub repository owner username']
}, [
    'commit-message'
]);

export default {
    cli,
    output(message: string) {
        console.log(message);
    },
}