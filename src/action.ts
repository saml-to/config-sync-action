import { getInput, info, setFailed } from '@actions/core';
import { Configuration, IDPApi } from '../api/github-sls-rest-api';
import { boolean } from 'boolean';

const { GITHUB_TOKEN, GITHUB_REPOSITORY, DEV, API_KEY } = process.env;

export class Action {
  async run(): Promise<void> {
    if (!GITHUB_TOKEN) {
      setFailed(`Missing GITHUB_TOKEN environment variable`);
      return;
    }

    if (!GITHUB_REPOSITORY) {
      throw new Error('Missing GITHUB_REPOSITORY environment variable');
    }

    const [org, repo] = GITHUB_REPOSITORY.split('/');
    if (!org || !repo) {
      throw new Error(
        `Unable to parse owner and repo from GITHUB_REPOSITORY environment variable: ${GITHUB_REPOSITORY}`,
      );
    }

    const configuration = new Configuration({ accessToken: GITHUB_TOKEN });
    if (DEV) {
      configuration.basePath = 'https://sso-nonlive.saml.to/github';
      configuration.apiKey = API_KEY;
    }

    const api = new IDPApi(configuration);

    const dryrun = boolean(getInput('dryrun', { required: false }));
    const verbose = boolean(getInput('verbose', { required: false }));

    if (verbose) {
      info(`Refreshing configuration for \`${org}/${repo}\` (dryrun: ${dryrun})`);
    }

    const { data: response } = await api.refreshOrgRepoConfig(org, repo, dryrun);

    if (verbose) {
      info(`Configuration: ${JSON.stringify(response.config, null, 2)}`);
    }

    info(
      `Configuration at \`${response.path}\` ${dryrun ? 'refreshed' : 'fetched'} for \`${
        response.org
      }/${response.repo}\` (branch: ${response.branch}) (dryrun: ${response.dryrun})`,
    );
  }
}
