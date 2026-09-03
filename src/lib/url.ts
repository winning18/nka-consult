export function url(path: string): string {
  const base = import.meta.env.BASE_URL;
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const rawPath = path.startsWith('/') ? path : `/${path}`;

  const [pathname, query] = rawPath.split('?');
  const lastSegment = pathname.split('/').pop() ?? '';
  const isFile = lastSegment.includes('.');
  const normalizedPathname = !isFile && !pathname.endsWith('/') ? `${pathname}/` : pathname;

  return `${cleanBase}${normalizedPathname}${query ? `?${query}` : ''}`;
}
