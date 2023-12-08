export const latestBuildsUrl = new URL(
  'https://app.netlify.com/sites/diluzio/deploys',
);

export const gitHubProjectUrl = new URL(
  'https://github.com/maybeanerd/diluz.io',
);

export function getLinkToCommit (commitHash: string) {
  const newUrl = new URL(gitHubProjectUrl);
  newUrl.pathname = `${gitHubProjectUrl.pathname}/commit/${commitHash}`;
  return newUrl;
}
