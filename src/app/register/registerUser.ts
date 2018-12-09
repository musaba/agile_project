export class RegisterUser {
    email: {
        type: String,
    }
    name: {
        type: String,
    }
    password: {
        type: String,
        required: [true, 'password error'],
    }
    phoneNumber: {
        type: String,
    }
    surname: {
        type: String,
    }
}