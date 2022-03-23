export interface AdminState {
    usersList: any[];
    usersListLoading: boolean;
    userProjects: any;
    userProjectsLoading: boolean;
    error: any;
}

export const adminInitialState: AdminState = {
    usersList: [],
    usersListLoading: false,
    userProjects: {},
    userProjectsLoading: false,
    error: null
};
