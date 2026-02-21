import type {EntryMeta} from "./../content/types.ts";

export function sortMetaEntries<T extends EntryMeta>(entries: T[]): T[] {
    return entries.sort((a, b) => {
        // sort by date
        const dateA = parseSortDate(a.dateEnd);
        const dateB = parseSortDate(b.dateEnd);
        return dateB - dateA;
    });
}

export function parseVisualDate(date: string): string {
    if (date.startsWith("-")) return "Before " + date.slice(1);
    const parts = date.split("/");
    if (Number(parts[1]))
        return parts[2] + ". " + parts[1] + ". " + parts[0];
    else if (parts[1] === "?")
        return parts[0];
    else
        return parts[1].charAt(0).toUpperCase() + parts[1].slice(1) + " " + parts[0];
}

function parseSortDate(date: string): number {
    if (date === "now") return Date.now();
    if (date.startsWith("-")) return new Date(date.slice(1) + "/01/01").getTime();
    const parts = date.split("/").map(p => (p === "?" ? "1" : p));
    if (parts[1] == "winter")
        parts[1] = "12"
    else if (parts[1] == "spring")
        parts[1] = "3"
    else if (parts[1] == "summer")
        parts[1] = "6"
    else if (parts[1] == "autumn")
        parts[1] = "9"
    const normalized = parts.join("/");
    const timestamp = new Date(normalized).getTime();

    return isNaN(timestamp) ? 0 : timestamp;
}