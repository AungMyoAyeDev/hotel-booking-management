import { Booking } from '../../bookings/entities/booking.entity';
import { Hotel } from '../../hotels/entities/hotel.entity';
// import { Notification } from '../../notifications/entites/notification.entity';
import { Review } from '../../reviews/entities/review.entity';
import { Room } from '../../rooms/entities/room.entity';
// import { Uploads } from '../../uploads/entites/uploads.entity';
import { User } from '../../users/entities/user.entity';

const entities = [User, Booking, Hotel, Review, Room];
export default entities;
