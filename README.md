# config-sync-action

![GitHub release (latest by date)](https://img.shields.io/github/v/release/saml-to/config-sync-action?label=version) ![GitHub issues](https://img.shields.io/github/issues/saml-to/config-sync-action) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/saml-to/config-sync-action/Push%20to%20Main) [![Gitter](https://img.shields.io/gitter/room/saml-to/config-sync-action)](https://gitter.im/saml-to/config-sync-action)

This action notifies the SAML.to backend that the repository was updated.

It will read and cache the contents of the `saml-to.yml` configuration file within the **default branch** in the repository.

## Usage

See [action.yml](action.yml)

```yaml
name: SAML.to Config Sync

on:
  workflow_dispatch:
  push:
    branches:
      - main

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: saml-to/config-sync-action@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Inputs

### `dryrun` (_Optional_)

Pull and validate the configuration but don't store it.

**Default**: `false`

### `verbose` (_Optional_)

Output the processed configuration.

**Default**: `false`

## Outputs

This action has no outputs.

## Maintainers

- [Scaffoldly](https://github.com/scaffoldly)
- [cnuss](https://github.com/cnuss)

## Help & Support

- [Message us on Gitter](https://gitter.im/saml-to/config-sync-action)
- [Discussions](https://github.com/saml-to/config-sync-action/discussions)

## License

[Apache-2.0 License](LICENSE)
