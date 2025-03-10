# TipCryp

## Description

TipCryp is a simple web app that allows users to tip each other with cryptocurrency. It is built with [Next.js](https://nextjs.org/) and [Reown Appkit](https://reown.com/appkit).

## Development

### Prerequisites

- [Bun](https://bun.sh/)

### Getting Started

First, install the dependencies:

```bash
bun i
```

Next, create a `.env` file in the root of the project by copying the `.env.example` file:

```bash
cp .env.example .env
```

To start the local development server, run the following command:

```bash
bun dev
```

## Deployment

This project is a static site, so first it should be built:

```bash
bun run build
```

Before deploying, if you want to preview the site locally, you can run:

```bash
bun run serve
```

## Contributing

See our [Contributing Guide](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE-MIT).
