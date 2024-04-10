import { Post } from '@/lib/models';
import { connectToDb } from '@/lib/utils';
import { NextResponse } from 'next/server';

export const GET = async (req) => {
	try {
		connectToDb();
		const posts = await Post.find();
		return NextResponse.json(posts);
	} catch (err) {
		console.error(err);
		throw new Error(err);
	}
};
