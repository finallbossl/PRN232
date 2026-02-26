import { authApi } from './auth.api';
import { motorbikeApi } from './motorbike.api';
import { rentalApi } from './rental.api';
import { blogApi } from './blog.api';
import { promotionApi } from './promotion.api';
import { userApi } from './user.api';

export * from './auth.api';
export * from './motorbike.api';
export * from './rental.api';
export * from './blog.api';
export * from './promotion.api';
export * from './user.api';

/**
 * Central API object grouping all services
 */
export const api = {
  auth: authApi,
  motorbike: motorbikeApi,
  rental: rentalApi,
  blog: blogApi,
  promotion: promotionApi,
  user: userApi,
};

export default api;
