import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = { 
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials, req) {
                if ('1' === credentials.username && '1' === credentials.password) {
                    return { id: '1', name: 'J Smith', email: 'jsmith.example.com' };
                } else {
                    return null;
                }
            }
        })
    ]
};

export default NextAuth(authOptions);