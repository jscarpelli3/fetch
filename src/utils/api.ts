const BASE_URL: string = 'https://frontend-take-home-service.fetch.com'


const login = async (name: string, email: string):Promise<void> => {
  try {
        const response = await fetch(`${BASE_URL}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({name, email}),
          credentials: 'include',
        })

        if (response.ok) {
          console.log('Login Successful!')
        } else {
          console.log('Error Logging In')
        }
  } catch (error) {
    console.log('Network Error',error)
  } 
}

const logout = async ():Promise<void> => {
  try {
        const response = await fetch(`${BASE_URL}/auth/logout`, {
          method: 'POST',
          credentials: 'include',
        })

        if (response.ok) {
          console.log('LogOut Successful!')
        } else {
          console.log('Error Logging Out')
        }
  } catch (error) {
    console.log('Network Error',error)
  } 
}

export {login, logout}

