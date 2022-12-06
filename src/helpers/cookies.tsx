import Cookie from 'js-cookie';

type ResultCookie = {
    category: string;
    score: number
}

export const setCookie = (cookiename: string, value: ResultCookie[] ) => {
  Cookie.set(cookiename, JSON.stringify(value), {
    expires: 1,
    secure: true,
    sameSite: 'strict',
    path: '/'
  });
}

export const getCookie = (cookiename: string):ResultCookie[] | undefined => {
  const stringValue = Cookie.get(cookiename);
  if (stringValue) return JSON.parse(stringValue)
  return undefined
}