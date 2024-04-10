import { Post } from '@/lib/models';
import { connectToDb } from '@/lib/utils';
import { NextResponse } from 'next/server';

export const GET = async (req, { params }) => {
	const { slug } = params;
	try {
		connectToDb();
		const post = await Post.findOne({ slug });
		return NextResponse.json(post);
	} catch (err) {
		console.error(err);
		throw new Error('failedto fetch post');
	}
};

export const DELETE = async (req, { params }) => {
	const { slug } = params;
	try {
		connectToDb();
		await Post.deleteOne({ slug });
		return NextResponse.json('Post deleted');
	} catch (err) {
		console.error(err);
		throw new Error('failed to delete post');
	}
};