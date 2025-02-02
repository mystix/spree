import { ApiContext } from '../../types';
import { deserializeCountry } from '../serializers/country';

export default async function getAvailableCountries({ client }: ApiContext) {
  const result = await client.countries.list();
  if (result.isSuccess()) {
    return result.success().data.map(c => deserializeCountry(c, []));
  } else {
    throw result.fail();
  }
}
