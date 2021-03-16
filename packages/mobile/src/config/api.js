import Reactotron from 'reactotron-react-native';
import Config from 'react-native-config';
import { create } from 'apisauce';
import { CamelcaseSerializer, SnakecaseSerializer } from 'cerealizr';

export const deserializer = new CamelcaseSerializer();
export const serializer = new SnakecaseSerializer();

export const HEADER = {
  AUTHORIZATION: 'Authorization'
};

export const api = create({
  baseURL: Config.API_BASE_URL,
  timeout: 15000,
  headers: {
    [HEADER.TENANT]: Config.TENANT,
    [HEADER.PLATFORM]: 'app'
  }
});

export const apiSetup = baseApi => {
  baseApi.addResponseTransform(response => {
    if (response.data) {
      response.data = deserializer.serialize(response.data);
    }
  });

  baseApi.addRequestTransform(request => {
    if (request.params) {
      request.params = serializer.serialize(request.params);
    }
    if (request.data) {
      request.data = serializer.serialize(request.data);
    }
  });
  baseApi.addMonitor(Reactotron.apisauce);
};

export default api;
