async function getToken (code: string, tokenEndpoint: string): Promise<any> {

  const payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      },
    body: new URLSearchParams({
      client_id: import.meta.env.VITE_CLIENT_ID,
      client_secret: import.meta.env.VITE_CLIENT_SECRET,
      grant_type: "authorization_code",
      code: code,
      redirect_uri: 'http://127.0.0.1:5173',
    }),
  };
  
  const body = await fetch(tokenEndpoint, payload)
  if (!body){
    throw new Error('Failed to fetch token')
  }

  const response = await body.json()
  return response
}

export default getToken