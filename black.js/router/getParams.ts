export function getSearchParams(path: string) {
  const pathname = new URL(`http://localhost${path}`).pathname;
  const pathnameSplited = pathname.split("/");
  const routeName = pathnameSplited[pathnameSplited.length - 2];
  const searchParams = pathnameSplited[pathnameSplited.length - 1];
  return [`/${routeName}`, searchParams];
}
