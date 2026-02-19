export interface EntryMeta {
    id: string;
    title: string;
    dateEnd: string; // YYYY/MM/DD, -YYYY, YYYY/?/?, now
    description: string;
    image: string;
    link?: string;
}

export interface ProjectMeta extends EntryMeta {
    type: "project"; // type discriminant
    dateStart: string;
    tags: string[];
    state: "planning" | "in progress" | "concluded" | "on hold" | "abandoned";
    githubLink?: string;
    imageX?: number;
}

export interface ArtMeta extends EntryMeta {
    type: "art"; // type discriminant
    x: number;
    yGapAfter: number;
}

export type ContentMeta = ProjectMeta | ArtMeta;