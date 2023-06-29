import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

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
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ]
};

export default NextAuth(authOptions);