export default interface Data {
    title: string;
    nickname?: string;
    key?: {
        key: string;
        meaning: string;
    }[];
    sections: {
        title: string;
        cheats: {
            title: string;
            methods: string[];
        }[];
    }[];
};