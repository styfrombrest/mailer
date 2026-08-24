# @styfrombrest/mailer

Internal mailer for my pet projects.

It uses `nodemailer` under the hood to send an email from nodejs script.

*Usage:*

```const result = await sendMail(config: ISendMailerOptions, mailOptions: IMailOptions);```

```js
interface IMailOptions {
  from: string;
  to: string;
  subject?: string;
  text?: string;
  html?: string;
}
```

```js
interface ISendMailerOptions {
  host: string;
  port: number;
  secure?: boolean;
  auth: {
    user: string;
    pass: string;
  }
}
```

**Troubleshooting**:
- for yandex `IMailOptions.from` must be the same as `ISendMailerOptions.auth.use` otherwise it won't accept email to send

## Releasing

Every push to `master` triggers
[the release workflow](.github/workflows/release.yml). It installs dependencies,
builds the package, runs semantic-release, publishes the public package to npm,
and creates the matching `vX.Y.Z` Git tag and GitHub release.

The conventional commit type controls the release size:

- `feat: ...` creates a minor release.
- `fix: ...` creates a patch release.
- A commit with `BREAKING CHANGE:` creates a major release.
- Any other commit still creates a patch release, so every push containing new
  commits produces a release.

To request a minor release, use a `feat:` commit and push it to `master`:

```sh
git commit -m "feat: add attachment support"
git push origin master
```

To request a major release, add a `BREAKING CHANGE:` footer separated from the
commit subject by a blank line:

```sh
git commit -m "feat: change the sendMail API" \
  -m "BREAKING CHANGE: sendMail now requires a transport argument"
git push origin master
```

semantic-release analyzes every commit since the previous release and uses the
highest required version change. For example, a push containing both `fix:` and
`feat:` commits creates a minor release, while any breaking-change commit makes
it a major release.

Do not manually change the version in `package.json`, create release tags, or run
`npm publish`. semantic-release derives the next version from Git history. With
the existing `v1.0.0` tag, the first automated release will be at least `1.0.1`.

### One-time npm setup

Publishing uses npm trusted publishing through GitHub Actions OIDC, without a
long-lived `NPM_TOKEN`. Configure the trusted publisher in the npm settings for
`@styfrombrest/mailer` with these values:

- Provider: GitHub Actions
- Organization or user: `styfrombrest`
- Repository: `mailer`
- Workflow filename: `release.yml`
- Environment: leave blank
- Allowed action: `npm publish`

The workflow already grants `id-token: write` and uses compatible Node and npm
versions. The trusted publisher must be configured before the first workflow run
can publish.

### Local release checks

Use the project's Node version and verify the build and package contents before
pushing to `master`:

```sh
nvm install
nvm use
npm ci
npm run build
env HUSKY=0 npm pack --dry-run
git diff --check
```

There is currently no test or lint script, so the build and package dry run are
the available local release checks.

### Known `npm audit` findings (release tooling)

`npm audit` reports high-severity issues in `tar`, `ip-address`,
`brace-expansion`, and `undici`. These are bundled dependencies of the `npm`
CLI package itself (vendored inside its published tarball), pulled in
transitively via `@semantic-release/npm`. They only affect the local/CI
release pipeline, not the published `@styfrombrest/mailer` package.

As of 2026-08-24, there is no fix available: `npm@12.0.2` (the latest npm CLI
release) still bundles the same vulnerable versions (`tar@7.5.19`,
`ip-address@10.2.0`, `undici@6.27.0`, `brace-expansion@5.0.7`), confirmed by
inspecting its published tarball directly. `npm audit`'s suggested fix
(`@semantic-release/npm@12.0.2`) actually pins an *older* npm CLI
(`^10.9.3`) and would be a downgrade with no security benefit — do not apply
`npm audit fix --force` for this. Re-check once the npm CLI project ships a
patched release.
