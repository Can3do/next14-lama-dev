// const { default: mongoose } = require('mongoose');
import mongoose from 'mongoose';

const connection = {};

export const connectToDb = async () => {
	try {
		if (connection.isConnected) {
			console.log('usando la conexion existente');
			return;
		}
		const db = await mongoose.connect(process.env.MONGO);
		connection.isConnected = db.connections[0].readyState;
		console.log('conectado con exito!');
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
};
