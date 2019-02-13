export class User {
    login: {
        uuid: string;
    };
    email: string;
    phone: string;
    name: {
        title: string,
        first: string,
        last: string
    };
    picture: {
        medium: string
    };
    constructor() {
        this.login = {
            uuid : ''
        };
        this.email = '';
        this.phone = '';
        this.name = {
            title: '',
            first: '',
            last: ''
        };
        this.picture = {
            medium: ''
        };
    }
}
