export function setParams(path: string) {
  if(path) {
    const pathSplit = path.split(":");
    const searchParams = pathSplit[pathSplit.length - 1];
    return {
      params: searchParams,
      pathname: `${pathSplit[0]}searchParams`
    };
  }

  return null;
}
