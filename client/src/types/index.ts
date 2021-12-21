interface TeamSettings {
    consolidatedPrimaryTeam: string;
    channel_id?: string;
    consolidatedTeams?: string[];

}

interface UserName {
    id: string;
    username: string;
}

export interface Team {
    id?: string;
    name: string;
    settings: TeamSettings;
    directs?: string[];
    s_manager?: string[];
    manager?: UserName;
    secondary_managers?: UserName[];
    members?: UserName[];
}

export interface TeamArray {
    [key: string]: Team;
}

export interface User {
    realName: string;
    manager: string[];
    s_manager: string[];
    teams: TeamArray;
}
