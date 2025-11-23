
const SigninPage = () => {
  return (
    <div className='flex-center min-h-screen'>
      <div className=''>
        <div className=''>
          <h1>Personalized AI Newsletter</h1>
          <p>Sign In to your account</p>
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
                required
              />
            </div>
            <button type='submit'>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SigninPage