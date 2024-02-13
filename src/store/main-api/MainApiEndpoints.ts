import { url } from 'inspector';
import { mainApi } from './MainApiRouter.api';
import { API_PATH } from '../../constants/ApiBaseUrl';
import { ISignUPResponse } from '../../interfaces/responses/signup';
import { ISignUPRequest } from '../../interfaces/requests/signup';

const mainApiEndpoint = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<ISignUPResponse, ISignUPRequest>({
      query: (body) => ({
        url: API_PATH.SIGN_UP,
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useSignUpMutation } = mainApiEndpoint;
