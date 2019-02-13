import { environment } from '../../environments/environment';

const envUrlAppends = {
    baseApi: environment.apiUrl
};
export const ApplicationUrls = {
    baseApi: environment.apiUrl,
    user: {
        getUsers: envUrlAppends.baseApi + ''
    }
};
