# action-name

![GitHub release (latest by date)](https://img.shields.io/github/v/release/org/repo?label=version) ![GitHub issues](https://img.shields.io/github/issues/org/repo) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/org/repo/Push%20to%20Main) [![Gitter](https://img.shields.io/gitter/room/org/repo)](https://gitter.im/org/repo)

Action Description

## Usage

See [action.yml](action.yml)

```yaml
steps:
  - uses: saml-to/assume-aws-role-action@v1
    with:
      inputKey: inputValue
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Inputs

### `inputKey` (**Required**)

Input Key

### `optionalInputKey` (_Optional_)

Optional Input Key

**Default**: ``

## Outputs

### `outputKey`

Output key

## Maintainers

- [Org](https://github.com/org)

## Help & Support

- [Message us on Gitter](https://gitter.im/org/repo)
- [Discussions](https://github.com/org/repo/discussions)

## License

[Apache-2.0 License](LICENSE)
