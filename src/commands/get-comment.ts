import * as Request from 'request-promise';
import { Package } from "../src";

export default {
    run({ owner, repo, hash }: Package.CliArgs, lib: Package.Library) {
        Request({
            url: lib.buildPath(`/repos/${owner}/${repo}/git/commits/${hash}`),
            headers: {
                'User-Agent': lib.userAgent,
            }
        }).then((response) => {
                lib.complete(response.body.message)
            })
            .catch((error) => {
                throw lib.exception(error.message);
            });
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