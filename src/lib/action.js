'use server';

import { connectToDb } from './utils';
import { Post, User } from './models';
import { revalidatePath } from 'next/cache';
import { signIn, signOut } from './auth';
import bcrypt from 'bcryptjs';

export const addPost = async (formData) => {
	const { title, desc, slug, userId } = Object.fromEntries(formData);

	try {
		connectToDb();
		const newPost = new Post({
			title,
			desc,
			slug,
			userId,
		});
		await newPost.save();
		console.log('saved to db');
		revalidatePath('/blog');
	} catch (err) {
		console.error(err);
		return { error: 'something went wrong' };
	}
};

export const deletePost = async (formData) => {
	const { id } = Object.fromEntries(formData);

	try {
		connectToDb();

		await Post.findByIdAndDelete(id);
		console.log('deleted from db');
		revalidatePath('/blog');
	} catch (err) {
		console.error(err);
		return { error: 'something went wrong' };
	}
};

export const handleGithubLogin = async () => {
	'use server';
	await signIn('github');
};
export const handleLogout = async () => {
	'use server';
	await signOut();
};

export const register = async (previousState, formData) => {
	const { username, email, password, repeat_password, img } =
		Object.fromEntries(formData);

	if (password !== repeat_password) {
		return { error: 'Passwords do not match' };
	}

	try {
		connectToDb();
		const user = await User.findOne({ username });
		const userEmail = await User.findOne({ email });

		if (user) {
			return { error: 'Username already exists' };
		}

		if (userEmail) {
			return { error: 'This email already in use' };
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = new User({
			username,
			email,
			password: hashedPassword,
			img,
		});
		await newUser.save();
		console.log('user saved to db');
		return { success: true };
	} catch (err) {
		console.log(err);
		return { error: 'Something went wrong' };
	}
};

export const login = async (previousState, formData) => {
	const { username, password } = Object.fromEntries(formData);

	try {
		await signIn('credentials', { username, password });
	} catch (err) {
		if (err.message.includes('CredentialsSignin')) {
			return { error: 'Invalid username or password' };
		}
		throw err;
	}
};
