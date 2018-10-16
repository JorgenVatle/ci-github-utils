import * as Request from 'request-promise';
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

    protected command() {
        const { owner, repo, hash } = this.params;
        Request({
            url: this.library.buildPath(`/repos/${owner}/${repo}/git/commits/${hash}`),
            headers: {
                'User-Agent': this.library.userAgent,
            }
        }).then((response) => {
            this.library.complete(response.body.message)
        }).catch((error) => {
            throw this.library.exception(error.message);
        });
    }
}
