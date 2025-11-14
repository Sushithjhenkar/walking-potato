export default {
  async fetch(request, env) {
    const acceptHeader = request.headers.get('accept') || '';
    const assetResponse = await env.ASSETS.fetch(request);

    if (assetResponse && assetResponse.status !== 404) {
      return assetResponse;
    }

    if (acceptHeader.includes('text/html')) {
      const url = new URL(request.url);
      url.pathname = '/index.html';
      return env.ASSETS.fetch(new Request(url.toString(), request));
    }

    return new Response('Not found', { status: 404 });
  },
};
