import { useSearch } from "./useSearch";

export function useAlias(): string {
    const parsedSearch = useSearch();
    return (<string>parsedSearch.alias || "").toUpperCase();
}