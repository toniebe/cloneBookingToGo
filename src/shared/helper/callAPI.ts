import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {BASE_URL, APPLICATION_ID, API_KEY} from '@env';

export async function callApi<T>(
  url: string,
  method: string,
  body?: any,
): Promise<T> {
  const response = await fetch(`${BASE_URL}/${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'X-Parse-Application-Id': APPLICATION_ID,
      'X-Parse-REST-API-Key': API_KEY,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    Toast.show({
      type: 'error',
      text2: 'Ada kendala pada sistem',
    });
  }

  try {
    const data = (await response.json()) as T;
    return data;
  } catch (error) {
    console.error('Error parsing response:', error);
    throw new Error('Invalid response from server');
  }
}
