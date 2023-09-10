import React, { useState } from 'react';
import Paragraph from '@/components/atoms/Paragraph';
import AuthLayout from '@/layouts/AuthLayout';
import Button from '@/components/atoms/Button';
import supabase from '@/lib/supabase';
import withAuthRedirect from '@/hocs/withAuthRedirect';

const sineUpPage = () => {
  // emailとpasswordのstateを追加
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Supabaseを使用して登録処理
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password
    });

    if (error) {
      console.error("登録エラー:", error.message);
    } else {
      console.log("登録成功:", data);
      // ここで他の処理やリダイレクトなどを行うこともできます
    }
  }

  return (
    <AuthLayout>
      <form className='flex flex-col gap-6 mt-4' onSubmit={handleSubmit}>
        <label>
          <Paragraph text='Email' size='medium' color='black' />
          <input
            className='w-full mt-1 p-2 shadow-md'
            type="email"
            name="email"
            value={email}  // valueをstateにバインド
            onChange={(e) => setEmail(e.target.value)}  // 入力の変更をstateに反映
            required
          />
        </label>
        <label>
          <Paragraph text='Password' size='medium' color='black' />
          <input
            className='w-full mt-1 p-2 shadow-md'
            type="password"
            name="password"
            value={password}  // valueをstateにバインド
            onChange={(e) => setPassword(e.target.value)}  // 入力の変更をstateに反映
            required
          />
        </label>
        <div>
          <Button type='submit' text='Sign Up' size='medium' color='white' bgColor='primary' />
        </div>
      </form>
    </AuthLayout>
  );
}

export default withAuthRedirect(sineUpPage);
