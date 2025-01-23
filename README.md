# Alveus.gg Shared Data

Shared data repository for Alveus.gg projects, installed as a dependency in the
[website](https://github.com/alveusgg/alveusgg) and
[extension](https://github.com/alveusgg/extension) repositories.

## Installation

To install this repository as a dependency in a project, you will need to configure NPM to use the
GitHub Packages NPM registry for `@alveusgg` packages. This can be done by creating an `.npmrc` file
in the root of the project with the following content:

```text
@alveusgg:registry=https://npm.pkg.github.com
```

Using your GitHub username (lowercase) as the username when prompted and a
[GitHub personal access token (classic)](https://github.com/settings/tokens/new) with the
`read:packages` scope as the password when prompted, authenticate with the GitHub Package Registry
using the following command:

```bash
npm login --auth-type=legacy --registry=https://npm.pkg.github.com
```

Finally, install the package as normal using `npm install @alveusgg/data`.

## Development

To work with this repository locally, install the dependencies with `npm ci`.

To test changes locally across the Alveus.gg projects, update the version in this repository using
`npm version --no-git-tag-version preminor` (use `prepatch` instead if the change is a fix, or
`prerelease` for repeat testing), and install this repository as a file-based dependency:

- Website: `cd apps/website && pnpm remove @alveusgg/data && pnpm add file:../../../data`
- Extension: `pnpm remove @alveusgg/data && pnpm add file:../data`

Alternatively for maintainers with write access to the repository, with the version updated, push
the pre-release branch to GitHub and install the version reported by the `publish/publish` action:

- Website: `cd apps/website && pnpm add @alveusgg/data@<version>-pre.<hash>`
- Extension: `pnpm add @alveusgg/data@<version>-pre.<hash>`

When the change is ready to release, update the version in this repository using
`npm version --no-git-tag-version minor` (use `patch` instead if the change is a fix) and open a
pull request.

Once the pull request is merged, update the dependency in the website and extension:

- Website: `cd apps/website && pnpm add @alveusgg/data@latest`
- Extension: `pnpm add @alveusgg/data@latest`
