import { OAuth2Client } from 'google-auth-library'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const oauth2Client = new OAuth2Client({
    clientId: '181599956887-2tp2frmm6thmnrvqa2apemba6ntcshd5.apps.googleusercontent.com',
    clientSecret: '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',
    redirectUri: 'https://gahgah147-fuzzy-space-spoon-r7wxpr6www6fjqw-3000.preview.app.github.dev',
  })

  oauth2Client.setCredentials({ access_token: body.accessToken })

  const userInfo = await oauth2Client
    .request({
      url: 'https://www.googleapis.com/oauth2/v3/userinfo'
    })
    .then((response) => response.data)
    .catch(() => null)

  oauth2Client.revokeCredentials()

  if (!userInfo) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid token'
    })
  }

  const jwtTokenPayload = {
    id: userInfo.sub,
    nickname: userInfo.name,
    email: userInfo.email
  }

  const maxAge = 60 * 60 * 24 * 7
  const expires = Math.floor(Date.now() / 1000) + maxAge

  const jwtToken = jwt.sign(
    {
      exp: expires,
      data: jwtTokenPayload
    },
    runtimeConfig.jwtSignSecret
  )

  setCookie(event, 'access_token', jwtToken, {
    httpOnly: true,
    maxAge,
    expires: new Date(expires * 1000),
    secure: process.env.NODE_ENV === 'production',
    path: '/'
  })

  return {
    id: userInfo.id,
    nickname: userInfo.name,
    avatar: userInfo.picture,
    email: userInfo.email
  }
})