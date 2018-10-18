import Command from "../Command";

export default class GetComment extends Command {
    static details = {
        name: 'get-comment',
        description: 'Fetch the comment of the given Git commit.'
    };

    static args = {
        repo: ['r', 'GitHub repository', 'string'],
        hash: ['h', 'GitHub commit hash/sha', 'string'],
        owner: ['o', 'GitHub repository owner username', 'string'],
    };

    protected required = {
        repo: true,
        hash: true,
        owner: true,
    };

    protected async command() {
        const { owner, repo, hash } = this.params;
        const response = await this.request('GET', `/repos/${owner}/${repo}/git/commits/${hash}`)
        this.library.complete(JSON.parse(response).message);
    }
}
