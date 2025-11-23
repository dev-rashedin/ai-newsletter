
const SigninPage = () => {
  return (
    <div className='flex-center min-h-screen'>
      <div className=''>
        <div className='space-y-12'>
          <h1>Personalized AI Newsletter</h1>
          <h3 className="text-center mb-8">Sign In to your account</h3>
        </div>
        <div className='w-full max-w-md'>
          <form action=''>
            {/* Email */}
            <div className='flex flex-col'>
              <label htmlFor='email'>Email Address</label>
              <input
                id='email'
                name='email'
                type='email'
                placeholder='Email'
                autoComplete='email'
                required
              />
            </div>
            {/* Password */}
            <div className='flex flex-col'>
              <label htmlFor='password'>Password</label>
              <input
                id='password'
                name='password'
                type='password'
                placeholder='Password'
                autoComplete='current-password'
                required
              />
            </div>
            <div className='my-4'>
              <button type='submit'>Sign In</button>
            </div>
            <div className='flex-center gap-2'>
            <span >Don&apos;t have an account?</span> 
              <a href='/signup'>Sign Up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SigninPage