# Slik Dev Documentation

This is the official documentation for Slik Dev - a comprehensive toolkit for building production-ready SaaS applications.

## Development

Install the [Mintlify CLI](https://www.npmjs.com/package/mint) to preview your documentation changes locally:

```bash
npm i -g mint
```

Run the following command at the root of your documentation folder (where `docs.json` is located):

```bash
mint dev
```

View your local preview at `http://localhost:3000`.

## Deployment

The documentation is deployed via Mintlify and hosted at `https://slik-dev.vercel.app/docs`.

### Setting up Mintlify

1. Connect your GitHub repository to [Mintlify](https://dashboard.mintlify.com)
2. Configure your custom domain in the Mintlify dashboard
3. Install the Mintlify GitHub app to enable automatic deployments

### Automatic Deployments

Changes are deployed to production automatically after pushing to the default branch. The documentation will be available at:
- Production: `https://slik-dev.vercel.app/docs`
- Mintlify subdomain: `https://faizyab07-6576c4e4.mintlify.dev`

### Custom Domain Configuration

To host the documentation at `/docs` on your main domain, configure the following in your hosting provider:

**Cloudflare Configuration:**
```javascript
addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  try {
    const urlObject = new URL(request.url);
    // If the request is to the docs subdirectory
    if (/^\/docs/.test(urlObject.pathname)) {
      // Then Proxy to Mintlify
      const DOCS_URL = "faizyab07-6576c4e4.mintlify.dev";
      const CUSTOM_URL = "slik-dev.vercel.app";

      let url = new URL(request.url);
      url.hostname = DOCS_URL;

      let proxyRequest = new Request(url, request);

      proxyRequest.headers.set("Host", DOCS_URL);
      proxyRequest.headers.set("X-Forwarded-Host", CUSTOM_URL);
      proxyRequest.headers.set("X-Forwarded-Proto", "https");

      return await fetch(proxyRequest);
    }
  } catch (error) {
    // if no action found, play the regular request
    return await fetch(request);
  }

  return await fetch(request);
}
```

## Documentation Structure

- **index.mdx** - Landing page for the documentation
- **introduction.mdx** - Overview of Slik Dev
- **installation.mdx** - Installation guide
- **quickstart.mdx** - Quick start guide
- **configuration/** - Configuration options (stacks, themes, auth, database)
- **guides/** - Step-by-step guides (first project, customizing UI, adding pages, deploying)
- **reference/** - Reference documentation (CLI, tech stack, FAQ)

## Need help?

### Troubleshooting

- If your dev environment isn't running: Run `mint update` to ensure you have the most recent version of the CLI.
- If a page loads as a 404: Make sure you are running in a folder with a valid `docs.json`.
- If the custom domain isn't working: Check your DNS configuration and Cloudflare settings.

### Resources

- [Mintlify documentation](https://mintlify.com/docs)
- [Slik Dev GitHub](https://github.com/FaizyabHussain07/slik-dev-web)
- [Slik Dev Website](https://slik-dev.vercel.app/)
