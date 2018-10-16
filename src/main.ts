import * as CLI from 'cli';

const options = CLI.parse({
    repo: ['r', 'GitHub repository'],
    hash: ['h', 'GitHub commit hash/sha'],
    owner: ['o', 'GitHub repository owner username']
}, [
    'commit-message'
]);

function output(message: string) {
    console.log(message);
}