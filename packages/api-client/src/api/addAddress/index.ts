import { CustomQuery } from "@vue-storefront/core";
import { serializeAddress } from '../serializers/address';

export default async function addAddress(context, params, _customQuery: CustomQuery) {
  const bearerToken = context.auth.getToken();
  const serializedAddress = serializeAddress(params);
  const result = await context.client.account.createAddress({ bearerToken }, { address: serializedAddress });

  if (result.isSuccess()) {
    const data = result.success.data;
    return data;
  } else {
    throw result.fail();
  }
}