export type ContentMeta = {
    title: string;
    dateStart: string;        // YYYY-MM-DD
    dateEnd: string;        // YYYY-MM-DD
    description: string;
    image?: string;
    imageX?: number;
    tags?: string[];
    link?: string;
    sourceLink?: string;
    state: "planning" | "in progress" | "concluded" | "on hold" | "abandoned"
    category: "art" | "project";
};