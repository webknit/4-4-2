export interface Player {
    name: string | null;
    position: string[];
    country: string | null;
    picks: number | null;
}

export interface Team {
    gk: string;
    lb: string;
    cb1: string;
    cb2: string;
    rb: string;
    lm: string;
    cm1: string;
    cm2: string;
    rm: string;
    fr1: string;
    fr2: string;
}
