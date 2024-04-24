export function setParams(path: string) {
  const pathSplit = path.split(":");

  if (!pathSplit[1]) return null;

  const searchParams = pathSplit[pathSplit.length - 1];
  return {
    params: searchParams,
    pathname: `${pathSplit[0]}searchParams`,
  };
}
