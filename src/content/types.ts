export type Tag = {
    content: string;
    color: string;
};

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
    tags: Tag[];
    state: "planning" | "in progress" | "concluded" | "on hold" | "abandoned";
    githubLink?: string;
    imageX?: number;
}

export interface ArtMeta extends EntryMeta {
    type: "art"; // type discriminant
    x: number;
    yGapAfter: number;
}

export type CreationType = "textile" | "sculpture" | "3D" | "origami";
export interface CreationMeta extends EntryMeta {
    type: CreationType; // type discriminant
    x: number;
    y: number;
}

export interface ResearchMeta extends EntryMeta {
    type: "research"; // type discriminant
    dateStart: string;
    tags: Tag[];
    state: "planning" | "in progress" | "concluded" | "on hold" | "abandoned";
}