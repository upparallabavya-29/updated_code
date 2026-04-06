import { supabase, IS_MOCK_ENV } from "./supabaseClient";
import { User as SupabaseUser } from '@supabase/supabase-js';

export interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
    role: "admin" | "user";
    lastLogin: string;
}

// Map Supabase User to our local User interface
export function mapSupabaseUser(user: SupabaseUser | null): User | null {
    if (!user) return null;

    // Extract metadata
    const name = user.user_metadata?.name || user.email?.split('@')[0] || "User";
    const avatar = user.user_metadata?.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}&backgroundColor=random`;
    const role = user.user_metadata?.role || "user";

    return {
        id: user.id,
        email: user.email || "",
        name,
        avatar,
        role,
        lastLogin: user.last_sign_in_at || new Date().toISOString()
    };
}

// --- Local Mock Services ---
const MOCK_STORAGE_KEY = "arivision_mock_users";
const SESSION_KEY = "arivision_session";

function getMockUsers(): Record<string, any> {
    const data = localStorage.getItem(MOCK_STORAGE_KEY);
    return data ? JSON.parse(data) : {};
}

function saveMockUser(user: any) {
    const users = getMockUsers();
    users[user.email] = user;
    localStorage.setItem(MOCK_STORAGE_KEY, JSON.stringify(users));
}

export async function getCurrentUser(): Promise<User | null> {
    if (IS_MOCK_ENV) {
        const session = localStorage.getItem(SESSION_KEY);
        return session ? JSON.parse(session) : null;
    }

    try {
        const { data: { session } } = await supabase.auth.getSession();
        return mapSupabaseUser(session?.user ?? null);
    } catch (err) {
        console.error("Auth session failed, falling back to mock check", err);
        const session = localStorage.getItem(SESSION_KEY);
        return session ? JSON.parse(session) : null;
    }
}

export async function loginUser(email: string, password?: string): Promise<User> {
    if (IS_MOCK_ENV) {
        const users = getMockUsers();
        const user = users[email];

        if (!user || (password && user.password !== password)) {
            throw new Error("Invalid email or password");
        }

        const authenticatedUser = {
            id: user.id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            role: user.role,
            lastLogin: new Date().toISOString()
        };

        localStorage.setItem(SESSION_KEY, JSON.stringify(authenticatedUser));
        return authenticatedUser;
    }

    if (!password) {
        throw new Error("Password is required for Supabase authentication.");
    }

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        throw new Error(error.message);
    }

    const user = mapSupabaseUser(data.user);
    if (!user) throw new Error("User mapping failed post-login");
    return user;
}

export async function registerUser(user: Omit<User, "id" | "lastLogin" | "role" | "avatar"> & { password?: string }): Promise<User> {
    if (IS_MOCK_ENV) {
        const users = getMockUsers();
        if (users[user.email]) {
            throw new Error("User already exists.");
        }

        const newUser: User = {
            id: Math.random().toString(36).substring(2, 15),
            name: user.name,
            email: user.email,
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(user.name)}&backgroundColor=random`,
            role: "user",
            lastLogin: new Date().toISOString()
        };

        // Save with password for mock "auth"
        saveMockUser({ ...newUser, password: user.password });
        localStorage.setItem(SESSION_KEY, JSON.stringify(newUser));

        return newUser;
    }

    if (!user.password) {
        throw new Error("Password is required for Supabase registration.");
    }

    const { data, error } = await supabase.auth.signUp({
        email: user.email,
        password: user.password,
        options: {
            data: {
                name: user.name,
                role: "user",
            }
        }
    });

    if (error) {
        throw new Error(error.message);
    }

    const newUser = mapSupabaseUser(data.user);
    if (!newUser) throw new Error("User mapping failed post-signup");
    return newUser;
}

export async function logoutUser() {
    if (IS_MOCK_ENV) {
        localStorage.removeItem(SESSION_KEY);
        return;
    }
    await supabase.auth.signOut();
}

// Temporary mock for Admin Dashboard until a profiles table is implemented
export function getAllUsers(): User[] {
    if (IS_MOCK_ENV) {
        const users = getMockUsers();
        return Object.values(users).map(u => ({
            id: u.id,
            name: u.name,
            email: u.email,
            avatar: u.avatar,
            role: u.role,
            lastLogin: u.lastLogin
        }));
    }
    return [];
}
