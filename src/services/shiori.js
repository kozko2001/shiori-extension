const login = async (username, password, remember, basePath) => {
  const data = { username, password, remember };
  const url = `${basePath}/api/login`;

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
  });

  return {
    token: await response.text(),
    ok: response.ok,
  };
};

const insertBookmark = async (token, basePath, url, title = '') => {
  const data = {
    excerpt: '',
    id: -1,
    tags: [],
    title,
    url,
  };
  const endpoint = `${basePath}/api/bookmarks`;
  const headers = new Headers({
    Authorization: `Bearer ${token}`,
  });

  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  });

  const { ok } = response;

  return {
    page: ok ? await response.json() : {},
    ok,
    error: ok ? null : await response.text(),
  };
};

export { login, insertBookmark };
