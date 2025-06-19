import config from '../config/config.tsx';
import { Client, Account, ID } from 'appwrite';

export class AuthService {
  client = new Client(); // Initialize Appwrite client
  account: Account; // Declare Account type (TypeScript best practice)

  constructor() {
    // Set endpoint and project ID when class object is created
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({
    email,
    password,
    name,
  }: {
    email: string;
    password: string;
    name: string;
  }) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name);

      if (userAccount) {
        // Log in right after account creation
        return this.login({ email, password }); // <- call the function correctly
      }

      return userAccount;
    } catch (error) {
      throw error;
    }
  }

  async login({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    try {
      const loginSession = await this.account.createEmailPasswordSession(email, password);
      return loginSession;
    } catch (error) {
      throw error;
    }
  }

  async GetCurrentUser() {
    try {
      const getUser = await this.account.get();
      return getUser || null; // return value even if null
    } catch (error) {
      return null; // safer fallback for unauthenticated users
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

// Exporting a single object (singleton) for reuse
const Authservice = new AuthService();
export default Authservice;
