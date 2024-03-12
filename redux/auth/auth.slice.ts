import { createSlice } from '@reduxjs/toolkit';

type IAuth = {
	name: string;
	id: number;
	avatar: string;
	total_followers: number;
	total_followings: number;
	total_posts: number;
	username: string;
};

const initialState: IAuth = {
	name: 'hon_3123',
	id: 3123,
	avatar:
		'https://instagram.fsgn5-6.fna.fbcdn.net/v/t51.2885-19/405213023_890771752415108_6344829081512918525_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsgn5-6.fna.fbcdn.net&_nc_cat=108&_nc_ohc=TSCswsuTYEkAX9mZ1Ol&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDwOfkOdqqOxXvXqu0tln-sYa3W8A3R9nCsBsesT4aNzQ&oe=65C24EFB&_nc_sid=8b3546',
	total_followers: 1,
	total_followings: 1,
	total_posts: 0,
	username: 'Khánh Hoàng',
};

export const authSlice = createSlice({
	name: '@@auth',
	initialState,
	reducers: {},
});

export const {} = authSlice.actions;
